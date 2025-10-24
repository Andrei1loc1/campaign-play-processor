import React from 'react'
import CampaignTable from './CampaignTable'
import EventSimulator from './EventSimulator'
import ProcessStatus from './ProcessStatus'
import Refresh from './Refresh'

const Dashboard = () => {
  return (
    <section className='flex-1 mx-10 my-10'>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='lg: col-span-1 space-y-6'>
                <EventSimulator />
                <ProcessStatus />
            </div>
            <div className="lg: col-span-2 space-y-4">
                <CampaignTable />
                <Refresh />
            </div>
        </div>
    </section>
  )
}

export default Dashboard