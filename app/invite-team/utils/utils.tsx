interface ButtonStyle {
  backgroundColor: any;
  textColor: any;
}

import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import Image from 'next/image';

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalMessage, setModalMessage] = useState<string>('');
  const [actionName, setActionName] = useState<string>('');
  const [actionButtonStyle, setActionButtonStyle] = useState<ButtonStyle>();
  const [modalAction, setModalAction] = useState<{
    action: () => void;
    actionName: string;
    memberId?: string | undefined;
  } | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return {
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
    setModalAction,
    modalAction,
  };
}

export function useMemberActions() {
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

  return {
    selectedMember,
    isActionsOpen,
    toggleMemberActions,
    closeMemberActions,
    setSelectedMember,
    setIsActionsOpen,
  };
}

// export function useOutsideClickHandler(
//   selected: number | null,
//   containerRef: React.RefObject<HTMLDivElement>,
//   closeMemberActions: () => void,
// ) {
//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent<Element, MouseEvent>) => {
//       if (selected && containerRef.current && !containerRef.current.contains(event.target as Node)) {
//         closeMemberActions();
//       }
//     };

//     if (selected) {
//       document.addEventListener('click', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, [selected, closeMemberActions]);
// }

export function renderActionButton(imageSrc: string, label: string, onClick: () => void) {
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

export const MODAL_TITLES = {
  suspend: "You're about to Suspend this User",
  remove: "You're about to Remove this User",
  reinstate: 'You are about to Reinstate this User',
  resendInviteLink: 'You are about to Resend invite link to this User',
};

export const MODAL_MESSAGES = {
  suspend:
    'Are you sure you want to suspend the wedding planner from the collaboration team? This action will restrict their access to the shared dashboard and collaborative features.',
  remove:
    'Are you sure you want to remove the wedding planner from the collaboration team? This action will revoke their access to the shared dashboard and collaborative features.',
  reinstate:
    'You are lifting the suspension, allowing the user to resume their normal activities on the platform. Ensure a smooth return to regular participation and collaboration.',
  resendInviteLink:
    "Give it another shot! Resend the invitation link to ensure they don't miss out on the exciting collaboration. Let's make sure they're part of the action!",
};

export const MODAL_STYLES = {
  // cancel btn styles
  cancelButtonStyles: {
    reinstate: {
      backgroundColor: '#FFFFFF',
      borderColor: '#A0A0A0',
      textColor: '#282828',
    },
    resendInviteLink: {
      backgroundColor: '#FFFFFF',
      borderColor: '#A0A0A0',
      textColor: '#282828',
    },
    remove: {
      backgroundColor: '#FFFFFF',
      borderColor: '#161616',
      textColor: '#161616',
    },
    suspend: {
      backgroundColor: '#FFFFFF',
      borderColor: '#161616',
      textColor: '#161616',
    },
  },
  // action btn styles
  actionButtonStyles: {
    suspend: {
      backgroundColor: '#FF0000',
      textColor: '#ffffff',
    },
    remove: {
      backgroundColor: '#FF0000',
      textColor: '#ffffff',
    },
    reinstate: {
      backgroundColor: '#008D36',
      textColor: '#FFFFFF',
    },
    resendInviteLink: {
      backgroundColor: '#008D36',
      textColor: '#FFFFFF',
    },
  },
};

type Member = {
  name: string;
  email: string;
  role: string;
};
export const useSorting = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortField, setSortField] = useState<keyof Member>('name');

  const handleSort = (field: keyof Member) => {
    setSortField(field);
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return { sortOrder, sortField, handleSort };
};
