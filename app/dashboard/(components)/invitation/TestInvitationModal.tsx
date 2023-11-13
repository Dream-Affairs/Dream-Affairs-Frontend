"use client"
import React, { useState } from 'react'
import Modal from '@/components/ui/Modal'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import EmailSentModal from './EmailSentModal';

type Props = {
    modalStatus: boolean,
    modalManager: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TestInvitationModal({modalStatus, modalManager}: Props) {
    const [sentModal,setSentModal] = useState<boolean>(false)
    const hidden = modalStatus ? "px-6 py-8" : "hidden"
  return (
    <div>
        <Modal modal={true} hidden={hidden} setModal={modalManager}  >
            <div className={`w-[600px] h-auto bg-white fixed left-[50%] top-[50%] z-50 grid  max-h-[850px] rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 overflow-auto transition-all ${hidden}`}>
                <h1 className="text-2xl font-semibold text-center">Send a test</h1>
                <div className="mt-6">
                    <div className="flex flex-col">
                    <Label htmlFor="email_list" className="font-semibold mb-4 text-md">Recipients</Label>
                        <Input id='email_list' type='email'></Input>
                        <span className='text-[#6F6F6F]'>Separate up to 10 recipients with commas</span>
                    </div>
                    <div className="flex flex-col mb-4 mt-4">
                        <Label htmlFor="body_id" className="font-semibold mb-4 text-md">Body Message</Label>
                        <textarea className="border rounded-md resize-none border-input px-3 py-2 focus:border-muted transition-colors duration-200 ease-in-out outline-none hover:border-primary" rows={5} name="body" defaultValue={" "} id="body_id" />
                        <span className='text-[#6F6F6F]'>Separate up to 10 recipients with commas</span>
                    </div>
                    <div className="w-full flex flex-row justify-end gap-4">
                        <Button variant={'outline'} onClick={() => modalManager(false)} className='w-1/4 h-[45px]'> Cancel</Button>
                        <Button variant={"secondary"} className='w-1/4 h-[45px]' onClick={() => {modalManager(false) ;setSentModal(true)}}>Send Email</Button>
                    </div>
                </div>
            </div>
        </Modal>
        <EmailSentModal modalManager={setSentModal} modalStatus={sentModal} />
    </div>
  )
}