import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { InviteMailingProp } from '@/index';
import { InviteTab } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import React, { ChangeEvent } from 'react';

interface Props {
  emailDetails: InviteMailingProp;
  setState: React.Dispatch<React.SetStateAction<InviteTab>>;
  setEmailDetailsState: React.Dispatch<React.SetStateAction<InviteMailingProp>>;
}

function EditEmail({ setState, emailDetails, setEmailDetailsState }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setEmailDetailsState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const setIncludeName = () => {
    setEmailDetailsState((prevState) => {
      return { ...prevState, use_guest_name: !prevState.use_guest_name };
    });
  };

  return (
    <div className="pl-8 pr-20">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 pb-5">
          <Label htmlFor="my_email">My Email</Label>
          <Input
            id="my_email"
            type="text"
            placeholder="bryan@website.com"
            errorMessage="Please fill out this field"
            error={false}
            hasValue={false}
            className="border-muted"
            onChange={handleChange}
            value={emailDetails.my_email}
          />
        </div>
        <div className="flex items-end pb-5">
          <div className="flex flex-col gap-2 w-80">
            <Label htmlFor="salutation">Salutation</Label>
            <Input
              id="salutation"
              type="text"
              placeholder="Hi"
              errorMessage="Please fill out this field"
              error={false}
              hasValue={false}
              className=" border-muted"
              onChange={handleChange}
              value={emailDetails.salutation}
            />
          </div>
          <div className="flex items-center gap-2 pb-5 pl-8">
            <Checkbox id="use_guest_name" onClick={setIncludeName} checked={emailDetails.use_guest_name} />
            <label
              htmlFor="use_guest_name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Use guest name(s) as it appears on table
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-5">
          <Label htmlFor="message_content">Messaging</Label>
          <Textarea
            id="message_content"
            placeholder="messaging"
            className="border-muted text-[#6F6F6F] focus:outline-none focus:ring-0"
            value={emailDetails.message_content}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-8 justify-center mt-14">
          <Button onClick={() => setState(InviteTab.EMAIL_SAMPLE)} variant="outline" size="lg">
            Back
          </Button>
          <Button variant="disabled" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditEmail;
