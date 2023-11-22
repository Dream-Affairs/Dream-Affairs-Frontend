import React, { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import { AddGuestModal } from '../add-guest-modal/add-guest-modal';
import { Store, Tags } from '@/components/svg-icons/svg-icons';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, Hash } from 'lucide-react';
import { DialogClose } from '@/components/ui/dialog';

interface Props {
  tags: string[];
  selectedGuestNumber: number;
}

function AssignTagsModal({ tags, selectedGuestNumber }: Props) {
  const [assignTag, setAssignedTag] = useState<string[]>([]);

  const selectTag = (tag: string) => {
    setAssignedTag((prevState) => {
      if (prevState.includes(tag)) {
        return prevState.filter((item) => item !== tag);
      } else {
        return [...prevState, tag];
      }
    });
  };

  return (
    <AddGuestModal
      size="sm"
      modalTitle={`Assign Tags (${selectedGuestNumber} guests selected)`}
      Icon={Tags}
      triggerBtnText="Assign Tags"
      variant={selectedGuestNumber ? null : 'outline'}
      className={selectedGuestNumber ? 'guest-btn' : 'gap-2'}
      disableTrigger={selectedGuestNumber ? false : true}
    >
      <div className="min-h-[162px] guest-modal-border px-14 py-6">
        <p className="text-[#282828]">
          From the variety of tags below attach some to guests for easy identification and grouping
        </p>

        <div className="flex gap-5 pt-10 flex-wrap">
          {tags.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => selectTag(item)}
                className={`tags w-fit cursor-pointer ${assignTag.includes(item) ? null : 'opacity-50'}`}
              >
                {item}
              </span>
            );
          })}
        </div>
        <DialogClose className="mx-auto block">
          <Button variant="secondary" className="px-8 block mt-10 w-36 mx-auto">
            Done
          </Button>
        </DialogClose>
      </div>
    </AddGuestModal>
  );
}

export default AssignTagsModal;
