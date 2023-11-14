"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import tags from '../../(assets)/tags.svg'
import envelope from '../../(assets)/mail.svg'
import monitor from '../../(assets)/monitor.svg'
import phone from '../../(assets)/phone.svg'
import applestore from '../../(assets)/applestore.svg'
import playstore from '../../(assets)/playstore.svg'
import dream_logo from '../../(assets)/dream_logo.svg'
import { useEffect, useState } from 'react';
import TestInvitationModal from '../../(components)/invitation/TestInvitationModal';
import Link from 'next/link';

type invitationProp = {
    subject: string;
    coupleName: string;
    title: string;
    salutation: string;
    body: string;
    button: string;
}


export default function Preview({dangerouslySetInnerHTML}:{dangerouslySetInnerHTML?: {__html: string}}) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [data,setData] = useState<invitationProp>()
    const body = (data?.body as string).replace(/\n/g, '<br />');
    dangerouslySetInnerHTML = {__html: `<p className="mt-4">${body || ""}</p>` }
    
    useEffect(() => {
        if (typeof window != 'undefined' && window.localStorage) {
            const data = localStorage.getItem("invitationData") as string;
            setData(JSON.parse(data));
        }
    },[])
    
    
  return (
    <>
    <div className="py-4 border-b border-b-slate-200">
        <h3 className='text-3xl font-semibold p-8'>Invitation</h3>
        <h4 className='text-xl font-semibold mx-4'>Preview</h4>
    </div>
    
        <div className="flex items-center justify-between gap-8 ml-[20%] mb-[50px] mt-4 mr-[5%]">
            <div className="flex items-center gap-4">
                <Button className='w-[90px] h-[50px]' variant={"secondary"}><Image src={monitor} alt='monitor' width={25} height={25}/> </Button>
                <Button className='w-[90px] h-[50px]' variant={'disabled'}><Image src={phone} alt='phone' width={25} height={25}/> </Button>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <Image src={tags} alt="tag" />
                    <span className="text-xl text-primary font-medium">Merge tags</span>
                </div>
                <div className="flex gap-2">
                    <Image src={envelope} alt="envelope" />
                    <span role="button" onClick={() => setShowModal(true)} className="text-xl text-primary font-medium cursor-pointer">Send test</span>
                </div>
            </div>
        </div>

        <div className="mx-[20%]">
            <div className="w-full bg-[#FFF8FA] p-[70px]">
                <div className=" flex flex-col border-[#A8394C] border">

                    <div className="mx-8 mt-8">
                        <div className="w-full h-[250px]">
                            <Image src="/assets/image_banner.png" alt="image" sizes="100vw" style={{width: "100vw", height: "100%"}}
                            height={0} width={0} />
                        </div>
                        <div className="text-center text-[#48195A] mt-8">
                            <h3 className="text-[40px] font-semibold">{data?.coupleName || ""}</h3>
                            <h5 className="text-2xl">{data?.title || ""}</h5>
                        </div>
                        <div className="text-center font-normal pt-8">
                            <p>{data?.salutation} [Guest Name] </p>
                            <div dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
                        </div>
                        <div className="flex justify-center my-8">
                            <Button id="save_email_button" className="w-2/5 border border-[#E6C0FF] bg-[#F5E7FF] text-black hover:text-[#fff]">
                                {data?.button || ""}</Button>
                        </div>
                        <hr className='bg-[#000]' />
                        <div className="w-full flex justify-center mt-6 mb-8">
                            <div className="flex flex-col items-center mt-8 w-[70%]">
                                <p className='text-center'>Get the DreamAffairs app to plan your own wedding and stay up-to-date with details on the go.</p>
                                <h5 className='font-semibold mb-2'>Download the app</h5>
                                <div className="flex gap-2">
                                    <div className="">
                                        <Image src={applestore} alt='applestore' width={0} height={0} sizes='100vw' />
                                    </div>
                                    <div className="">
                                        <Image src={playstore} alt='playstore' width={0} height={0} sizes='100vw' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer flex flex-col items-center mt-8 bg-[#F5E7FF] gap-2 py-2">
                        <Image src={dream_logo} alt='dream_logo' width={70} height={70} />
                        <p className='text-center w-[75%] font-medium'>This message was sent from dreamaffairs.com on behalf of Chinonye and John. Send replies to chinonyeumeh.14@gmail.com.</p>
                        <div className="flex justify-center gap-2 font-semibold">
                            <Link href={""}>Learn More</Link>
                            <span>|</span>
                            <Link href={""}> Privacy Policy</Link>
                            <span>|</span>
                            <Link href={""}>Terms and Conditions</Link>
                        </div>
                    </div>       
                    
                    <TestInvitationModal modalStatus={showModal} modalManager={setShowModal} />
                </div>   
            </div>
            
        </div>
    </>
  )
}
