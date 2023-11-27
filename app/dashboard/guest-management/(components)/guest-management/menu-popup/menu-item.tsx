import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React from 'react';
import { LiaAngleRightSolid } from 'react-icons/lia';
import { Grab } from '../../svg-icons/svg-icons';

interface Props {
  isShown: boolean;
  name: string;
  id: string;
  toggleColumn: (id: string) => void;
  showEdit: (id: string) => void;
}

function MenuItem({ isShown, name, id, toggleColumn, showEdit }: Props) {
  return (
    <div className="flex items-center gap-2 py-1">
      <Grab />
      <span>{name}</span>
      <button onClick={() => toggleColumn(id)} className="ml-auto mr-1">
        {isShown ? <EyeIcon size={16} color="#292D32" /> : <EyeOffIcon size={16} color="#292D32" />}
      </button>
      <button onClick={() => showEdit(id)} className="text-[#292D32] text-base">
        <LiaAngleRightSolid />
      </button>
    </div>
  );
}

export default MenuItem;
