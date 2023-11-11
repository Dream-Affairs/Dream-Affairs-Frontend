import React from 'react'
import contactBg from '../(assets)/contactbg.svg'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <div className="bg-[#090909] bg-opacity-[60%] bg-blend-overlay bg-cover bg-center lg:h-[522px] h-[402px] flex items-center justify-center mb-24" style={{ backgroundImage:  `url(${contactBg.src})`}}>
        <div className="text-center text-white w-[1126px]">
            <h2 className="lg:text-[64px] text-[32px] lg:font-[700] font-[500]">Start Planning Your Dream Wedding</h2>
            <p className="lg:text-[40px] text-[16px] font-[500]">Sign up now and unlock a world of powerful tools to create the perfect wedding experience</p>
            <Button size='lg' variant='secondary' className='mt-24 w-[244px] h-[58px] text-[24px] font-[500] text-[#282828]'>Get Started</Button>
          </div>
    </div>
  )
}

export default Contact