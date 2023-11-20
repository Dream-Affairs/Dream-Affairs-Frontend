'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AssignIcon, DeleteIcon, DoneIcon } from './Icons';
import { format } from 'date-fns';
import { Calendar as CalenderIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import AssignPopover from './AssignPopover';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Modal } from '@/components/ui/ModalTwo';

type task = {
  decription: string;
  date: Date | undefined;
  assignee: string;
  done: boolean;
  id: string;
};

interface MyTasksProps {
  deleteTask: (id: string) => void;
  editItem: (id: string, item: task) => void;
  item: task;
  index: number;
}

export const Task = ({ deleteTask, item, index, editItem }: MyTasksProps) => {
  const [isAssigning, setIsAssigning] = useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [assignedMember, setAssignedMember] = useState('');
  const [done, setDone] = useState(false);
  const [editedTask, setEditedTask] = React.useState<task>(item);

  const error = false;

  useEffect(() => {
    setDate(item.date);
    setAssignedMember(item.assignee);
    setDescription(item.decription);
    setDone(item.done);
  }, [item]);

  useEffect(() => {
    setEditedTask({ decription: description, date: date, assignee: assignedMember, done: done, id: item.id });
  }, [date, assignedMember, description, done, item]);

  const handleAssignBlur = useCallback(() => {
    setTimeout(() => {
      setIsAssigning(false);
    }, 300);
  }, []);

  //// ASSIGN MEMBERS
  const updateAssignMember = (item: string) => {
    setAssignedMember(item);
  };

  ////  EDIT FUNCTION()
  const handleEditAssignee = useCallback(() => {
    editItem(item.id, editedTask);
  }, [item, editedTask, editItem]);

  //// TASK DATE STUTUS()
  const isTodayOrYesterday = (selectedDate: Date): string => {
    const currentDate = new Date(); // Current date and time

    // Set the time part of the current date to midnight
    const todayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    // Set the time part of yesterday to midnight
    const yesterdayStart = new Date(currentDate);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);
    yesterdayStart.setHours(0, 0, 0, 0);

    // Compare selected date with today and yesterday
    if (
      selectedDate >= todayStart &&
      selectedDate < new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)
    ) {
      return 'Today';
    } else if (selectedDate >= yesterdayStart && selectedDate < todayStart) {
      return 'Yesterday';
    } else if (selectedDate < todayStart) {
      return format(selectedDate, 'MMM dd' + '.');
    } else {
      return format(selectedDate, 'MMM dd');
    }
  };

  return (
    <div
      onBlur={() => {
        setTimeout(() => {
          handleAssignBlur();
        }, 1000);
      }}
      className="w-full sm:pr-9 pb-2 border-b border-neutral-100 flex-col justify-center items-start gap-2 inline-flex"
    >
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        {/* Check */}
        <div
          onClick={() => {
            setDone((prev) => !prev);
            editItem(item.id, {
              decription: description,
              date: date,
              assignee: assignedMember,
              done: !done,
              id: item.id,
            });
          }}
          className={`min-w-[16px] h-[16px] mt-1 border-[2px] ${
            done ? 'border-transparent' : 'border-[#9F7DB5]'
          } rounded-[50%] hover:bg-primary-foreground cursor-pointer flex items-center justify-evenly`}
        >
          {done && <DoneIcon />}
        </div>
        <div className="w-full items-start flex gap-1 sm:gap-0 justify-between md:grid md:grid-cols-4 ">
          {/* Description */}

          <div className="col-span-2  flex-col justify-start items-start gap-3 inline-flex mr-5 w-full">
            <input
              type="text"
              placeholder="Task description"
              value={description}
              onChange={(e) => {
                if (e.target.value.length === 60) return;
                setDescription(e.target.value);
              }}
              onBlur={() =>
                description.length === 0 ? setDescription(item.decription) : editItem(item.id, editedTask)
              }
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  return description.length === 0 ? setDescription(item.decription) : editItem(item.id, editedTask);
                }
              }}
              className={`${
                done && 'line-through'
              }  outline-none leading-snug w-full bg-transparent text-sm sm:text-base ${
                date && isTodayOrYesterday(date) === 'Today' && 'text-[#762995]'
              } ${date && isTodayOrYesterday(date) === 'Yesterday' && 'text-[#F00]'} ${
                date && isTodayOrYesterday(date).includes('.') && 'text-[#F00]'
              }`}
            />
            <aside className="flex items-center gap-2">
              {/* Date */}
              <Popover>
                <PopoverTrigger
                  className={cn(
                    ` text-sm  file:text-sm file:font-medium placeholder:text-gray-400 md:w-[115px]  disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out border-0 hover:!bg-none cursor-pointer
           `,
                  )}
                  asChild
                >
                  <p
                    className={cn(
                      'flex items-center justify-start  text-left  text-xs leading-none ',
                      !date && 'text-neutral-400',
                      done && 'line-through',
                      date && isTodayOrYesterday(date) === 'Today' && 'text-[#762995]',
                      date && isTodayOrYesterday(date) === 'Yesterday' && 'text-[#F00]',
                      date && isTodayOrYesterday(date).includes('.') && 'text-[#F00]',
                    )}
                  >
                    {date ? isTodayOrYesterday(date) : <CalenderIcon className="mr-2 h-4 w-4" />}
                  </p>
                  {/* )} */}
                </PopoverTrigger>
                <PopoverContent
                  onBlur={() => {
                    if (done) return;
                    editItem(item.id, {
                      decription: description,
                      date: date,
                      assignee: assignedMember,
                      done: done,
                      id: item.id,
                    });
                  }}
                  className="w-auto translate-x-1/4 p-0"
                >
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              {/* Assign Mobile */}
              <aside onClick={() => setIsAssigning(true)} className="md:hidden justify-self-center col-span-1 relative">
                <Assignee
                  assignedMember={assignedMember}
                  done={done}
                  isAssigning={isAssigning}
                  handleAssignBlur={handleAssignBlur}
                  updateAssignMember={updateAssignMember}
                  handleEditAssignee={handleEditAssignee}
                />
              </aside>
            </aside>
          </div>

          {/* ASSIGNEE */}
          <aside
            onClick={() => setIsAssigning(true)}
            className="hidden w-fit justify-self-start col-span-1 md:block relative"
          >
            <Assignee
              assignedMember={assignedMember}
              done={done}
              isAssigning={isAssigning}
              handleAssignBlur={handleAssignBlur}
              updateAssignMember={updateAssignMember}
              handleEditAssignee={handleEditAssignee}
            />
          </aside>
          {/* DELETE SIDE */}
          <aside className="justify-self-end cursor-pointer">
            <Modal
              width=""
              showXIcon={false}
              btnTiggerText={<DeleteIcon />}
              btnTriggerStyle=""
              showCloseBtn={false}
              closeBtnText=""
              closeBtnStyle=""
            >
              <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex ">
                <div className="flex flex-col justify-start items-start gap-4 border-b border-gray-200 pb-8">
                  <h3 className="w-80 text-neutral-900 text-base font-medium  leading-snug">Delete task</h3>
                  <p className="self-stretch text-neutral-900 text-sm font-normal  leading-tight">
                    {`Are you sure you want to delete "${description}" from your tasks`}
                  </p>
                </div>
                <aside className="w-full md:w-fit flex items-center gap-3 self-end">
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full md:w-24 mt-5">
                      Close
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button onClick={() => deleteTask(item.id)} variant="destructive" className="w-full md:w-24 mt-5">
                      Delete
                    </Button>
                  </DialogClose>
                </aside>
              </div>
            </Modal>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Task;

interface AssigneeProps {
  assignedMember: string;
  done: boolean;
  isAssigning: boolean;
  handleAssignBlur: () => void;
  handleEditAssignee: () => void;
  updateAssignMember: (item: string) => void;
}

const Assignee = ({
  assignedMember,
  done,
  isAssigning,
  handleAssignBlur,
  updateAssignMember,
  handleEditAssignee,
}: AssigneeProps) => {
  return (
    <>
      <p className="bg-gray-300 md:bg-transparent rounded-2xl py-1 md:py-0 px-2 md:px-0 -z-50 md:text-center md:w-14 text-sm sm:text-base">
        {assignedMember !== 'Assign Task' ? (
          <span className={`${done && 'line-through'} text-slate-600 leading-snug cursor-pointer`}>
            {assignedMember}
          </span>
        ) : (
          <AssignIcon stroke="#898C8F" />
        )}
      </p>
      {isAssigning && (
        <AssignPopover
          handleBlur={handleAssignBlur}
          updateAssignMember={updateAssignMember}
          editAssignee={handleEditAssignee}
        />
      )}
    </>
  );
};
