import { ExportIcon } from '../../svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import React from 'react';
import { Noto_Serif } from 'next/font/google';
import { cn } from '@/lib/utils';

const notoSerif = Noto_Serif({ subsets: ['latin'] });

function DisabledButton() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button variant="disabled" className="gap-2.5" size={'lg'}>
            <ExportIcon />
            Export
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p
            className={cn(
              notoSerif.className,
              'max-w-[296px] text-center bg-white p-2 shadow-xl rounded-lg relative',
              "after:content-[''] after:block after:w-0 after:h-0 after:border-l-[8px] after:border-l-transparent after:border-r-[8px] after:border-r-transparent after:border-b-[16px] after:border-b-white after:absolute after:left-1/2 after:-translate-x-1/2 after:-top-4",
            )}
          >
            Upgrade to Premium Package to access this feature.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default DisabledButton;
