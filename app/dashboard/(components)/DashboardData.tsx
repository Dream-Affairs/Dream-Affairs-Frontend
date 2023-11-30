import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const CountdownClock = () => {
  return <></>;
};

export const RSVP = ({ data, options }: any) => {
  return (
    <div className="w-[300px] h-[300px]">
      <Doughnut data={data} options={options} className="flex"></Doughnut>
    </div>
  );
};

export const Budget = () => {
  return <></>;
};

export const Checklist = ({ tasks }: { tasks: any[] }) => {
  const handleStatusColor = (status: string) => {
    let statusColor;
    if (status === 'Completed') {
      statusColor = 'bg-[#008D36]/20 text-[#008D36]';
    }
    if (status === 'Todo') {
      statusColor = 'bg-[#A8394C]/20 text-[#A8394C]';
    }
    if (status === 'Overdue') {
      statusColor = 'bg-[#FF963A]/20 text-[#FF963A]';
    }
    return statusColor;
  };

  const handleStatusColorDot = (status: string) => {
    let statusColor;
    if (status === 'Completed') {
      statusColor = 'bg-[#008D36]';
    }
    if (status === 'Todo') {
      statusColor = 'bg-[#A8394C]';
    }
    if (status === 'Overdue') {
      statusColor = 'bg-[#FF963A]';
    }
    return statusColor;
  };
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between items-center py-3 lg:gap-x-10 gap-x-1">
          <p className="text-[#282828] text-sm font-medium flex gap-x-2 items-center">
            <span className="self-start">{task.id}.</span>
            <span>{task.taskName}</span>
          </p>

          <p
            className={`${handleStatusColor(
              task.taskStatus,
            )} text-xs leading-4 px-3 py-1.5 rounded-[20px] flex items-center justify-center gap-x-2`}
          >
            <span className={`w-[7px] h-[7px] rounded-full ${handleStatusColorDot(task.taskStatus)}`}></span>
            <span>{task.taskStatus}</span>
          </p>
        </div>
      ))}
    </>
  );
};

export const Gifts = ({ gifts }: { gifts: any[] }) => {
  return (
    <>
      {gifts.map((gift) => (
        <div
          key={gift.id}
          className="flex justify-between items-center py-4 border-b border-[#F1F1F1] font-semibold gap-x-10"
        >
          <div className="flex items-center gap-x-5">
            <Image src={gift.giftPic} alt={`${gift.giftName}`} />
            <p className="text-[#282828] text-base">{gift.giftName}</p>
          </div>
          <p className="text-[#B93F54] text-sm ">${gift.giftPrice}</p>
        </div>
      ))}
    </>
  );
};
