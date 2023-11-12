'use client';
import Image from 'next/image';
import Camera from 'app/dashboard/(assets)/camera.svg';
import Dummy from 'app/dashboard/(assets)/dummy.svg';
import Edit from 'app/dashboard/(assets)/edit.svg';
import Board from './Board';
import React from 'react';

const Manage = () => {
  return (
    <div>
      {/* header starts here  */}
      <div className="flex bg-primary h-[216px] w-aut0 pl-12 pt-11 gap-7 mb-12">
        {/* Profile picture starts here  */}
        {/* <div>
          <div className="w-[150px] h-[150px] rounded-full bg-slate-500 relative top-16">
            <Image src={Dummy} alt="" className="rounded-full" />
            <button className="bg-white rounded-full w-9 h-9 absolute top-[60%] left-[80%]">
              <Image src={Camera} alt="camera icon" className="m-auto" />
            </button>
          </div>
        </div> */}

        <div className="text-background flex flex-col gap-6  w-[787px]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <h2 className="font-medium text-3xl w-[437px]">Donald and Kate’s Wedding</h2>
              {/* <button>
                <Image src={Edit} alt="camera icon" className="m-auto" />
              </button> */}
            </div>
            <div>
              <p className="text-base font-medium ">28th December, 2023</p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="font-normal text-sm">
              Your presence is our cherished gift. If you&apos;d like to add something extra, explore our wishlist with
              love and thanks
            </p>
            {/* <button>
              <Image src={Edit} alt="camera icon" className="m-auto" />
            </button> */}
          </div>
        </div>
      </div>
      {/* Header ends here  */}

      {/* Body Starts here */}

      <div className="">
        <Board />
      </div>
    </div>
  );
};

export default Manage;
