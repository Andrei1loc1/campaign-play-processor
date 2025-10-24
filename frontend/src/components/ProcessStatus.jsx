import React from 'react'

const ProcessStatus = ({ isRunning }) => {
  return (
    <div className='event-card'>
        <p className='text-xl font-bold mb-5'>PROCESS STATUS</p>
        <div className={`text-lg font-bold px-6 py-3 rounded-sm ${isRunning ? 'bg-green-400/40' : 'bg-red-400/40'}`}>
            Event Process is {isRunning ? 'running...' : 'stopped'}
        </div>
    </div>
  )
}

export default ProcessStatus