import React from 'react';
import Image from 'next/image';
import Note from 'app/dashboard/(assets)/note.svg';

const TrackerCard = () => {
  return (
    <section>
      <div className="border rounded-md h-[272px] px-3 py-5">
        <div className="flex justify-between">
          <div className="text-sm font-medium h-[102px] flex flex-col justify-between">
            <p>Gift giver</p>
            <p className="text-primary font-normal">Benny Williams</p>
            <p>1 Gift on November 05, 2023</p>
            <p className="text-[#5A5A5A] font-normal text-[10px]">@bennywilliams@yahoo.com</p>
          </div>
          <div className="w-28 flex flex-col items-center text-center">
            <p className="text-xs font-medium">Write Thank You Note</p>
            <Image src={Note} alt="" className="w-9 md:w-12" />
          </div>
        </div>
        <div className="h-[1px] bg-border"></div>
        <div>
          <div className="w-20 h-20 rounded-md border"></div>
          <div>
            <div>
              <div>
                <p>Smart TV</p>
                <p>
                  Quantity : <span>1</span>
                </p>
              </div>

              <div>
                <p>Purchased</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackerCard;
