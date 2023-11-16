'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import sort from './icons/sort.png';
import actionImg from './icons/action.png';
import edituser from './icons/edit-user.png';
import removeuser from './icons/remove-user.png';
import reinstateuser from './icons/reinstate-user.png';
import resendinvite from './icons/resend-invite.png';
import MyModal from './modal';

export default function Teammgt() {
  const [activeTab, setActiveTab] = useState('teamMembers');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [actionName, setActionName] = useState('');

  //   test mode
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const toggleMemberActions = (index: number) => {
    if (selectedMember === index && isActionsOpen) {
      closeMemberActions();
    } else {
      setSelectedMember(index);
      setIsActionsOpen(true);
    }
  };

  const closeMemberActions = () => {
    setSelectedMember(null);
    setIsActionsOpen(false);
  };
  // test end

  const showTeamMembers = () => {
    setActiveTab('teamMembers');
  };

  const showUnverifiedUsers = () => {
    setActiveTab('unverifiedUsers');
  };

  const showSuspendedUsers = () => {
    setActiveTab('suspendedUsers');
  };

  //   functions for modal
  const openSuspendUserModal = () => {
    setModalTitle("You're about to Suspend this User");
    setModalMessage(
      'Are you sure you want to suspend the wedding planner from the collaboration team? This action will restrict their access to the shared dashboard and collaborative features.',
    );
    setActionName('Suspend');
    handleOpenModal();
  };

  const openRemoveUserModal = () => {
    setModalTitle("You're about to Remove this User");
    setModalMessage(
      'Are you sure you want to remove the wedding planner from the collaboration team? This action will revoke their access to the shared dashboard and collaborative features.',
    );
    setActionName('Remove');
    handleOpenModal();
  };

  const openReinstateUserModal = () => {
    setModalTitle('You about to Reinstate this User');
    setModalMessage(
      'you are lifting the suspension, allowing the user to resume their normal activities on the platform. Ensure a smooth return to regular participation and collaboration.',
    );
    setActionName('Reinstate');
    handleOpenModal();
  };

  const openResendInvitLinkModal = () => {
    setModalTitle('You about to Resend invite link this User');
    setModalMessage(
      `Give it another shot! Resend the invitation link to ensure they don't miss out on the exciting collaboration. Let's make sure they're part of the action!`,
    );
    setActionName('Resend');
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    closeMemberActions();
    // Disable scrolling when the modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Enable scrolling when the modal is closed
    document.body.style.overflow = 'auto';
  };

  // Sample data for members
  const members = [
    { fullName: 'John Doe', email: 'johndoe@example.com', role: 'Admin', status: 'Team Member' },
    { fullName: 'Alice Smith', email: 'alicesmith@example.com', role: 'Event Planner', status: 'Unverified' },
    { fullName: 'Bob Johnson', email: 'bobjohnson@example.com', role: 'Guest Manager', status: 'Suspended' },
    { fullName: 'Eve Adams', email: 'eveadams@example.com', role: 'Admin', status: 'Team Member' },
    { fullName: 'Charlie Brown', email: 'charliebrown@example.com', role: 'Guest Manager', status: 'Suspended' },
    { fullName: 'Prosper Pii', email: 'prosperh@example.com', role: 'Event Planner', status: 'Team Member' },
  ];

  const filteredMembers = members.filter((member) => member.status === 'Team Member');
  const filteredUnverifiedUsers = members.filter((member) => member.status === 'Unverified');
  const filteredSuspendedUsers = members.filter((member) => member.status === 'Suspended');

  return (
    <div>
      <div className="flex gap-4">
        <button
          className={`tab-button focus:outline-none ${
            activeTab === 'teamMembers'
              ? 'text-primary font-medium border-b-[3px] pb-2 border-primary'
              : 'text-black pb-2'
          }`}
          onClick={showTeamMembers}
        >
          Team Members{' '}
          <span
            className={
              activeTab === 'teamMembers'
                ? `bg-secondary rounded-full py-1 px-2 ml-2`
                : `bg-accent rounded-full py-1 px-2 ml-2`
            }
          >
            {filteredMembers.length}
          </span>
        </button>
        <button
          className={`tab-button focus:outline-none ${
            activeTab === 'unverifiedUsers'
              ? 'text-primary font-medium border-b-[3px] border-primary pb-2'
              : 'text-black pb-2'
          }`}
          onClick={showUnverifiedUsers}
        >
          Unverified Users{' '}
          <span
            className={
              activeTab === 'unverifiedUsers'
                ? `bg-secondary rounded-full py-1 px-2 ml-2`
                : `bg-accent rounded-full py-1 px-2 ml-2`
            }
          >
            {filteredUnverifiedUsers.length}
          </span>
        </button>
        <button
          className={`tab-button focus:outline-none ${
            activeTab === 'suspendedUsers'
              ? 'text-primary font-medium border-b-[3px] border-primary pb-2'
              : 'text-black pb-2'
          }`}
          onClick={showSuspendedUsers}
        >
          Suspended Users
          <span
            className={
              activeTab === 'suspendedUsers'
                ? `bg-secondary rounded-full py-1 px-2 ml-2`
                : `bg-accent rounded-full py-1 px-2 ml-2`
            }
          >
            {filteredSuspendedUsers.length}
          </span>
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'teamMembers' && (
          <div>
            <table className="min-w-full table-auto">
              <thead className="border-b">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 text-left">Full Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr key={index} className={'border-b'}>
                    <td className="px-4 py-2 text-center">
                      <Image src={sort} alt="sort" />
                    </td>
                    <td className="px-4 py-2 text-left">{member.fullName}</td>
                    <td className="px-4 py-2 text-left">{member.email}</td>
                    <td className="px-4 py-2 text-left">{member.role}</td>
                    <td className="px-4 py-2 text-end">
                      <ActionButton
                        selected={selectedMember === index}
                        toggleMemberActions={() => toggleMemberActions(index)}
                        closeMemberActions={closeMemberActions}
                        activeTab={activeTab}
                        openModal={handleOpenModal}
                        openRemoveUserModal={openRemoveUserModal}
                        openSuspendUserModal={openSuspendUserModal}
                        openReinstateUserModal={openReinstateUserModal}
                        openResendInvitLinkModal={openResendInvitLinkModal}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'unverifiedUsers' && (
          <div>
            <table className="min-w-full table-auto">
              <thead className="border-b">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">Full Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUnverifiedUsers.map((member, index) => (
                  <tr key={index} className={'border-b'}>
                    <td className="px-4 py-2 text-center">
                      <Image src={sort} alt="sort" />
                    </td>
                    <td className="px-4 py-2 text-center">{member.fullName}</td>
                    <td className="px-4 py-2 text-center">{member.email}</td>
                    <td className="px-4 py-2 text-center">{member.role}</td>
                    <td className="px-4 py-2 text-center">
                      <ActionButton
                        selected={selectedMember === index}
                        toggleMemberActions={() => toggleMemberActions(index)}
                        closeMemberActions={closeMemberActions}
                        activeTab={activeTab}
                        openModal={handleOpenModal}
                        openRemoveUserModal={openRemoveUserModal}
                        openSuspendUserModal={openSuspendUserModal}
                        openReinstateUserModal={openReinstateUserModal}
                        openResendInvitLinkModal={openResendInvitLinkModal}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'suspendedUsers' && (
          <div>
            <table className="min-w-full table-auto">
              <thead className="border-b">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">Full Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredSuspendedUsers.map((member, index) => (
                  <tr key={index} className={'border-b'}>
                    <td className="px-4 py-2 text-center">
                      <Image src={sort} alt="sort" />
                    </td>
                    <td className="px-4 py-2 text-center" style={{ color: '#9C9C9C' }}>
                      {member.fullName}
                    </td>
                    <td className="px-4 py-2 text-center" style={{ color: '#9C9C9C' }}>
                      {member.email}
                    </td>
                    <td className="px-4 py-2 text-center" style={{ color: '#9C9C9C' }}>
                      {member.role}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <ActionButton
                        selected={selectedMember === index}
                        toggleMemberActions={() => toggleMemberActions(index)}
                        closeMemberActions={closeMemberActions}
                        activeTab={activeTab}
                        openModal={handleOpenModal}
                        openRemoveUserModal={openRemoveUserModal}
                        openSuspendUserModal={openSuspendUserModal}
                        openReinstateUserModal={openReinstateUserModal}
                        openResendInvitLinkModal={openResendInvitLinkModal}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* test */}
      {isModalOpen && (
        <MyModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          title={modalTitle}
          message={modalMessage}
          actionName={actionName}
        />
      )}
    </div>
  );
}

interface ActionButtonProps {
  selected: boolean;
  toggleMemberActions: () => void;
  closeMemberActions: () => void;
  activeTab: string;
  openModal: () => void;
  openSuspendUserModal: () => void;
  openRemoveUserModal: () => void;
  openReinstateUserModal: () => void;
  openResendInvitLinkModal: () => void;
}

function ActionButton(props: ActionButtonProps) {
  const {
    selected,
    toggleMemberActions,
    closeMemberActions,
    activeTab,
    openModal,
    openRemoveUserModal,
    openSuspendUserModal,
    openReinstateUserModal,
    openResendInvitLinkModal,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);

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

// component for the popup action
function renderActionButton(imageSrc: string, label: string, onClick: () => void) {
  return (
    <button
      className="hover:bg-gray-100 flex gap-1 h-[44px] items-center justify-start pl-4 text-base font-normal leading-[22.4px]"
      onClick={onClick}
    >
      <Image src={imageSrc} alt={label} width={24} height={24} />
      <p>{label}</p>
    </button>
  );
}
