import React, { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import { AddGuestModal } from '../add-guest-modal/add-guest-modal';
import { Store } from '../../svg-icons/svg-icons';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, Hash } from 'lucide-react';

interface Props {
  tags: string[];
  tagSetter: Dispatch<SetStateAction<string[]>>;
}

interface ShowEdit {
  showEdit: boolean;
  editItem: string;
}

interface Edit {
  showEdit: ShowEdit;
  showEditSetter: Dispatch<SetStateAction<ShowEdit>>;
  tagSetter: Dispatch<SetStateAction<string[]>>;
}

function ManageTagsModal({ tags, tagSetter }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showEdit, setShowEdit] = useState<ShowEdit>({ showEdit: false, editItem: '' });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    tagSetter((prevState) => {
      return [...prevState, inputRef.current!.value];
    });
    inputRef.current!.value = '';
  };

  return (
    <AddGuestModal
      size="sm"
      modalTitle="Manage Tags"
      Icon={Store}
      triggerBtnText="Manage Tags"
      className="guest-btn"
      hideHeader={showEdit.showEdit}
    >
      {!showEdit.showEdit ? (
        <div className="min-h-[162px] guest-modal-border px-14 py-6">
          <form className="flex items-end gap-10" onSubmit={handleSubmit}>
            <div className="flex flex-col flex-1 gap-2">
              <Label htmlFor="tags">Create New Tag</Label>
              <Input
                id="tags"
                type="text"
                placeholder="Enter tag name"
                errorMessage="Please enter a tag"
                error={false}
                hasValue={true}
                ref={inputRef}
              />
            </div>
            <Button variant="secondary" className="px-8">
              <Hash />
              Add Tag
            </Button>
          </form>
          <div className="flex gap-5 pt-10 flex-wrap">
            {tags.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => setShowEdit({ showEdit: true, editItem: item })}
                  className="tags flex items-center w-fit cursor-pointer"
                >
                  {item} ({Math.floor(Math.random() * (6 + 1))})
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <EditTag showEdit={showEdit} showEditSetter={setShowEdit} tagSetter={tagSetter} />
      )}
    </AddGuestModal>
  );
}

function EditTag({ showEdit, showEditSetter, tagSetter }: Edit) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    tagSetter((prevState) => {
      return prevState.map((item) => {
        if (showEdit.editItem == item) {
          return inputRef.current!.value;
        } else {
          return item;
        }
      });
    });
    inputRef.current!.value = '';
    closeEdit();
  };

  const deleteTag = () => {
    tagSetter((prevState) => {
      return prevState.filter((item) => item !== showEdit.editItem);
    });
    closeEdit();
  };

  const closeEdit = () => {
    showEditSetter({ showEdit: false, editItem: '' });
  };

  return (
    <div>
      <h4 className="px-9 pb-3.5 font-medium text-[#282828] text-2xl flex items-center gap-2">
        <button onClick={closeEdit}>
          <ArrowLeftIcon size={28} color="#282828" />
        </button>
        Edit Tag
      </h4>
      <div className="guest-modal-border px-14 py-6">
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col flex-1 gap-2">
            <Label htmlFor="edit-tags">Create New Tag</Label>
            <Input
              id="edit-tags"
              type="text"
              placeholder="Enter tag name"
              errorMessage="Please enter a tag"
              error={false}
              hasValue={true}
              ref={inputRef}
              defaultValue={showEdit.editItem}
              className="text-[#6F6F6F]"
            />
          </div>
          <div className="flex items-center gap-10">
            <Button onClick={deleteTag} variant="outline" type="button" className="px-4 w-44">
              Delete
            </Button>
            <Button variant="secondary" className="px-4 w-44">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageTagsModal;
