import React, { useState, useEffect } from 'react'
import CampaignTable from './CampaignTable'
import EventSimulator from './EventSimulator'
import ProcessStatus from './ProcessStatus'
import Refresh from './Refresh'
import ControlButton from './ControlButton'
import { TABLE_REFRESH_MS } from '../../../backend/src/config/config.js'


const Dashboard = () => {
  const API_BASE_URL = process.env.VITE_API_BASE_URL;
  const [campaigns, setCampaigns] = useState({});
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [processRunning, setProcessRunning] = useState(false);

  const fetchCampaignData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/campaigns`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setCampaigns(data);
      setLastUpdate(new Date());
    } catch (error) {
      console.error("Failed to fetch the data:", error);
    }
  };

  const fetchProcessStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/control/status`);
      if (!response.ok) throw new Error('Failed to fetch status');
      const data = await response.json();
      setProcessRunning(data.isRunning || data.isRunnig);
    } catch (error) {
      console.error('Error fetching process status:', error);
    }
  };

  useEffect(() => {
    fetchCampaignData();
    const intervalID = setInterval(() => {
      fetchCampaignData();
    }, TABLE_REFRESH_MS);
    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    fetchProcessStatus();
    const interval = setInterval(() => {
        fetchProcessStatus();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex-1 mx-5 mt-5 py-14 px-18 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10'>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='lg: col-span-1 space-y-6'>
                <ProcessStatus isRunning={processRunning} />
                <EventSimulator />
                <ControlButton onStatusChange={fetchProcessStatus} />
            </div>
            <div className="lg:col-span-2 space-y-4">
                <CampaignTable campaigns={campaigns} lastUpdate={lastUpdate} />
                <Refresh onRefresh={fetchCampaignData} />
            </div>
        </div>

    </section>
  )
}

export default Dashboard