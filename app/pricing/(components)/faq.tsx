import React from 'react'

interface faqProps{
    faqData:{
        id: number;
        question: string;
        answer: string;
    }[]
  }

const faq = (props : faqProps) => {  
  return (
    <div className='h-[1443px] bg-[#F5E7FF] mt-24'>
        <div className='py-12 text-center w-[553px] mx-auto'>
            <h2 className='text-[32px] font-[600] my-2'>Frequently asked questions</h2>
            <p className='text-[24px]'>Here are some Answers to your Billing and Cancellation Questions.</p>
        </div>
        {props.faqData?.map((info )=> (
            <div key={info.id} className='h-[195px] w-[624px] mx-auto shadow-sm  shadow-[rgba(16,24,40,0.10)] mb-8  text-center flex items-center justify-center flex-col px-[35px]'>
                <h3 className='text-primary text-[24px] font-[500] my-2'>{info.question}</h3>
                <p className='text-[#1C1C1C] text-[16px]'>{info.answer}</p>
            </div>
        ))}
    </div>
  )
}

export default faq