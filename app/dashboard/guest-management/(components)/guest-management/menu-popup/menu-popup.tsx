import { AngleRight, Close, Ellipsis, Eyes, EyesClosed, Grab, Search } from '../../svg-icons/svg-icons';
import React, { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

interface Columns {
  id: string;
  name: string;
  isShown: boolean;
}

interface Props {
  columns: Columns[];
  columnSetter: Dispatch<SetStateAction<Columns[]>>;
}

function MenuPopup({ columns, columnSetter }: Props) {
  const [search, setSearch] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!columnRef.current?.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleColumn = (id: string) => {
    columnSetter((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isShown: !item.isShown };
        } else {
          return item;
        }
      });
    });
  };

  const bulkChange = (currentState: boolean) => {
    columnSetter((prevState) => {
      return prevState.map((item) => {
        if (item.isShown === currentState) {
          return { ...item, isShown: !item.isShown };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div ref={columnRef} className="flex justify-end">
      <button ref={menuBtn} className="" onClick={() => setShowPopup(true)}>
        <Ellipsis />
      </button>
      {showPopup && (
        <div className="bg-white w-80 rounded-lg px-4 pt-[22px] pb-8 font-medium fixed right-14 top-10 border border-[#E1E1E1]">
          <header className="text-[#1C1C1C] font-medium flex justify-between items-center">
            Columns
            <button onClick={() => setShowPopup(false)}>
              <Close />
            </button>
          </header>
          <div className="flex rounded p-2 border my-3 border-[#D0D5DD]">
            <Search height="20" width="20" />
            <input
              type="text"
              className="flex-1 pl-4 focus:outline-none"
              placeholder="Search for a column"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className=" text-[13px]">
            <div className="flex justify-between gap-1 font-medium">
              <span className="text-[#9C9C9C]">Shown in table</span>
              <button onClick={() => bulkChange(true)} className=" text-primary">
                Hide All
              </button>
            </div>
            {columns
              .filter((item) => item.isShown && item.name.toLowerCase().includes(search.toLowerCase()))
              .map((item) => {
                return (
                  <div key={item.id} className="flex items-center gap-2 py-1">
                    <Grab />
                    <span>{item.name}</span>
                    <button onClick={() => toggleColumn(item.id)} className="ml-auto mr-1">
                      {item.isShown ? <Eyes /> : <EyesClosed />}
                    </button>
                    <button>
                      <AngleRight />
                    </button>
                  </div>
                );
              })}
            <div className="flex justify-between font-medium mt-2">
              <span className="text-[#9C9C9C]">Hidden in table</span>
              <button onClick={() => bulkChange(false)} className=" text-primary">
                Show All
              </button>
            </div>
            {columns
              .filter((item) => !item.isShown && item.name.toLowerCase().includes(search.toLowerCase()))
              .map((item) => {
                return (
                  <div key={item.id} className="flex items-center gap-2 py-1">
                    <Grab />
                    <span>{item.name}</span>
                    <button onClick={() => toggleColumn(item.id)} className="ml-auto mr-1">
                      {item.isShown ? <Eyes /> : <EyesClosed />}
                    </button>
                    <button>
                      <AngleRight />
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPopup;
