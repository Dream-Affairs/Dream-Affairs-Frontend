import React from 'react';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';

type Props = {
  title: string;
  description: string;
  check_id: string;
};

export default function FaqItem({ title, description, check_id }: Props) {
  return (
    <div className="faq_container py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold w-[85%]">{title}</h2>
        <label id={`label0_${check_id}`} htmlFor={`${check_id}`}>
          {' '}
          <SlArrowRight />
        </label>
        <label id={`label1_${check_id}`} className="hidden" htmlFor={`${check_id}`}>
          {' '}
          <SlArrowDown />
        </label>
        
      </div>
      <input type="checkbox" name="" hidden id={check_id} className="peer checks" />
      <div className="w-[85%] mt-2 text-md hidden peer-checked:block">
        <p>
         {description}
        </p>
      </div>
    </div>
  );
}
