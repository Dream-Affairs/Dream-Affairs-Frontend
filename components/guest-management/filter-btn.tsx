import React, { Dispatch, SetStateAction } from 'react';
interface Props {
  name: string;
  count: number;
  activeBtn: string;
  setFunc: Dispatch<SetStateAction<string>>;
}

function FilterBtn({ name, count, activeBtn, setFunc }: Props) {
  return (
    <button
      onClick={() => setFunc(name)}
      className={`font-medium text-base pb-2 flex items-center gap-1 border-b-4 ${
        activeBtn === name ? 'text-[#7832A6]  border-[#7832A6]' : 'text-[#6F6F6F] border-[#FFF]'
      }`}
    >
      {name}
      <span
        className={`rounded-[1.25rem] text-sm grid place-content-center py-0.5 px-1 ${
          activeBtn === name ? 'bg-[#F1DBFF]' : 'bg-[#EAEAEA]'
        }`}
      >
        {count}
      </span>
    </button>
  );
}

export default FilterBtn;
