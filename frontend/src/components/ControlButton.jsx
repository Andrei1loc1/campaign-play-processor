import React from 'react'

const ControlButton = ({ onStatusChange }) => {
  const API_BASE_URL = process.env.SERVER_APP_API_URL;

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
         <button onClick={startProcess} className='w-[50%] px-6 py-3 bg-green-500/10 backdrop-blur-md border-r border-white/10 font-bold hover:bg-green-500/20 transition cursor-pointer'>START</button>
         <button onClick={stopProcess} className='w-[50%] px-6 py-3 bg-red-500/30 backdrop-blur-md font-bold hover:bg-red-500/40 transition cursor-pointer'>STOP</button>
       </div>
    </div>
  )
}

export default ControlButton