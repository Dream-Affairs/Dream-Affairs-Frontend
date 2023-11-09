import React from 'react'
import contactBg from '../(assets)/contactbg.svg'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <div className="bg-[#090909] bg-opacity-[50%] bg-blend-overlay bg-cover bg-center h-[661px] flex items-center justify-center my-24 relative z-10" style={{ backgroundImage:  `url(${contactBg.src})`}}>
        <div className='bg-[#E0B0FF] h-[661px]  w-full top-0 absolute bg-opacity-[50%] mix-blend-overlay'></div>
        <div className="text-center text-white w-[1126px]">
            <h2 className="text-[64px] font-[700]">Start Planning Your Dream Wedding</h2>
            <p className="text-[40px] font-[500]">Sign up now and unlock a world of powerful tools to create the perfect wedding experience</p>
            <Button size='lg' variant='secondary' className='mt-24 w-[244px] h-[58px] text-[24px] font-[500] text-[#282828]'>Get Started</Button>
          </div>
    </div>
  )
}

export default Contact