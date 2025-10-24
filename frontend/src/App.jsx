import React from 'react'
import LetterGlitch from './components/LetterGlitch'
import LiquidNav from './components/LiquidNav'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className='flex-1'>
      <div className="absolute inset-0 -z-10">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <main className='relative z-10 w-full items-center justify-center flex flex-col gap-10 pt-10'>
        <LiquidNav />
        <Dashboard />
      </main>
    </div>
  )
}

export default App