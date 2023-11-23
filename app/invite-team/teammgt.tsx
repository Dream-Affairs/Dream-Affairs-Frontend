'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import sort from './icons/sort.png';
import arrowDown from './icons/arrow-down.png';
import MyModal from './modal';
import ActionButton from './utils/actionbtn';
import { useSorting } from './utils/utils';
import { useModal, useMemberActions } from './utils/utils';
import { MODAL_TITLES, MODAL_MESSAGES, MODAL_STYLES } from './utils/utils';
import { fetchAcceptedInvites } from './api/api';
import { fetchSuspendedInvites } from './api/api';
import { suspendUser } from './api/api';
import Loading from './loading';
import { toast } from '@/components/ui/use-toast';
import MemberItem from './(component)/mobiletable';

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
    setActionButtonStyle,
    modalAction,
    setModalAction,
  } = useModal();
  const { sortOrder, sortField, handleSort } = useSorting();
  // const { data, onDragStart, onDragEnd, isDragging } = useDragAndDrop();
  const { selectedMember, isActionsOpen, toggleMemberActions, closeMemberActions } = useMemberActions();
  const [activeTab, setActiveTab] = useState('teamMembers');
  const [acceptedInvites, setAcceptedInvites] = useState<AcceptedInvite[]>([]);
  const [suspendedInvites, SetSupendedInvites] = useState<SuspendeInvites[]>([]);

  useEffect(() => {
    // Fetch accepted invites when the component mounts
    const organizationId = '4a7f6a9f98684f89a10af27167000e2a';
    fetchAcceptedInvites(organizationId)
      .then((data: AcceptedInvite[]) => {
        setAcceptedInvites(data);
      })
      .catch((error: Error) => {
        // Handle the error, if necessary
        console.error('Error fetching accepted invites:', error.message);
      });
  }, []);

  useEffect(() => {
    // Fetch accepted invites when the component mounts
    const organizationId = '4a7f6a9f98684f89a10af27167000e2a';
    fetchSuspendedInvites(organizationId)
      .then((data: AcceptedInvite[]) => {
        SetSupendedInvites(data);
      })
      .catch((error: Error) => {
        // Handle the error, if necessary
        console.error('Error fetching suspended invites invites:', error.message);
      });
  }, []);

  const handleSuspendUser = async (memberId: string) => {
    const organizationId = '4a7f6a9f98684f89a10af27167000e2a';

    try {
      await suspendUser(organizationId, memberId);
      toast({
        title: 'User Suspended',
        description: `${memberId} has been suspended`,
      });
      console.log('User suspended successfully');
    } catch (error: any) {
      // Handle errors
      console.error('Error suspending user:', error.message);
    }
  };

  // const containerRef = useRef<HTMLDivElement | null>(null);
  // useOutsideClickHandler(selectedMember, containerRef, closeMemberActions);

  const showTeamMembers = () => setActiveTab('teamMembers');
  const showUnverifiedUsers = () => setActiveTab('unverifiedUsers');
  const showSuspendedUsers = () => setActiveTab('suspendedUsers');

  const openSuspendUserModal = (memberId: string) => {
    setModalTitle(MODAL_TITLES.suspend);
    setModalMessage(MODAL_MESSAGES.suspend);
    setActionName('Suspend');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.suspend);
    setModalAction({
      action: () => handleSuspendUser(memberId),
      actionName: 'Suspend',
      memberId: memberId,
    });
    handleOpenModal();
  };

  const openRemoveUserModal = () => {
    setModalTitle(MODAL_TITLES.remove);
    setModalMessage(MODAL_MESSAGES.remove);
    setActionName('Remove');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.remove);
    handleOpenModal();
  };

  const openReinstateUserModal = () => {
    setModalTitle(MODAL_TITLES.reinstate);
    setModalMessage(MODAL_MESSAGES.reinstate);
    setActionName('Reinstate');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.reinstate);
    handleOpenModal();
  };

  const openResendInvitLinkModal = () => {
    setModalTitle(MODAL_TITLES.resendInviteLink);
    setModalMessage(MODAL_MESSAGES.resendInviteLink);
    setActionName('Resend');
    setActionButtonStyle(MODAL_STYLES.actionButtonStyles.resendInviteLink);
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
  // to filter what to render on each table
  const filteredMembers = acceptedInvites.filter((member) => member.is_accepted);
  const filteredSuspendedUsers = suspendedInvites.filter((member) => member.is_suspended && member.is_accepted);
  const filteredUnverifiedUsers = acceptedInvites.filter((member) => member.is_accepted);

  // to sort each column alphbetically
  const getSortedMembers = (membersArray: AcceptedInvite[]) => {
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
      <div className="flex overflow-x-auto sm:overflow-x-auto gap-4 pb-4">
        <button
          className={`tab-button whitespace-nowrap text-xs lg:text-base focus:outline-none ${
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
          className={`tab-button whitespace-nowrap text-xs lg:text-base focus:outline-none ${
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
          className={`tab-button whitespace-nowrap text-xs lg:text-base focus:outline-none ${
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

      <Suspense fallback={<Loading />}>
        <div className="tab-content">
          {activeTab === 'teamMembers' && (
            <div>
              {sortedMembers.length === 0 ? (
                <p className="text-center font-bold text-lg">No team members found.</p>
              ) : (
                <>
                  <div className="flex flex-col gap-5">
                    {sortedMembers.map((member, index) => (
                      <MemberItem
                        key={index}
                        member={member}
                        index={index}
                        selectedMember={selectedMember}
                        toggleMemberActions={toggleMemberActions}
                        closeMemberActions={closeMemberActions}
                        activeTab={activeTab}
                        openRemoveUserModal={openRemoveUserModal}
                        openSuspendUserModal={() => openSuspendUserModal(member.id)}
                        openReinstateUserModal={openReinstateUserModal}
                        openResendInvitLinkModal={openResendInvitLinkModal}
                      />
                    ))}
                  </div>
                  <div className="lg:block hidden">
                    <table className="min-w-full table-auto">
                      <thead className="border-b">
                        <tr>
                          <th className="px-4 py-2"></th>
                          <th
                            className="px-4 py-2 flex items-center gap-1 text-left cursor-pointer"
                            onClick={() => handleSort('name')}
                          >
                            Full Name {sortField === 'name' && <Image src={arrowDown} alt="arrow-down" />}
                          </th>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
                            Email{' '}
                            {sortField === 'email' && (
                              <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />
                            )}
                          </th>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('role')}>
                            Role{' '}
                            {sortField === 'role' && (
                              <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />
                            )}
                          </th>
                          <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedMembers.map((member, index) => (
                          <tr key={index} className={`border-b`}>
                            <td className="px-4 py-2 text-center cursor-move">
                              <Image src={sort} alt="sort" />
                            </td>
                            <td className="px-4 py-2 text-left capitalize">{member.name}</td>
                            <td className="px-4 py-2 text-left">{member.email}</td>
                            <td className="px-4 py-2 text-left capitalize">{member.role}</td>
                            <td className="px-4 py-2 text-end">
                              <ActionButton
                                selected={selectedMember === index}
                                toggleMemberActions={() => toggleMemberActions(index)}
                                closeMemberActions={closeMemberActions}
                                activeTab={activeTab}
                                // openModal={handleOpenModal}
                                openRemoveUserModal={openRemoveUserModal}
                                openSuspendUserModal={() => openSuspendUserModal(member.id)}
                                openReinstateUserModal={openReinstateUserModal}
                                openResendInvitLinkModal={openResendInvitLinkModal}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}
          {activeTab === 'unverifiedUsers' && (
            <div>
              {sortedUnverifiedUsers.length === 0 ? (
                <p className="text-center font-bold text-lg">No unverified users found.</p>
              ) : (
                <div>
                  <div className="flex flex-col gap-5">
                    {sortedUnverifiedUsers.map((member, index) => (
                      <MemberItem
                        key={index}
                        member={member}
                        index={index}
                        selectedMember={selectedMember}
                        toggleMemberActions={toggleMemberActions}
                        closeMemberActions={closeMemberActions}
                        activeTab={activeTab}
                        openRemoveUserModal={openRemoveUserModal}
                        openSuspendUserModal={() => openSuspendUserModal(member.id)}
                        openReinstateUserModal={openReinstateUserModal}
                        openResendInvitLinkModal={openResendInvitLinkModal}
                      />
                    ))}
                  </div>

                  <div className="lg:block hidden">
                    <table className="min-w-full table-auto">
                      <thead className="border-b">
                        <tr>
                          <th className="px-4 py-2"></th>
                          <th
                            className="px-4 py-2 flex items-center gap-1 text-left cursor-pointer"
                            onClick={() => handleSort('name')}
                          >
                            Full Name {sortField === 'name' && <Image src={arrowDown} alt="arrow-down" />}
                          </th>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
                            Email{' '}
                            {sortField === 'email' && (
                              <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />
                            )}
                          </th>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('role')}>
                            Role{' '}
                            {sortField === 'role' && (
                              <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />
                            )}
                          </th>
                          <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedUnverifiedUsers.map((member, index) => (
                          <tr key={index} className={'border-b'}>
                            <td className="px-4 py-2 text-center cursor-move">
                              <Image src={sort} alt="sort" />
                            </td>
                            <td className="px-4 py-2 text-left">{member.name}</td>
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
                                openSuspendUserModal={() => openSuspendUserModal(member.id)}
                                openReinstateUserModal={openReinstateUserModal}
                                openResendInvitLinkModal={openResendInvitLinkModal}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
          {activeTab === 'suspendedUsers' && (
            <div>
              {sortedSuspendedUsers.length === 0 ? (
                <p className="text-center font-bold text-lg">No suspended users found.</p>
              ) : (
                <>
                  <div className="flex flex-col gap-5">
                    {sortedSuspendedUsers.map((member, index) => (
                      <MemberItem
                        key={index}
                        member={member}
                        index={index}
                        selectedMember={selectedMember}
                        toggleMemberActions={toggleMemberActions}
                        closeMemberActions={closeMemberActions}
                        activeTab={activeTab}
                        openRemoveUserModal={openRemoveUserModal}
                        openSuspendUserModal={() => openSuspendUserModal(member.id)}
                        openReinstateUserModal={openReinstateUserModal}
                        openResendInvitLinkModal={openResendInvitLinkModal}
                      />
                    ))}
                  </div>
                  <div className="lg:block hidden">
                    <table className=" min-w-full table-auto">
                      <thead className="border-b">
                        <tr>
                          <th className="px-4 py-2"></th>
                          <th
                            className="px-4 py-2 flex items-center gap-1 text-left cursor-pointer"
                            onClick={() => handleSort('name')}
                          >
                            Full Name {sortField === 'name' && <Image src={arrowDown} alt="arrow-down" />}
                          </th>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
                            Email{' '}
                            {sortField === 'email' && (
                              <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />
                            )}
                          </th>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('role')}>
                            Role{' '}
                            {sortField === 'role' && (
                              <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />
                            )}
                          </th>
                          <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedSuspendedUsers.map((member, index) => (
                          <tr key={member.id} className={'border-b'}>
                            <td className="px-4 py-2 text-center cursor-move">
                              <Image src={sort} alt="sort" />
                            </td>
                            <td className="px-4 py-2 text-left capitalize" style={{ color: '#9C9C9C' }}>
                              {member.name}
                            </td>
                            <td className="px-4 py-2 text-left" style={{ color: '#9C9C9C' }}>
                              {member.email}
                            </td>
                            <td className="px-4 py-2 text-left capitalize" style={{ color: '#9C9C9C' }}>
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
                                openSuspendUserModal={() => openSuspendUserModal(member.id)}
                                openReinstateUserModal={openReinstateUserModal}
                                openResendInvitLinkModal={openResendInvitLinkModal}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </Suspense>

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
          modalAction={modalAction}
        />
      )}
    </div>
  );
}

interface AcceptedInvite {
  id: string;
  name: string;
  email: string;
  role: string;
  organization: string;
  invite_token: string;
  is_accepted: boolean;
  is_suspended: boolean;
}
interface SuspendeInvites {
  id: string;
  name: string;
  email: string;
  role: string;
  organization: string;
  invite_token: string;
  is_accepted: boolean;
  is_suspended: boolean;
}
