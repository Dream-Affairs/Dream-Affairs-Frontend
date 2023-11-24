import React from 'react';
import ActionButton from '../utils/actionbtn';

interface MemberItemProps {
  member: {
    name: string;
    role: string;
    email: string;
    id: string;
  };
  index: number;
  selectedMember: number | null;
  toggleMemberActions: (index: number) => void;
  closeMemberActions: () => void;
  activeTab: string;
  openRemoveUserModal: () => void;
  openSuspendUserModal: (id: string) => void;
  openReinstateUserModal: () => void;
  openResendInvitLinkModal: () => void;
}

const MemberItem: React.FC<MemberItemProps> = ({
  member,
  index,
  selectedMember,
  toggleMemberActions,
  closeMemberActions,
  activeTab,
  openRemoveUserModal,
  openSuspendUserModal,
  openReinstateUserModal,
  openResendInvitLinkModal,
}) => {
  return (
    <div
      key={index}
      className="lg:hidden rounded-md border border-[#E1E1E1] py-2 px-0 items-center flex justify-between"
    >
      <div className="px-4 py-2">
        <div className="flex flex-col gap-3">
          <p className="text-sm capitalize font-normal text-[#090909] leading-[20.3px]">
            {member.name}
            <span className="capitalize ml-2">({member.role})</span>
          </p>
          <p className="text-[#3A3A3A] text-sm font-normal leading-[20.3px]">{member.email}</p>
        </div>
      </div>
      <div className="pr-2">
        <ActionButton
          selected={selectedMember === index}
          toggleMemberActions={() => toggleMemberActions(index)}
          closeMemberActions={closeMemberActions}
          activeTab={activeTab}
          openRemoveUserModal={openRemoveUserModal}
          openSuspendUserModal={() => openSuspendUserModal(member.id)}
          openReinstateUserModal={openReinstateUserModal}
          openResendInvitLinkModal={openResendInvitLinkModal}
        />
      </div>
    </div>
  );
};

export default MemberItem;
