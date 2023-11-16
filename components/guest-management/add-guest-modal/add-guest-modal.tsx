'use client';
import { Close } from '@/components/svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  showCloseBtn?: boolean;
  closeBtnText?: string;
  closeBtnStyle?: string;
  otherBtn?: React.ReactNode;
  children: React.ReactNode;
};

export function AddGuestModal({ showCloseBtn, closeBtnText, closeBtnStyle, otherBtn, children }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.5 19.5H14.5" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 21.5V17.5" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.99 21.8097C10.17 21.8097 8.36004 21.3497 6.98004 20.4297C4.56004 18.8097 4.56004 16.1697 6.98004 14.5597C9.73004 12.7197 14.24 12.7197 16.99 14.5597"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Add Guest
        </Button>
      </DialogTrigger>
      <DialogContent style={{ width: `700px` }} className={`max-w-[90vw] max-h-[90svh] rounded-lg overflow-auto`}>
        <div className="flex border-b py-4 border-[#E1E1E1] -mx-5 px-14">
          <h4 className="font-medium text-[#282828] text-2xl">Add Guest Manually</h4>
          <DialogClose className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path
                d="M9.17004 15.3299L14.83 9.66992"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.83 15.3299L9.17004 9.66992"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DialogClose>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
}
