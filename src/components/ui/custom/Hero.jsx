import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[60px] text-center mt-16'>
        <span className='text-[#0000ff]'>Discover Your Next Adventure with AI:</span> Personalized</h1>
        <p className='text-xl text-blue-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interets and budget</p>
        
        <Link to={'/create-trip'}>
          <Button> Get Started, It's Free</Button>
        </Link>
    </div>
  )
}

export default Hero