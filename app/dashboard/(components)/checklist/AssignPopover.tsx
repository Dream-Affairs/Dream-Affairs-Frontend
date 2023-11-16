import React, { useState, useEffect } from 'react';

const Members: string[] = ['You', 'John', 'Nonye'];

interface AssignProps {
  handleBlur: () => void;
  editAssignee: () => void;
  updateAssignMember: (item: string) => void;
}

const AssignPopover = ({ handleBlur, updateAssignMember, editAssignee }: AssignProps) => {
  const [members, setMembers] = useState(Members);
  const [searchMember, setSearchMember] = useState('');
  const [assignedMember, setAssignedMember] = useState('');
  const [updateComplete, setUpdateComplete] = useState(false);

  useEffect(() => {
    if (searchMember.length > 0) {
      const searchedMember = Members.filter((item) => item.toLowerCase().includes(searchMember.toLowerCase()));

      setMembers(searchedMember);
      if (searchedMember.length === 0) setMembers(['----']);
    }
    if (searchMember.length === 0) setMembers(Members);
  }, [searchMember]);

  useEffect(() => {
    if (updateComplete) {
      editAssignee();
      setUpdateComplete(false);
      handleBlur();
    }
  }, [updateComplete, editAssignee, handleBlur]);

  return (
    <div
      // onBlur={() => handleBlur()}
      className="absolute -translate-x-1/2 top-5 w-44 bg-white rounded-lg shadow border border-zinc-100 flex-col justify-start items-center gap-2 flex z-50"
    >
      <input
        type="text"
        placeholder="Assign to..."
        autoFocus
        value={searchMember}
        onChange={(e) => {
          setSearchMember(e.target.value);
        }}
        className="text-neutral-400 leading-tight p-3 border-b border-gray-200 w-full outline-none"
      />
      {members.map((item, i) => (
        <p
          onClick={async () => {
            if (item === '----') return;
            await updateAssignMember(item);
            setAssignedMember(item);
            setTimeout(() => {
              setUpdateComplete(true);
            }, 1000);
          }}
          key={i + 1}
          className="text-neutral-800 hover:bg-blue-50 text-sm font-normal leading-tight cursor-pointer p-3 w-full"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default AssignPopover;
