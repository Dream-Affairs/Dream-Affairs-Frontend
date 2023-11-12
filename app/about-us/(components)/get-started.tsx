import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import ringBg from '../(assets)/ring-bg.png'

const GetStarted = () => {
  return (
    <section className='relative w-full flex flex-col items-center pt-[80px] h-[522px]'>
        <Image src={ringBg} alt='' width={1140} height={522} className='w-full h-full absolute top-0 -z-10'/>
        <div className='px-[147px] flex flex-col gap-y-[23px] text-[#FFFFFF]'>
        <h1 className='font-[700] text-[60px] leading-[79.6px] '>Start Planning Your Dream Wedding</h1>
        <p className='font-[500] text-[40px] leading-[56px] text-center'>Sign up now and unlock a world of powerful tools to create the perfect wedding experience</p>
        </div>
        <Button variant='secondary' className='w-fit text-[24px] leading-[33.6px] mt-[79px] px-[48px]'>Get Started</Button>

    </section>
  )
}

export default GetStarted