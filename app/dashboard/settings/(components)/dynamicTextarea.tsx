import React from 'react';

interface DynamicInputProps {
  placeholder: string;
  labelFor?: string;
  InputId: string;
  label?: string;
  name: string; // Use keyof to ensure that 'name' corresponds to a key in FormData
  value?: string;
  leftIcon?: any;
  pattern?: any;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  hasValue?: boolean;
  disabled?: boolean;
  required?: boolean;
  rightIcon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onInputL: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onInputX: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const DynamicTextarea: React.FC<DynamicInputProps> = ({
  value,
  onChange,
  onInputL,
  onInputX,
  placeholder,
  required,
  hasValue,
  className,
  error,
  errorMessage,
  label,
  labelFor,
  name,
}) => {
  return (
    <div>
      <label htmlFor={labelFor} className="block text-sm md:text-base mb-2 font-[500] text-[#1C1C1C]">
        {label} {required && <span className="text-[#FF0000] font-[500]">*</span>}
      </label>
      <div className="relative">
        <div className="relative">
          <textarea
            value={value}
            onChange={onChange}
            onInput={onInputL}
            name={name}
            // onInput={(e) => autoResizeL(e.target as HTMLTextAreaElement)}
            placeholder={placeholder}
            className={`hidden md:flex rounded-lg border border-input bg-background px-3 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 focus:border-muted transition-colors duration-200 ease-in-out hover:border-primary mb-1 text-sm md:text-base w-full resize-none h-11 md:h-[55px] overflow-hidden ${
              hasValue &&
              'text-black border-green-400 focus:border-primary hover:border-primary  resize-none h-11 md:h-[55px] overflow-hidden'
            }

            ${error && 'border-red-500 focus:border-red-500'}
            
            ${className}`}
          />
          <textarea
            value={value}
            onChange={onChange}
            onInput={onInputX}
            name={name}
            // onInput={(e) => autoResizeL(e.target as HTMLTextAreaElement)}
            placeholder={placeholder}
            className={`flex md:hidden rounded-lg border border-input bg-background px-3 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 focus:border-muted transition-colors duration-200 ease-in-out hover:border-primary mb-1 text-sm md:text-base w-full resize-none h-11 md:h-[55px] overflow-hidden ${
              hasValue &&
              'text-black border-green-400 focus:border-primary hover:border-primary  resize-none h-11 md:h-[55px] overflow-hidden'
            }

            ${error && 'border-red-500 focus:border-red-500'}
            
            ${className}`}
          />
          {error ? <p className="text-xs tracking-wide text-red-500">{errorMessage}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default DynamicTextarea;
