'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import sort from './icons/sort.png';
import arrowDown from './icons/arrow-down.png';
import MyModal from './modal';
import ActionButton from './utils/actionbtn';
import { useSorting } from './utils/useSorting';
import { useModal, useMemberActions } from './utils/utils';
import { MODAL_TITLES, MODAL_MESSAGES, MODAL_STYLES } from './utils/utils';

export default function Teammgt() {
  const {
    isModalOpen,
    modalTitle,
    modalMessage,
    actionName,
    handleOpenModal,
    handleCloseModal,
    setModalTitle,
    setModalMessage,
    setActionName,
    actionButtonStyle,
    cancelButtonStyle,
    setActionButtonStyle,
    setCancelButtonStyle,
  } = useModal();
  const { sortOrder, sortField, handleSort } = useSorting();
  const { selectedMember, isActionsOpen, toggleMemberActions, closeMemberActions } = useMemberActions();
  const [activeTab, setActiveTab] = useState('teamMembers');

  // const containerRef = useRef<HTMLDivElement | null>(null);
  // useOutsideClickHandler(selectedMember, containerRef, closeMemberActions);

  const showTeamMembers = () => setActiveTab('teamMembers');
  const showUnverifiedUsers = () => setActiveTab('unverifiedUsers');
  const showSuspendedUsers = () => setActiveTab('suspendedUsers');

  const openSuspendUserModal = () => {
    setModalTitle(MODAL_TITLES.suspend);
    setModalMessage(MODAL_MESSAGES.suspend);
    setActionName('Suspend');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.suspend);
    setCancelButtonStyle(MODAL_STYLES.cancelButtonStyles.suspend);
    handleOpenModal();
  };

  const openRemoveUserModal = () => {
    setModalTitle(MODAL_TITLES.remove);
    setModalMessage(MODAL_MESSAGES.remove);
    setActionName('Remove');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.remove);
    setCancelButtonStyle(MODAL_STYLES.cancelButtonStyles.remove);
    handleOpenModal();
  };

  const openReinstateUserModal = () => {
    setModalTitle(MODAL_TITLES.reinstate);
    setModalMessage(MODAL_MESSAGES.reinstate);
    setActionName('Reinstate');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.reinstate);
    setCancelButtonStyle(MODAL_STYLES.cancelButtonStyles.reinstate);
    handleOpenModal();
  };

  const openResendInvitLinkModal = () => {
    setModalTitle(MODAL_TITLES.resendInviteLink);
    setModalMessage(MODAL_MESSAGES.resendInviteLink);
    setActionName('Resend');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.resendInviteLink);
    setCancelButtonStyle(MODAL_STYLES.cancelButtonStyles.resendInviteLink);
    handleOpenModal();
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    };

    handleBodyOverflow(); // Set initial body overflow
    return () => {
      handleBodyOverflow(); // Reset body overflow on component unmount
    };
  }, [isModalOpen]);

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

  const getSortedMembers = (membersArray: { fullName: string; email: string; role: string; status: string }[]) => {
    return [...membersArray].sort((a, b) => {
      const fieldA = a[sortField].toLowerCase();
      const fieldB = b[sortField].toLowerCase();

      if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const sortedMembers = getSortedMembers(filteredMembers);
  const sortedUnverifiedUsers = getSortedMembers(filteredUnverifiedUsers);
  const sortedSuspendedUsers = getSortedMembers(filteredSuspendedUsers);

  return (
    <div>
      <div className="flex gap-4 pb-4">
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
              activeTab === 'teamMembers' ? `bg-secondary rounded-full py-1 px-2` : `bg-accent rounded-full py-1 px-2`
            }
          >
            {filteredMembers.length}
          </span>
        </button>
        <button
          className={`tab-button focus:outline-none ${
            activeTab === 'unverifiedUsers'
              ? 'text-primary font-medium border-b-[3px] pb-2 border-primary'
              : 'text-black pb-2'
          }`}
          onClick={showUnverifiedUsers}
        >
          Unverified Users{' '}
          <span
            className={
              activeTab === 'unverifiedUsers'
                ? `bg-secondary rounded-full py-1 px-2`
                : `bg-accent rounded-full py-1 px-2`
            }
          >
            {filteredUnverifiedUsers.length}
          </span>
        </button>
        <button
          className={`tab-button focus:outline-none ${
            activeTab === 'suspendedUsers'
              ? 'text-primary font-medium border-b-[3px] pb-2 border-primary'
              : 'text-black pb-2'
          }`}
          onClick={showSuspendedUsers}
        >
          Suspended Users
          <span
            className={
              activeTab === 'suspendedUsers'
                ? `bg-secondary rounded-full py-1 px-2 ml-1`
                : `bg-accent rounded-full py-1 px-2 ml-1`
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
                  <th
                    className="px-4 py-2 flex items-center gap-1 text-left cursor-pointer"
                    onClick={() => handleSort('fullName')}
                  >
                    Full Name {sortField === 'fullName' && <Image src={arrowDown} alt="arrow-down" />}
                  </th>
                  <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
                    Email {sortField === 'email' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
                  </th>
                  <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('role')}>
                    Role {sortField === 'role' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
                  </th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedMembers.map((member, index) => (
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
                        // openModal={handleOpenModal}
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
                  <th
                    className="px-4 py-2 flex items-center gap-1 text-left cursor-pointer"
                    onClick={() => handleSort('fullName')}
                  >
                    Full Name {sortField === 'fullName' && <Image src={arrowDown} alt="arrow-down" />}
                  </th>
                  <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
                    Email {sortField === 'email' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
                  </th>
                  <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('role')}>
                    Role {sortField === 'role' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
                  </th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedUnverifiedUsers.map((member, index) => (
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
                        // openModal={handleOpenModal}
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
                  <th
                    className="px-4 py-2 flex items-center gap-1 text-left cursor-pointer"
                    onClick={() => handleSort('fullName')}
                  >
                    Full Name {sortField === 'fullName' && <Image src={arrowDown} alt="arrow-down" />}
                  </th>
                  <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
                    Email {sortField === 'email' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
                  </th>
                  <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('role')}>
                    Role {sortField === 'role' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
                  </th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedSuspendedUsers.map((member, index) => (
                  <tr key={index} className={'border-b'}>
                    <td className="px-4 py-2 text-center">
                      <Image src={sort} alt="sort" />
                    </td>
                    <td className="px-4 py-2 text-left" style={{ color: '#9C9C9C' }}>
                      {member.fullName}
                    </td>
                    <td className="px-4 py-2 text-left" style={{ color: '#9C9C9C' }}>
                      {member.email}
                    </td>
                    <td className="px-4 py-2 text-left" style={{ color: '#9C9C9C' }}>
                      {member.role}
                    </td>
                    <td className="px-4 py-2 text-end">
                      <ActionButton
                        selected={selectedMember === index}
                        toggleMemberActions={() => toggleMemberActions(index)}
                        closeMemberActions={closeMemberActions}
                        activeTab={activeTab}
                        // openModal={handleOpenModal}
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
          actionButtonStyle={actionButtonStyle}
          cancelButtonStyle={cancelButtonStyle}
        />
      )}
    </div>
  );
}
