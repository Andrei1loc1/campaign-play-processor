import React from 'react'
import { API_BASE_URL } from '../constants/variable.js'

const ControlButton = ({ onStatusChange }) => {

  const startProcess = async () => {
    try {
      await fetch(`${API_BASE_URL}/control/start`, { method: 'POST' });
      onStatusChange();
    } catch (error) {
      console.error('Error starting process:', error);
    }
  };

  const stopProcess = async () => {
    try {
      await fetch(`${API_BASE_URL}/control/stop`, { method: 'POST' });
      onStatusChange();
    } catch (error) {
      console.error('Error stopping process:', error);
    }
  };

  return (
    <div className='control-card'>
      <p className='text-xl font-bold mb-5 mt-3'>CONTROL PROCESS</p>
       <div className='w-full items-center justify-center gap-2 rounded-b-2xl overflow-hidden'>
         <button onClick={startProcess} className='glass-button-start'>START</button>
         <button onClick={stopProcess} className='glass-button-stop'>STOP</button>
       </div>
    </div>
  )
}

export default ControlButton