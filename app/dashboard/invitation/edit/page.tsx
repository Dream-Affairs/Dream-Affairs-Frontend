'use client';

import Image from 'next/image';
import uploadIcon from '../../(assets)/upload_image.png';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import tags from '../../(assets)/tags.svg';
import envelope from '../../(assets)/mail.svg';
import bannerimage from '../../(assets)/image_banner.png';
import TestInvitationModal from '../../(components)/invitation/TestInvitationModal';
import { FormEvent, ReactEventHandler, SetStateAction, useState } from 'react';
import MergeTagsModal from '../../(components)/invitation/MergeTagsModal';
import MergeTagsFullModal from '../../(components)/invitation/MergeTagsFullModal';
import EmailEditPreview from '../../(components)/invitation/EmailEditPreview';

type HandlersType = {
  [key: string]: React.Dispatch<SetStateAction<string>>;
};

export default function EditInvitation() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showMergeModal, setShowMergeModal] = useState<boolean>(false);
  const [subject, setSubject] = useState('');
  const [coupleName, setCoupleName] = useState('');
  const [title, setTitle] = useState('');
  const [salutation, setSalutation] = useState('');
  const [body, setBody] = useState('');
  const [button, setButton] = useState('');
  const [error, setError] = useState('');

  const formStateManager: HandlersType = {
    subject: setSubject,
    couple: setCoupleName,
    title: setTitle,
    salutation: setSalutation,
    body: setBody,
    button: setButton,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const handler = formStateManager[e.currentTarget.id as string];
    handler(e.target.value);
  };

  const handlePreview = () => {
    if (title && salutation && subject && coupleName && body && button) {
      console.log('passed');
      const invitationPreview = {
        subject,
        coupleName,
        title,
        salutation,
        body,
        button,
      };
      localStorage.setItem('invitationData', JSON.stringify(invitationPreview));
      window.location.href = '/dashboard/invitation/preview';
    } else {
      console.log('failed');
      setError('* All fields are required');
    }
  };

  return (
    <>
      <h3 className="p-8 pb-6 text-3xl font-semibold">Invitation</h3>
      <p className="text-lg font-semibold py-0 px-6 pb-4">RSVP Invitation</p>
      <hr />
      <div className="flex px-[2%] pt-[25px] pb-[50px]">
        <div className="w-[40%] ">
          <form method="post" className="px-8">
            <h4 className="font-semibold">Upload Image</h4>
            <div className="flex flex-col items-center w-full">
              <label htmlFor="image_upload" className="w-[16%] h-[20%] hover:cursor-pointer">
                <Image
                  src={uploadIcon}
                  alt="upload icon"
                  width={0}
                  height={0}
                  style={{ width: '100vw', height: '100%' }}
                />
              </label>
              <span className="pt-4 text-slate-400">Click here to select an image</span>
              <Input type="file" name="image" id="image_upload" className="hidden" />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="subject" className="font-semibold mb-4 text-md">
                Email Subject
              </Label>
              <Input type="text" value={subject} onChange={handleInputChange} name="email_subject" id="subject" />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="couple" className="font-semibold mb-4 text-md">
                Couple Name
              </Label>
              <Input type="text" value={coupleName} onChange={handleInputChange} name="couple_name" id="couple" />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="title" className="font-semibold mb-4 text-md">
                Title
              </Label>
              <Input type="text" value={title} onChange={handleInputChange} name="title" id="title" />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="salutation" className="font-semibold mb-4 text-md">
                Salutation
              </Label>
              <Input type="text" value={salutation} onChange={handleInputChange} name="salutation" id="salutation" />
            </div>
            <div className="flex items-center">
              <Checkbox name="guest_checkbox" id="guest_checkbox_id" />
              <Label className="ml-2 text-md font-light" htmlFor="guest_checkbox_id">
                Include guest name
              </Label>
            </div>
            <div className="flex flex-col mb-4 mt-4">
              <Label htmlFor="body" className="font-semibold mb-4 text-md">
                Body Message
              </Label>
              <textarea
                value={body}
                onChange={handleInputChange}
                className="border rounded-md resize-none border-input px-3 py-2 focus:border-muted transition-colors duration-200 ease-in-out outline-none hover:border-primary"
                rows={10}
                name="body"
                id="body"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="button_text_id" className="font-semibold mb-4 text-md">
                Button Text
              </Label>
              <div className="flex gap-[25px]">
                <div className="w-3/5">
                  <Input
                    className=""
                    value={button}
                    onChange={handleInputChange}
                    type="text"
                    name="button_text"
                    id="button"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-[55px] w-2/5">Website</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Home</SelectItem>
                    <SelectItem value="laundry">Laundry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <span className="text-primary font-semibold">{error}</span>

            <div className="flex items-center gap-8 px-6 pt-[80px]">
              <span className="font-semibold text-primary cursor-pointer" role="button" onClick={handlePreview}>
                Preview
              </span>
              <Button className="bg-transparent text-primary border rounded-md border-primary w-1/3 hover:text-[#fff]">
                Cancel
              </Button>
              <Button id="save_email_button" className="w-3/5 bg-[#E0B0FF] text-black hover:text-[#fff]">
                <svg
                  className="pr-2"
                  id="svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.89 5.88281H5.10999C3.39999 5.88281 2 7.2828 2 8.9928V20.3528C2 21.8028 3.04 22.4228 4.31 21.7128L8.23999 19.5228C8.65999 19.2928 9.34 19.2928 9.75 19.5228L13.68 21.7128C14.95 22.4228 15.99 21.8028 15.99 20.3528V8.9928C16 7.2828 14.6 5.88281 12.89 5.88281Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8.9928V20.3528C16 21.8028 14.96 22.4128 13.69 21.7128L9.76001 19.5228C9.34001 19.2928 8.65999 19.2928 8.23999 19.5228L4.31 21.7128C3.04 22.4128 2 21.8028 2 20.3528V8.9928C2 7.2828 3.39999 5.88281 5.10999 5.88281H12.89C14.6 5.88281 16 7.2828 16 8.9928Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Save Email
              </Button>
            </div>
          </form>
        </div>
        <div className="w-1/2 px-[5%] ]">
          <div className="flex justify-end gap-8 mb-4">
            <div className="flex gap-2">
              <Image src={tags} alt="tag" />
              <span
                role="button"
                onClick={() => {
                  setShowMergeModal(true);
                }}
                className="text-xl text-primary font-medium"
              >
                Merge tags
              </span>
            </div>
            <div className="flex gap-2">
              <Image src={envelope} alt="envelope" />
              <span
                role="button"
                onClick={() => setShowModal(true)}
                className="text-xl text-primary font-medium cursor-pointer"
              >
                Send test
              </span>
            </div>
          </div>

          <EmailEditPreview title={title} body={body} salutation={salutation} button={button} couple={coupleName} />

          <TestInvitationModal modalStatus={showModal} modalManager={setShowModal} />
          <MergeTagsFullModal modalStatus={showMergeModal} modalManager={setShowMergeModal} />
        </div>
      </div>
    </>
  );
}
