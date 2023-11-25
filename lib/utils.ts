import { type ClassValue, clsx } from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const guestSelection = (id: string, setState: Dispatch<SetStateAction<string[]>>) => {
  setState((prevState) => {
    if (prevState.includes(id)) {
      return prevState.filter((item) => item != id);
    } else {
      return [...prevState, id];
    }
  });
};

export const selectAllGuest = (
  selectedGuest: string[],
  guests_list: any[],
  setState: Dispatch<SetStateAction<string[]>>,
) => {
  if (selectedGuest.length === guests_list.length) {
    setState([]);
  } else {
    setState(guests_list.map((item) => item.id));
  }
};

export enum InviteTab {
  EMAIL_SAMPLE = 'Email Sample',
  EDIT_EMAIL = 'Edit Email',
  CONFIRM_SEND = 'Confirm & Send',
}
