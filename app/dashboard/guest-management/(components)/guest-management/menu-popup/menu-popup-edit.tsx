import { Input } from '@/components/ui/input';
import { Close, Grab } from '../../svg-icons/svg-icons';
import React, { ChangeEvent, Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { CgFormatJustify } from 'react-icons/cg';

interface Columns {
  id: string;
  name: string;
  isShown: boolean;
}

interface Props {
  columns?: Columns[];
  toggleColumn: (id: string) => void;
  id: string;
  columnSetter: Dispatch<SetStateAction<Columns[]>>;
  close: () => void;
  returnToMain: () => void;
  ref: RefObject<HTMLDivElement>;
}

function MenuPopupEdit({ id, columns, toggleColumn, columnSetter, close, returnToMain, ref }: Props) {
  const selectedColumn = columns?.find((item) => item.id === id);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    columnSetter((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, name: value };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div ref={ref} className="flex justify-end">
      <div className="bg-white w-80 rounded-lg px-4 pt-[22px] pb-8 font-medium fixed right-14 top-10 border border-[#E1E1E1]">
        <header className="text-[#1C1C1C] font-medium flex items-center pb-5">
          <button onClick={returnToMain} className="text-xl text-[#292D32] pl-1">
            <GoArrowLeft />
          </button>
          Columns
          <button onClick={close} className="ml-auto">
            <Close />
          </button>
        </header>
        <Input
          id={id}
          type="text"
          placeholder="Enter Column Title"
          errorMessage="Please fill out this field"
          error={false}
          hasValue={false}
          value={selectedColumn?.name}
          onChange={handleChange}
        />
        <ul className="pt-2">
          <li>
            <Button size={'sm'} variant={null} className="px-0" onClick={() => toggleColumn(id)}>
              {selectedColumn?.isShown ? (
                <EyeIcon size={16} color="#292D32" />
              ) : (
                <EyeOffIcon size={16} color="#292D32" />
              )}
              <span className="ml-2">{selectedColumn?.isShown ? 'Hide' : 'Shown'} in view</span>
            </Button>
          </li>
          <li>
            <Button size="sm" variant={null} className="px-0">
              <CgFormatJustify size={16} color="#292D32" />
              <span className="ml-2">Don’t wrap in view</span>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuPopupEdit;
