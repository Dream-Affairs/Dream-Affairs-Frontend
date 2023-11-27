import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

function TrackerSummaryCard({ title, children }: Props) {
  return (
    <li className="p-4 rounded-[8px] border border-[#F0C5C5] flex flex-col">
      <h4 className="text-2xl font-medium mb-6">{title}</h4>
      {children}
    </li>
  );
}

export default TrackerSummaryCard;
