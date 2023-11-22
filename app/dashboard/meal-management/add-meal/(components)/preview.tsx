import Image from 'next/image';
import React from 'react';

interface previewProps {
  mealDescription: string;
  mealName: string;
  files: FileList | null;
}

const Preview: React.FC<previewProps> = ({ mealDescription, mealName, files }) => {
  return (
    <div className="w-[45%] flex flex-col pt-[2px] pl-[53px] items-start justify-start ">
      <h3 className="lg:text-[24px] font-[500] text-[#404141] lg:leading-[33.6px]">Preview</h3>
      <div className="border w-full rounded-[8px] lg:mt-[26px] lg:w-[388px] lg:min-h-[392px] lg:p-[16px]">
        <div>
          {!files ? (
            <div className="w-full h-[242px] border  bg-gradient-to-r from-[#cdcdcdbe] to-[#cdcdcd00] rounded-[8px] animate-puls"></div>
          ) : (
            Array.from(files).map((file, index) => (
              <Image
                key={index}
                src={URL.createObjectURL(file)}
                width={350}
                height={400}
                alt={`preview-${index}`}
                objectFit="fill"
                className="rounded-[8px] max-w-full max-h-[242px] object-cover object-center"
              />
            ))
          )}
        </div>
        <div className="flex flex-col gap-y-[12px] w-full lg:mt-[16px]">
          <h3 className="font-[600] lg:text-[24px] lg:leading-[33.6px] text-[#282828] ">
            {mealName || <h3>Meal Name</h3>}
          </h3>
          <p className="text-[#6F6F6F] w-full break-words lg:text-[16px] font-[400] lg:leading-[22.4px]">{mealDescription || <h3>Meal Description</h3>}</p>
          <h3 className="text-[#282828] lg:text-[16px] font-[400] lg:leading-[22.4px]">Dietary tags</h3>
        </div>
      </div>
    </div>
  );
};

export default Preview;
