import React, { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { Button } from '@/components/ui/button';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const MyModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  const [menu, setMenu] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const showMenu = () => {
    setMenu(!menu);
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    setFiles((event as any).dataTransfer.files);
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="rounded-lg shadow-2xl flex flex-col p-4 mx-auto my-8 justify-start align-top w-5/6 bg-white">
        <div className="flex justify-end items-center">
          <Button variant="ghost" onClick={toggleModal}>
            <FaRegTimesCircle className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-start justify-betweeen">
          <div className="flex flex-col px-10 border-r-2 h-full w-3/6">
            <div className=" flex justify-between items-center">
              <h2 className="text-lg font-bold">Add Meal</h2>
              <div>
                <Button variant="ghost" onClick={showMenu} className="text-secondary">
                  ...
                </Button>
                {menu && (
                  <div className="flex flex-col gap-2 border rounded-lg p-2 bg-white pr-8">
                    <h3>Hide Meal</h3>
                    <h3>Delete Meal</h3>
                  </div>
                )}
              </div>
            </div>
            <div className="border rounded-lg bg-secondary flex items-center justify-center p-3">
              <div
                className="flex flex-col items-center justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  onChange={handleFileInputChange}
                  hidden
                  accept="image/png, image/jpeg"
                  ref={inputRef}
                />
                <FaImage className="text-primary" />
                <div className="flex gap-2 items-center">
                  <button onClick={() => inputRef.current?.click()} className="text-primary">
                    Click here
                  </button>{' '}
                  <p className="text-accent text-sm"> or drag and drop to upload file</p>
                </div>

                <h3 className="text-accent text-sm">PDF, SVG, PNG, JPG, OR GIF (max 800X400px)</h3>
              </div>
            </div>
            <div>
              <p className="my-2 font-semibold text-sm">Meal Categories</p>
              <Select>
                <SelectTrigger className="p-2">
                  <SelectValue placeholder="e.g Appetizers, Main Dishes etc" style={{ color: 'accent' }} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="appetizer">Appetizer</SelectItem>
                    <SelectItem value="main">Add category</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="my-2 font-semibold text-sm">Meal Name</p>
              <Input placeholder="E.g: Roasted Chicken with Herbs" style={{ color: 'accent' }} />
            </div>
            <div>
              <p className="my-2 font-semibold text-sm">Meal Description</p>
              <Input placeholder="Add meal description here" style={{ color: 'accent' }} />
            </div>
            <div>
              <p className="my-2 font-semibold text-sm">Dietary Tags</p>
              <Select>
                <SelectTrigger className="p-2">
                  <SelectValue placeholder="e.g Vegan, Vegetarian etc (Optional)" style={{ color: 'accent' }} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Vegan</SelectItem>
                    <SelectItem value="banana">Vegetarian</SelectItem>
                    <SelectItem value="banana">Add Tags</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="my-2 font-semibold text-sm">Quantity</p>
              <Input placeholder="No. of quantity" style={{ color: 'accent' }} />
            </div>
          </div>
          <div className="flex flex-col pl-5  items-start justify-start w-3/6">
            <h3 className="text-lg font-bold pb-3">Preview</h3>
            <div className="border p-4">
              <div className="w-80 h-56 border rounded-lg bg-accent">
                {files &&
                  Array.from(files).map((file, idx) => (
                    <Image
                      key={idx}
                      src={URL.createObjectURL(file)}
                      width={100}
                      height={100}
                      alt={`preview-${idx}`}
                      objectFit="fill"
                    />
                  ))}
              </div>
              <h3 className="font-bold pb-2">Meal Name</h3>
              <h4 className="pb-2">Meal Description</h4>
              <h3>Dietary tags</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
