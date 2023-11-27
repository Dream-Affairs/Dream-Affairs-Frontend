import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import PreviewCard from './preview-card';

export interface previewProps {
  mealDescription: string;
  mealName: string;
  files?: FileList | null;
  showPreview?: boolean;
  dietryTags?: string[];
  rsvpQnty?: number | 0 | undefined;
  showRSVP?: boolean;
  imgUrl?: string | any;
}

const Preview: React.FC<previewProps> = ({
  mealDescription,
  mealName,
  files,
  showPreview,
  dietryTags,
  rsvpQnty,
  showRSVP,
  imgUrl,
}) => {
  const handleSaveMeal = () => {};
  return (
    <div
      className={`${
        !showPreview
          ? 'hidden lg:w-[45%] w-full lg:flex flex-col lg:px-0 lg:pt-[2px] lg:pl-[53px] items-start justify-start'
          : ' lg:w-[45%] w-full lg:hidden flex flex-col lg:px-0 lg:pt-[2px] lg:pl-[53px] items-start justify-start'
      }`}
    >
      <h3 className="hidden lg:block lg:text-[24px] font-[500] text-[#404141] lg:leading-[33.6px]">Preview</h3>
      <PreviewCard
        mealDescription={mealDescription}
        mealName={mealName}
        // files={files}
        dietryTags={dietryTags}
        showRSVP={false}
        rsvpQnty={rsvpQnty}
        imgUrl={'blob:http://localhost:3000/0fb40867-c0ed-43ff-95b9-77edac93921a'}
      />
      <Button
        variant="disabled"
        onClick={handleSaveMeal}
        className="lg:hidden fixed bottom-[4px] left-0 right-0 z-10 rounded-[8px] lg:mx-[32px] lg:text-[16px] lg:leading-[22.4px] font-[500] text-center bg-[#EAEAEA] text-[#9C9C9C]"
      >
        Save Meal
      </Button>
    </div>
  );
};

export default Preview;
