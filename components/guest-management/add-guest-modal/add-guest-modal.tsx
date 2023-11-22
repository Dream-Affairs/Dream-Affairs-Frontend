'use client';
import { AddIcon, Close, CloseIcon } from '@/components/svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  titleAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  Icon?: React.FC;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  variant?: 'link' | 'secondary' | 'default' | 'destructive' | 'outline' | 'ghost' | 'disabled' | null | undefined;
  className?: string;
  triggerBtnText: string;
  modalTitle: string;
  children: React.ReactNode;
  hideHeader?: boolean;
};

export function AddGuestModal({
  titleAlign,
  Icon,
  size,
  variant,
  className,
  triggerBtnText,
  children,
  modalTitle,
  hideHeader,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} variant={variant} className={className}>
          {Icon && <Icon />}
          {triggerBtnText}
        </Button>
      </DialogTrigger>
      <DialogContent style={{ width: `700px` }} className={`max-w-[90vw] max-h-[90svh] rounded-lg overflow-auto`}>
        {!hideHeader && (
          <div className="flex py-4 px-14 -mx-5">
            <h4 className="font-medium text-[#282828] text-2xl flex-1" style={{ textAlign: titleAlign }}>
              {modalTitle}
            </h4>
            <DialogClose className="ml-auto">
              <CloseIcon />
            </DialogClose>
          </div>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}
