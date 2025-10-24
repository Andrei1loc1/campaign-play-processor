import React from 'react'
import { RefreshCcw } from 'lucide-react';

const Refresh = ({ onRefresh }) => {
  return (
    <div className='refresh-card h-20 mt-5'>
        <button onClick={onRefresh} className='flex flex-row px-6 py-3 bg-white/10 backdrop-blur-md rounded-full font-bold hover:bg-white/20 transition cursor-pointer'>
            <RefreshCcw className='mr-2' />
            <p>Refresh</p>
        </button>
    </div>
  )
}

export default Refresh