// this is the popup that shows when the action button is clicked, it sets what shows on each ta
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import actionImg from '../icons/action.png';
import edituser from '../icons/edit-user.png';
import removeuser from '../icons/remove-user.png';
import reinstateuser from '../icons/reinstate-user.png';
import resendinvite from '../icons/resend-invite.png';
import { renderActionButton } from './utils';

interface ActionButtonProps {
  selected: boolean;
  toggleMemberActions: () => void;
  closeMemberActions: () => void;
  activeTab: string;
  openRemoveUserModal: () => void;
  openSuspendUserModal: () => void;
  openReinstateUserModal: () => void;
  openResendInvitLinkModal: () => void;
}

export default function ActionButton(props: ActionButtonProps) {
  const {
    selected,
    toggleMemberActions,
    closeMemberActions,
    activeTab,
    openRemoveUserModal,
    openSuspendUserModal,
    openReinstateUserModal,
    openResendInvitLinkModal,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);

  // to close the modal when I click outside of the modal
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selected && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeMemberActions();
      }
    };

    if (selected) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [selected, closeMemberActions]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleMemberActions} className="text-white p-2 rounded">
        <Image src={actionImg} alt="action" />
      </button>
      {selected && (
        <div ref={containerRef} className="actions-container">
          <div
            className="absolute bottom-10 -left-[150px] mt-2 w-[190px] rounded-lg py-[6px] flex flex-col z-10"
            style={{
              backgroundColor: 'white',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            {activeTab === 'teamMembers' && (
              <>
                {renderActionButton(edituser.src, 'Edit user', () => null)}
                {renderActionButton(reinstateuser.src, 'Suspend user', () => openSuspendUserModal())}
                {renderActionButton(removeuser.src, 'Remove user', () => openRemoveUserModal())}
              </>
            )}
            {activeTab === 'suspendedUsers' && (
              <>
                {renderActionButton(edituser.src, 'Edit user', () => null)}
                {renderActionButton(reinstateuser.src, 'Reinstate user', () => openReinstateUserModal())}
                {renderActionButton(removeuser.src, 'Remove user', () => openRemoveUserModal())}
              </>
            )}
            {activeTab === 'unverifiedUsers' && (
              <>
                {renderActionButton(edituser.src, 'Edit user', () => null)}
                {renderActionButton(resendinvite.src, 'Resend invite', () => openResendInvitLinkModal())}
                {renderActionButton(removeuser.src, 'Remove user', () => openRemoveUserModal())}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
