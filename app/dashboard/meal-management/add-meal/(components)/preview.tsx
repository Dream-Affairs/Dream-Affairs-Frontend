import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';


interface previewProps {
  mealDescription: string;
  mealName: string;
  files: FileList | null;
  showPreview: boolean
}

const Preview: React.FC<previewProps> = ({ mealDescription, mealName, files, showPreview}) => {
  const handleSaveMeal=()=>{

  }
  return (
    <div className={`${!showPreview ? 'hidden lg:w-[45%] w-full lg:flex flex-col lg:px-0 lg:pt-[2px] lg:pl-[53px] items-start justify-start' : " lg:w-[45%] w-full lg:hidden flex flex-col lg:px-0 lg:pt-[2px] lg:pl-[53px] items-start justify-start"}`}>
      <h3 className="hidden lg:block lg:text-[24px] font-[500] text-[#404141] lg:leading-[33.6px]">Preview</h3>
      <div className="w-full border rounded-[8px] lg:mt-[26px] lg:w-[388px] lg:min-h-[392px] p-[16px]">
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
          <div className="font-[600] lg:text-[24px] lg:leading-[33.6px] text-[#282828] ">
            {mealName || <p>Meal Name</p>}
          </div>
          <div className="text-[#6F6F6F] w-full break-words lg:text-[16px] font-[400] lg:leading-[22.4px]">{mealDescription || <p>Meal Description</p>}</div>
          <h3 className="text-[#282828] lg:text-[16px] font-[400] lg:leading-[22.4px]">Dietary tags</h3>
        </div>
      </div>
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
