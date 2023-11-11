import { Input } from '@/components/ui/input';
import React from 'react';

interface DynamicInputProps {
  placeholder: string;
  labelFor?: string;
  InputId: string;
  label?: string;
  name: string; // Use keyof to ensure that 'name' corresponds to a key in FormData
  type: string;
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  placeholder,
  labelFor,
  InputId,
  label,
  name,
  type,
  value,
  onChange,
  error,
  className,
  errorMessage,
  hasValue,
  required,
  disabled,
  rightIcon,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={labelFor} className="block mb-2 font-[500] text-[#1C1C1C]">
        {label} {required && <span className="text-[#FF0000] font-[500]">*</span>}
      </label>
      <div className="relative">
        <Input
          onChange={onChange}
          id={InputId}
          type={type}
          placeholder={placeholder}
          errorMessage={errorMessage}
          error={error}
          hasValue={hasValue}
          value={value}
          className={className}
          name={name}
          disabled={disabled}
        />
        <span className="absolute top-4 right-4">{rightIcon}</span>
      </div>
    </div>
  );
};

export default DynamicInput;
