import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Cards = ({ data }: any) => {
  return (
    <motion.div className="grid grid-cols-3 gap-10 my-14 mb-10">
      {data.map((card: any, i: number) => (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          key={card.id}
          className="flex gap-2 flex-col border rounded-lg max-w-[350px] p-1"
        >
          <Image src={card.card} width={0} alt="Curly" className="object-cover aspect-video rounded-lg" />
          <div className="flex flex-col gap-3 py-5 px-2">
            <h1 className="text-2xl text-primary leading-8 font-semibold">{card.title}</h1>
            <p className="text-gray-500">{card.description}</p>
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
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
