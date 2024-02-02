import { DocumentText, ProfileRemove, Search } from '../../svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import SendInviteModal from '../send-invite-modal/send-invite-modal';
import guests from '@/app/dashboard/guest-management/data/dummy_guests';
import GuestTags from '../tags/tags';
import { Checkbox } from '@/components/ui/checkbox';
import Pagination from '../pagination/pagination';
import { guestSelection, selectAllGuest } from '@/lib/utils';

interface Props {
  selectedGuests: string[];
  setSelectedGuests: React.Dispatch<React.SetStateAction<string[]>>;
}

function ConfirmSend({ selectedGuests, setSelectedGuests }: Props) {
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [highlightedGuests, setHighlightedGuests] = useState<string[]>([]);
  const [deletedGuests, setDeletedGuests] = useState<string[]>([]);
  const filter = (item: any) => {
    return !deletedGuests.includes(item.id) && item.fullName.toLowerCase().includes(search.toLowerCase());
  };
  const guests_list = guests.filter(filter).slice((currentPage - 1) * 10, currentPage * 10);

  const deleteGuests = () => {
    setDeletedGuests((prevState) => [...prevState, ...highlightedGuests]);
    setHighlightedGuests([]);
  };

  return (
    <div className="pt-8 px-10">
      <div className="border border-[#F0C5C5] rounded-[0.5rem] mb-10">
        <header className="px-12 pt-6 pb-10 flex justify-between gap-24">
          <div className="flex flex-1 items-center rounded-[6px] p-4 gap-2 border border-[#D0D5DD]">
            <Search height="20" width="20" />
            <input
              type="text"
              className="flex-1 focus:outline-none"
              placeholder="Search RSVPs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            disabled={highlightedGuests.length ? false : true}
            className="flex gap-2 items-center"
            onClick={deleteGuests}
          >
            <ProfileRemove />
            Remove Guest
          </Button>
        </header>
        <div className="overflow-x-scroll">
          <table className="w-full">
            <thead className="bg-[#FFF8FA] text-left border-b font-medium border-b-[#E1E1E1]">
              <tr>
                {selectedGuests.length > 0 && (
                  <th className="py-4 px-4 font-medium">
                    <Checkbox
                      checked={highlightedGuests.length === guests.length}
                      onClick={() => selectAllGuest(highlightedGuests, guests, setHighlightedGuests)}
                    />
                  </th>
                )}
                <th className="py-4 px-4 font-medium">Guest Name</th>
                <th className="py-4 px-4 font-medium">Email</th>
                <th className="py-4 px-4 font-medium text-center whitespace-nowrap">Plus One?</th>
                <th className="py-4 px-4 font-medium">Address</th>
              </tr>
            </thead>
            {selectedGuests.length > 0 && (
              <tbody>
                {guests_list.map((item) => {
                  return (
                    <tr key={item.id} className="border-t border-t-[#E1E1E1]">
                      <td className="py-4 px-4 bg-[#FFF8FA]">
                        <Checkbox
                          onClick={() => guestSelection(item.id, setHighlightedGuests)}
                          checked={highlightedGuests.includes(item.id)}
                        />
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">{item.fullName}</td>
                      <td className="py-4 px-4">{item.email}</td>
                      <td className="py-4 px-4 text-center capitalize">{item.plusOne}</td>
                      <td className="py-4 px-4 whitespace-nowrap">{item.address}</td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
          {guests_list.length === 0 && selectedGuests.length > 0 && (
            <p className="font-medium text-center py-8">No Match found</p>
          )}
          {selectedGuests.length === 0 && (
            <div className="text-center py-14">
              <div className="h-20 w-20 text-5xl text-[#292D32] rounded-full mx-auto bg-[#E8E8E8] grid place-content-center">
                <AiOutlineUserAdd />
              </div>
              <h4 className="py-4">
                <SendInviteModal
                  setState={setSelectedGuests}
                  btnText="Add recipients"
                  variant={null}
                  className="text-2xl font-medium text-[#282828]"
                />
              </h4>
              <p className="text-[#535353]">
                Each guest will receive a unique invitation with their name, link to view your website and their invite
                code
              </p>
            </div>
          )}
        </div>
      </div>
      {selectedGuests.length > 0 && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} list={guests.filter(filter)} />
      )}{' '}
    </div>
  );
}

export default ConfirmSend;
