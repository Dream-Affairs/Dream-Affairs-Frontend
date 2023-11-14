"use client"
import React, { useState } from 'react'
import Modal from '@/components/ui/Modal'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import check from "../../(assets)/sent_check.svg"
import Image from 'next/image';

type Props = {
    modalStatus: boolean,
    modalManager: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EmailSentModal({modalStatus, modalManager}: Props) {
    
    const hidden = modalStatus ? "px-6 py-8" : "hidden"
  return (
    <div>
        <Modal modal={true} hidden={hidden} setModal={modalManager}  >
            <div className={`flex flex-col items-center w-[400px] h-auto bg-white fixed left-[50%] top-[50%] z-50 grid  max-h-[850px] rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 overflow-auto transition-all ${hidden}`}>
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-semibold">Email Sent</h1>
                    <Image src={check} alt='check image' width={50} height={50} />
                    <p className='text-[#576672]'>You have successfully sent your test email</p>
                    <Button className='w-full' variant={'secondary'} onClick={() => modalManager(false)}>Done</Button>
                </div>
            </div>
        </Modal>
    </div>
  )
}