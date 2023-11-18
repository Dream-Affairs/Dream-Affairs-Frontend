import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const BlogImg = ({ blogImg }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      whileInView={{ opacity: 1 }}
      className="bg-cover bg-center h-[650px] text-white flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: `url(${blogImg.src})` }}
    >
      <div className="flex max-w-[1440px] mx-auto px-8 lg-px-10 w-full justify-between items-center mt-20">
        <div className="flex flex-col gap-5 max-w-[1000px]">
          <motion.p
            initial={{ opacity: 0, y: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl"
          >
            Featured post for the week
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl leading-[50px]"
          >
            Capturing Romance: A Guide to Choosing Your Dream Wedding Photographer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm max-w-[800px]"
          >
            Embarking on the journey to &apos;I do&apos; involves not only choosing the right partner but also selecting
            the perfect storyteller for your big day – your wedding photographer. In &apos;Capturing Romance&apos;
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-fit px-10 transition-all duration-150 ease-in-out py-4 rounded-md text-black bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            Read Post
          </motion.button>
        </div>
        <Button className="bg-transparent border rounded-full w-[40px] h-[40px] p-0">
          <ChevronRight />
        </Button>
      </div>
    </motion.div>
  );
};

export default BlogImg;
