import Modal from '@/components/ui/Modal'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import close_btn from "../../(assets)/close_btn.svg"
import { Input } from '@/components/ui/input';

type Props = {
    modalStatus: boolean,
    modalManager: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MergeTagsFullModal({modalStatus, modalManager}: Props) {
    const hidden = modalStatus ? "px-6 py-8" : "hidden"
  return (
    <div>
        <Modal modal={true} hidden={hidden} setModal={modalManager}  >
            <div className={`flex flex-col w-[650px] h-auto bg-white fixed left-[50%] top-[50%] z-50 grid  max-h-[650px] rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 overflow-auto transition-all ${hidden}`}>
            <h1 className="text-2xl font-semibold py-4">Merge tags</h1>
            <Image role='button' onClick={() => modalManager(false)} className='absolute top-[30px] right-[20px]' src={close_btn} alt='check image' width={30} height={30} />
                <div className="flex flex-col gap-2 text-[#282828]">
                    <h3 className='font-semibold text-xl '>Contact Tags</h3>
                    <hr className='h-2' />
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{ID}}"}</span>
                        <span>The subscribers unique ID</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{Email address}}"}</span>
                        <span>The subscribers email address</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{First name}}"}</span>
                        <span>The subscribers first name</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{Last name}}"}</span>
                        <span>The subscribers last name</span>
                    </div>

                    <h3 className='font-semibold text-xl mt-6'>RSVP Tags</h3>
                    <hr className='h-2' />
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{ID}}"}</span>
                        <span>The subscribers unique ID</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{Email address}}"}</span>
                        <span>The subscribers email address</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{First name}}"}</span>
                        <span>The subscribers first name</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{Last name}}"}</span>
                        <span>The subscribers last name</span>
                    </div>

                    <h3 className='font-semibold text-xl mt-6'>Guest Tags</h3>
                    <hr className='h-2' />
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{ID}}"}</span>
                        <span>The subscribers unique ID</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{Email address}}"}</span>
                        <span>The subscribers email address</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{First name}}"}</span>
                        <span>The subscribers first name</span>
                    </div>
                    <div className="w-full flex border rounded-md py-2 px-8">
                        <span className='w-2/5'>{"{{Last name}}"}</span>
                        <span>The subscribers last name</span>
                    </div>


                    
                </div>
            </div>
        </Modal>
    </div>
  )
}