import Image from 'next/image';
import React from 'react';

const Cards = ({ data }: any) => {
  return (
    <div className="grid grid-cols-3 gap-10 my-14 mb-10">
      {data.map((card: any) => (
        <div key={card.id} className="flex gap-2 flex-col border rounded-lg max-w-[350px] p-1">
          <Image src={card.card} width={0} alt="Curly" className="object-cover aspect-video rounded-lg" />
          <div className="flex flex-col gap-3 py-5 px-2">
            <h1 className="text-2xl text-primary leading-8 font-semibold">{card.title}</h1>
            <p>{card.description}</p>
            <div className="flex items-center gap-6">
              <Image
                src={card.avatar}
                width={0}
                alt="Curly"
                className="w-[40px] aspect-square object-cover object-center rounded-full"
              />
              <p>{card.name}</p>
              <p>{card.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
