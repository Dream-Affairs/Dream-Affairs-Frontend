import Image from 'next/image'
import React from 'react'
import {SlArrowRight} from 'react-icons/sl'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="faq_banner_image w-full h-[55vh] relative ">
        <Image src="/assets/faq_banner.png" className="object-cover h-[100%] w-[100%]" sizes='100vw' alt="faq_banner_image" width={0} height={0}  style={{width: "100vw", height:'100%'}}/>
        <div className='w-full h-full bg-black absolute top-0 left-0 opacity-50'></div>
        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[80%] text-white text-center font-semibold">
        <h1 className='text-2xl'>Frequently Asked Questions</h1>
        <h4 className='text-lg mt-6'>Navigate through our extensive list of frequently asked questions to find answers and solutions for typical queries.</h4>
        </div>
        
    </div>
  )
}
// style={{width: "100vw", height:'100%'}}