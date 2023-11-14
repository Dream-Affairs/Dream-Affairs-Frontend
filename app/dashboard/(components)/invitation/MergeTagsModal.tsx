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

export default function MergeTagsModal({modalStatus, modalManager}: Props) {
    const hidden = modalStatus ? "px-6 py-8" : "hidden"
  return (
    <div>
        <Modal modal={true} hidden={hidden} setModal={modalManager}  >
            <div className={`flex flex-col w-[650px] h-auto bg-white fixed left-[50%] top-[50%] z-50 grid  max-h-[850px] rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 overflow-auto transition-all ${hidden}`}>
            <h1 className="text-2xl font-semibold py-8 border-b">Merge tags</h1>
                <div className="flex flex-col gap-4">
                    <Image role='button' onClick={() => modalManager(false)} className='absolute top-[30px] right-[20px]' src={close_btn} alt='check image' width={30} height={30} />
                    <Input placeholder='Contact tags' type="text" name="email_subject" id="email_subject_id" />
                    <Input placeholder='RSVP tags' type="text" name="email_subject" id="email_subject_id" />
                    <Input placeholder='Guest tags' type="text" name="email_subject" id="email_subject_id" />
                    <Input placeholder='Friends & Family tags' type="text" name="email_subject" id="email_subject_id" />
                </div>
            </div>
        </Modal>
    </div>
  )
}