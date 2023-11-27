import Image from 'next/image';
import React from 'react';
import { previewProps } from './preview';

const previewCard: React.FC<previewProps> = ({
  files,
  mealName,
  mealDescription,
  dietryTags,
  rsvpQnty,
  showRSVP,
  imgUrl,
}) => {
  console.log(imgUrl);
  return (
    <div className="w-full border rounded-[8px] lg:mt-[26px] lg:w-[388px] lg:min-h-[392px] p-[16px]">
      <div>
        {!imgUrl ? (
          <div className="w-full h-[242px] border  bg-gradient-to-r from-[#cdcdcdbe] to-[#cdcdcd00] rounded-[8px] animate-puls"></div>
        ) : (
          <Image
            src={imgUrl}
            width={350}
            height={400}
            alt={`preview-${mealName}`}
            // objectFit="fill"
            className="rounded-[8px] max-w-full max-h-[242px] object-cover object-center"
          />
        )}
      </div>
      <div className="flex flex-col gap-y-[12px] w-full lg:mt-[16px]">
        <div className="font-[600] lg:text-[24px] lg:leading-[33.6px] text-[#282828] ">
          {mealName || <p>Meal Name</p>}
        </div>
        <div className="text-[#6F6F6F] w-full break-words lg:text-[16px] font-[400] lg:leading-[22.4px]">
          {mealDescription || <p>Meal Description</p>}
        </div>
        <h3 className="text-[#282828] lg:text-[16px] font-[400] lg:leading-[22.4px]">
          {dietryTags && `${dietryTags || 'Dietary tags'}`}
          {showRSVP && `Quantity RSVP’ed: ${rsvpQnty || 0}`}
        </h3>
      </div>
    </div>
  );
};

export default previewCard;
