import React from 'react'

const EventSimulator = () => {
  const CAMPAIGN_IDS = ['cmp-2025-ALPHA', 'cmp-2025-BETA', 'cmp-2025-GAMMA'];
  const SCREEN_IDS = ['screen-101', 'screen-102', 'screen-103', 'screen-104'];
  const API_BASE_URL = process.env.VITE_API_BASE_URL;


  const getRandomId = (array) => array[Math.floor(Math.random() * array.length)];

  const generateRandomEvent = () => ({
    screen_id: getRandomId(SCREEN_IDS),
    campaign_id: getRandomId(CAMPAIGN_IDS),
    timestamp: new Date().toISOString(),
  });

  const simulateEvent = async () => {
      const event = generateRandomEvent();
      try {
              const response = await fetch(`${API_BASE_URL}/events`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(event),
              });

              if (response.status === 202) {
                  console.log(`Eveniment send and accepted: ${event.campaign_id}`);
              } else {
                  console.error('Error to send event');
              }
              
          } catch (error) {
              console.error("Eroare de rețea:", error);
          }
    }

  return (
    <div className='event-card'>
        <p className='text-xl font-bold mb-5'>EVENT SIMULATOR</p>
        <button onClick={simulateEvent} className='px-6 py-3 bg-white/10 backdrop-blur-md rounded-full font-bold hover:bg-white/20 transition cursor-pointer'>Simulate Event</button>
    </div>
  )
}

export default EventSimulator