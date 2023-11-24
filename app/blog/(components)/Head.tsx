import { motion } from 'framer-motion';
import React from 'react';

const Head = ({ img }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      className="bg-cover bg-center h-[430px] text-center text-white flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <motion.p
        initial={{ opacity: 0, y: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-[400] tracking-tight text-2xl max-w-[500px] z-10 mb-6"
      >
        Welcome to DreamAffairs
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl leading-[50px] font-semibold z-10 "
      >
        Our Blog
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        data-aos-duration="400"
        className="font-[400] tracking-tight text-2xl z-10 max-w-[500px]"
      >
        Capturing Moments: Insights, Ideas, and Inspiration on Dream Affairs Blog
      </motion.p>
    </motion.div>
  );
};

export default Head;
