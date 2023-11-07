import * as React from 'react';
import { PiWarningLight } from 'react-icons/pi';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasValue?: boolean;
  error?: boolean;
  errorMessage?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasValue, error, errorMessage, icon, ...props }, ref) => {
    return (
      <div className="relative h-[55px]">
        <input
          type={type}
          className={cn(
            `flex h-full w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0  focus:border-muted transition-colors duration-200 ease-in-out hover:text-primary hover:border-primary hover:placeholder-primary
             
            
            ${hasValue && 'text-black border-green-400 focus:border-primary hover:border-primary'}

            ${error && 'border-red-500 bg-red-50 text-red-500 placeholder:text-red-500 focus:border-red-500'}
            `,
            className,
          )}
          ref={ref}
          {...props}
        />
        {error || icon ? (
          <div className="absolute h-full top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            {icon}
            {error ? <PiWarningLight className="text-red-500" /> : null}
          </div>
        ) : null}

        {error ? <p className="text-xs tracking-wide text-red-500">{errorMessage}</p> : null}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
