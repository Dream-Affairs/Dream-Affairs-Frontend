import React from 'react'
import bgLogo from '../(assets)/bglogo.svg';
import mobileBg from '../(assets)/mobileBg.svg'


const Hero = () => {
    console.log(mobileBg.src)

  return (
    <section>
       <div className="lg:bg-black lg:bg-opacity-[50%] lg:bg-blend-overlay lg:bg-cover lg:bg-center lg:h-[493px] lg:flex justify-center hidden" style={{ backgroundImage:  `url(${bgLogo.src})`}}> 
         <div className="text-center text-white mt-20">
            <h1 className="text-[64px] font-[700]">Pricing Plans</h1>
            <p className="text-[40px] font-[500]">Choose the Perfect Plan for Your Dream Affairs.</p>
          </div>
    </div>
       <div className="bg-black bg-opacity-[50%] bg-blend-overlay bg-cover bg-center h-[493px] flex justify-center lg:hidden" style={{ backgroundImage:  `url(${mobileBg.src})`}}>
         <div className="text-center text-white m-auto w-[327px]">
            <h1 className="text-[24px] font-[700] mb-[20px]">Pricing Plans</h1>
            <p className="text-[16px] font-[500]">Choose the Perfect Plan for Your Dream Affairs.</p>
          </div>
      </div> 
    </section>
   
  )
}

export default Hero