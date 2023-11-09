import React from 'react'
import bgLogo from '../(assets)/bglogo.svg';


const Hero = () => {
    console.log(bgLogo.src)

  return (
    <div className="bg-black bg-opacity-[50%] bg-blend-overlay bg-cover bg-center h-[493px] flex justify-center" style={{ backgroundImage:  `url(${bgLogo.src})`}}>  
         <div className="text-center text-white mt-20">
            <h1 className="text-[64px] font-[700]">Pricing Plans</h1>
            <p className="text-[40px] font-[500]">Choose the Perfect Plan for Your Dream Affairs.</p>
          </div>
    </div>
  )
}

export default Hero