'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  width: string;
  btnTiggerText: string;
  btnTriggerStyle: string;
  showXIcon: boolean;
  showCloseBtn?: boolean;
  closeBtnText?: string;
  closeBtnStyle?: string;
  otherBtn?: React.ReactNode;
  children: React.ReactNode;
};

export function Modal({
  showXIcon,
  width,
  btnTiggerText,
  btnTriggerStyle,
  showCloseBtn,
  closeBtnText,
  closeBtnStyle,
  otherBtn,
  children,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={btnTriggerStyle}>{btnTiggerText}</button>
      </DialogTrigger>
      <DialogContent style={{ width: `${width}px` }} className={`max-w-[90vw] max-h-[svh] rounded-lg overflow-auto`}>
        {showXIcon && (
          <DialogClose className="w-0 h-0">
            <span className="rounded-[10px] p-1 border absolute top-3 right-3 border-gray-400 hover:border-primary transition-all duration-200 ease-in-out hover:text-primary scale-75">
              <AiOutlineClose />
            </span>
          </DialogClose>
        )}
        {children}
        {showCloseBtn && (
          <div className="flex items-center justify-between gap-3">
            <DialogClose asChild>
              <Button variant="secondary" className={closeBtnStyle}>
                {closeBtnText}
              </Button>
            </DialogClose>
            {otherBtn}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
