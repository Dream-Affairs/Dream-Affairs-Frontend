import React, { Dispatch, FormEvent, SetStateAction, useMemo, useRef, useState } from 'react';
import { AddGuestModal } from '../add-guest-modal/add-guest-modal';
import { Search } from '../../svg-icons/svg-icons';
import guests, { default_tags } from '@/app/dashboard/guest-management/data/dummy_guests';
import { cn, guestSelection, selectAllGuest } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import StatusTag from '../status-tag/status-tag';
import Pagination from '../pagination/pagination';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

interface Props {
  setState: Dispatch<SetStateAction<any[]>>;
  Icon?: React.FC;
  btnText: string;
  variant: any;
  className: string;
  disable?: boolean;
}

function SendInviteModal({ setState, Icon, btnText, variant, className, disable }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const filter = (item: any) => {
    return item.fullName.toLowerCase().includes(search.toLowerCase());
  };
  const guests_list = guests.filter(filter).slice((currentPage - 1) * 10, currentPage * 10);
  const closeBtn = useRef<HTMLButtonElement>(null);

  function closeModal() {
    closeBtn.current?.click();
  }

  function cancel() {
    setSelected([]);
    setSelectedTags([]);
    closeModal();
  }

  function done() {
    setState(guests.filter((item) => selected.includes(item.id)));
    closeModal();
  }

  return (
    <AddGuestModal
      Icon={Icon}
      size="lg"
      modalTitle="Add Recipients"
      triggerBtnText={btnText}
      className={className}
      variant={variant}
      disableTrigger={disable}
    >
      <div className="min-h-[162px] guest-modal-border px-14 py-4 text-[#1c1c1c]">
        <div className="flex items-start justify-between">
          <div className="flex items-center flex-1 max-w-sm rounded-[6px] px-4 py-2 gap-2 border border-[#D0D5DD]">
            <Search height="20" width="20" />
            <input
              type="text"
              className="flex-1 focus:outline-none"
              placeholder="Search RSVPs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <p>
            Selected <span className="font-semibold">({selected.length})</span>
          </p>
        </div>
        <div className="grid grid-cols-12 pt-6">
          <div className="col-span-4">
            <h4 className="font-semibold mb-2">Select by Tag:</h4>
            <ul className="flex flex-col gap-2 max-h-64 overflow-y-auto">
              {default_tags.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => guestSelection(item, setSelectedTags)}
                    className="tags p-2 w-fit rounded-[8px] cursor-pointer"
                  >
                    <span className={cn('font-normal', selectedTags.includes(item) ? 'opacity-100' : 'opacity-50')}>
                      {item} ({Math.floor(Math.random() * (6 + 1))})
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-8 pl-12">
            <h4 className="font-semibold">Select Manually:</h4>
            <div className="h-64 pr-6 pt-2 overflow-y-scroll mb-3">
              <div className="border border-[#E1E1E1] rounded-lg">
                <table className="w-full text-[#282828] text-sm">
                  <thead className="bg-[#FFF8FA]">
                    <tr>
                      <th className="py-4 px-2">
                        <Checkbox
                          onClick={() => selectAllGuest(selected, guests_list, setSelected)}
                          checked={selected.length === guests_list.length}
                        />
                      </th>
                      <th className="py-4 px-2 font-medium text-left">Guest Name</th>
                      <th className="py-4 px-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests_list.map((item) => {
                      return (
                        <tr key={item.id} className="border-t border-t-[#E7E7E7]">
                          <td className="py-2.5 px-2 bg-[#FFF8FA]">
                            <div className="flex justify-center">
                              <Checkbox
                                id={item.id}
                                onClick={() => guestSelection(item.id, setSelected)}
                                checked={selected.includes(item.id)}
                              />
                            </div>
                          </td>
                          <td className="py-2.5 px-2">{item.fullName}</td>
                          <td className="py-2.5 px-2">
                            <StatusTag status={item.rsvpStatus} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination list={guests.filter(filter)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-6">
          <Button size="lg" onClick={cancel} variant="outline">
            Cancel
          </Button>
          <Button size="lg" onClick={done} variant="secondary">
            Done
          </Button>
          <DialogClose ref={closeBtn} className="hidden"></DialogClose>
        </div>
      </div>
    </AddGuestModal>
  );
}

export default SendInviteModal;
