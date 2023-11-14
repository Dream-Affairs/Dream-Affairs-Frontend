import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type Props = {
    subject?: string,
    title: string,
    couple: string,
    salutation: string,
    body: string,
    button: string
}

export default function EmailEditPreview({dangerouslySetInnerHTML,...Props}:Props&{dangerouslySetInnerHTML?: {__html: string}}) {
    const body = Props.body
    const updatedBody = body.replace(/\n/g, '<br />');
    const dangerouslySetInnerHTMLProps = {
        __html: `<p className="">${updatedBody}</p>`}
  return (
    <>
        <div className="w-full bg-[#FFF8FA] flex flex-col rounded-xl p-8">
            <div className="w-full h-[250px]">
                <Image src="/assets/image_banner.png" alt="image" sizes="100vw" style={{width: "100vw", height: "100%"}} 
                height={0} width={0} />
            </div>
            <div className="text-center text-[#48195A] mt-8">
                <h3 className="text-[40px] font-semibold">{Props.couple}</h3>
                <h5 className="text-2xl">{Props.title}</h5>
            </div>

            <div className="text-center font-normal pt-8">
                <p>{Props.salutation} [Guest Name] </p>
                <div dangerouslySetInnerHTML={dangerouslySetInnerHTMLProps} />
            </div>
            <div className="flex justify-center mt-8">
                <Button id="save_email_button" className="w-2/5 border border-[#E6C0FF] bg-[#F5E7FF] text-black hover:text-[#fff]">
                    {Props.button}</Button>
            </div>
            
        </div>
    </>
  )
}  




{/* We hope this message finds you well. We are delighted to invite you to our 
                            wedding and share this special moment with us.

                        Wedding Date: 30th October, 2024

                        Location: Eko Hotel, Lekki Phase 1, Lagos Nigeria

                        Church Wedding Time: 9:00am

                        Reception Time: 11:00am

                       RSVP ACCESS CODE: 
                        
                        To view more details and stay updated on the wedding, please visit our wedding website */}