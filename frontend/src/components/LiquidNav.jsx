import React from 'react'
import { Cpu } from 'lucide-react'

const LiquidNav = () => {
  return (
    <nav className='w-[70%] h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-start px-10'>
        <Cpu className='text-white mr-2 pt-1' />
        <p className='text-white text-xl font-bold'><a href="/" className=''>Campaign Play Processor</a></p>
    </nav>
  )
}

export default LiquidNav