import React from 'react'
import heroVid from "../../assets/hero.mp4"
const Hero = () => {
  return (
    <div className='relative w-full h-full overflow-hidden'>
        <video src={heroVid}></video>
    </div>
  )
}

export default Hero