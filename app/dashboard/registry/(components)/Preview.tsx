import React from 'react';
import Image from 'next/image';
import Export from 'app/dashboard/(assets)/export.svg';
import Copy from 'app/dashboard/(assets)/copy.svg';

const Preview = () => {
  return (
    <div className="flex justify-between gap-4 lg:gap-10 font-medium">
      <div className="flex gap-2 lg:gap-3 items-center">
        <Image src={Export} alt="preview registry" className="lg:w-5 w-[18px]" />
        <p> Preview Registry</p>
      </div>

      <div className="flex gap-2 lg:gap-3 items-center">
        <Image src={Copy} alt="preview registry" width={18} className="lg:w-5 w-[18px]" />
        <p> Copy Registry URL</p>
      </div>
    </div>
  );
};

export default Preview;
