import React from 'react'
import { RefreshCcw } from 'lucide-react';

const Refresh = ({ onRefresh }) => {
  return (
    <div className='refresh-card h-20 mt-5'>
        <button onClick={onRefresh} className='glass-button-primary flex flex-row'>
            <RefreshCcw className='mr-2' />
            <p>Refresh</p>
        </button>
    </div>
  )
}

export default Refresh