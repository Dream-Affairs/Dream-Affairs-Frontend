import { AlignLeft, EyeIcon, EyeOffIcon, MoreVerticalIcon, SearchIcon } from 'lucide-react';
import { Close, Grab } from '../../svg-icons/svg-icons';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { LiaAngleRightSolid } from 'react-icons/lia';
import MenuPopupEdit from './menu-popup-edit';
import MenuItem from './menu-item';

interface Columns {
  id: string;
  name: string;
  isShown: boolean;
}

interface Props {
  columns: Columns[];
  columnSetter: Dispatch<SetStateAction<Columns[]>>;
}

interface EditProps {
  isShown: boolean;
  itemToEdit: string;
}

function MenuPopup({ columns, columnSetter }: Props) {
  const [search, setSearch] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [editPopup, setEditPopup] = useState<EditProps>({ isShown: false, itemToEdit: '' });
  const menuBtn = useRef<HTMLButtonElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!columnRef.current?.contains(e.target) && !editRef.current?.contains(e.target)) {
        // setShowPopup(false);
        // closeEditPopup();
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

  function showEdit(id: string) {
    setEditPopup({ isShown: true, itemToEdit: id });
    setShowPopup(false);
  }

  function closeEditPopup() {
    setEditPopup({ isShown: false, itemToEdit: '' });
  }

  function returnToMainPopup() {
    setShowPopup(true);
    closeEditPopup();
  }

  return (
    <div ref={columnRef} className="flex justify-end">
      <button ref={menuBtn} className="" onClick={() => setShowPopup(true)}>
        <MoreVerticalIcon size={20} color="#A0A0A0" />
      </button>
      {editPopup.isShown && (
        <MenuPopupEdit
          ref={editRef}
          id={editPopup.itemToEdit}
          columns={columns}
          columnSetter={columnSetter}
          toggleColumn={toggleColumn}
          close={closeEditPopup}
          returnToMain={returnToMainPopup}
        />
      )}
      {showPopup && (
        <div className="bg-white w-80 rounded-lg px-4 pt-[22px] pb-8 font-medium fixed right-14 top-10 border border-[#E1E1E1]">
          <header className="text-[#1C1C1C] font-medium flex justify-between items-center">
            Columns
            <button onClick={() => setShowPopup(false)}>
              <Close />
            </button>
          </header>
          <div className="flex rounded p-2 border my-3 border-[#D0D5DD]">
            <SearchIcon size={20} color="#667185" />
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
                  <MenuItem
                    key={item.id}
                    isShown={item.isShown}
                    name={item.name}
                    id={item.id}
                    toggleColumn={toggleColumn}
                    showEdit={showEdit}
                  />
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
                  <MenuItem
                    key={item.id}
                    isShown={item.isShown}
                    name={item.name}
                    id={item.id}
                    toggleColumn={toggleColumn}
                    showEdit={showEdit}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPopup;
