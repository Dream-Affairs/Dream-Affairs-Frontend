import React, { useState } from 'react';
import Subtitle from './subtitle';
import { Button } from '@/components/ui/button';

interface rolesProp {
  visible: boolean;
}

const RolesData: React.FC<rolesProp> = ({ visible }) => {
  const [admin, SetAdmin] = useState<number>(3);
  const [planner, SetPlanner] = useState<number>(0);
  const [guestManager, SetGuestManager] = useState<number>(12);

  return (
    <div className={visible ? 'block' : 'hidden'}>
      <div className="flex justify-between items-center">
        <Subtitle text="Wedding Roles" />
        <div>
          <Button variant={'secondary'} className="px-10">
            New Role
          </Button>
        </div>
      </div>
      <div className="my-10">
        <div className={`${admin > 0 ? 'bg-[#F5E7FF]' : 'bg-transparent'} p-4 border border-[#D8BEE3] rounded-lg`}>
          <h4 className="font-medium text-lg">Admin</h4>
          <div className="flex justify-between mt-2">
            <p className="w-[70%] text-[#6F6F6F] text-sm">
              The primary user with full oversight and editing capabilities for all features within the platform,
              including event details, guest management, and website customization.
            </p>
            <h5 className="text-lg font-medium">{admin}</h5>
          </div>
        </div>
        <div
          className={`${planner > 0 ? 'bg-[#F5E7FF]' : 'bg-transparent'} p-4 border border-[#D8BEE3] rounded-lg my-6`}
        >
          <h4 className="font-medium text-lg">Event Planner</h4>
          <div className="flex justify-between mt-2">
            <p className="w-[70%] text-[#6F6F6F] text-sm">
              Collaborates with the couple to plan and organize the wedding details, acting as a secondary admin with
              extensive but not complete control over the platform.
            </p>
            <h5 className="text-lg font-medium">{planner}</h5>
          </div>
        </div>
        <div
          className={`${guestManager > 0 ? 'bg-[#F5E7FF]' : 'bg-transparent'} p-4 border border-[#D8BEE3] rounded-lg`}
        >
          <h4 className="font-medium text-lg">Guest Manager</h4>
          <div className="flex justify-between mt-2">
            <p className="w-[70%] text-[#6F6F6F] text-sm">
              Handles the intricacies of guest management, from invitations to guest list updates and RSVP tracking
              within the platform.
            </p>
            <h5 className="text-lg font-medium">{guestManager}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesData;
