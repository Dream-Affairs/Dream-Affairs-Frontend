import React from 'react';

const Count = () => {
  return (
    <div className="flex lg:flex-col gap-4 md:gap-8 flex-none justify-center lg:justify-start">
      <div className="w-40 h-36 lg:w-[219px] lg:h-[218px] rounded-lg flex flex-col items-center border border-border justify-center">
        <div className="w-38 flex flex-col gap-2 text-center">
          <h2 className="font-medium text-sm md:text-[40px]">0</h2>
          <p className="text-sm md:text-base font-normal">Gifts Availaible</p>
        </div>
      </div>
      <div className="w-40 h-36 lg:w-[219px] lg:h-[218px] rounded-lg flex flex-col items-center gap-2 border border-border justify-center">
        <div className="w-38 flex flex-col gap-2 text-center">
          <h2 className="font-medium text-sm md:text-[40px]">0</h2>
          <p className="text-sm md:text-base font-normal">Reserved and Purchased</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
