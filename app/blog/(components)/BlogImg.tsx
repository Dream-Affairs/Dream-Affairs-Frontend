import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const BlogImg = ({ data, showBtn }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      whileInView={{ opacity: 1 }}
      className="relative bg-cover bg-center h-[650px] text-white flex flex-col justify-center items-center gap-4"
      // style={{ backgroundImage: `url(${blogImg.src})` }}
    >
      <Image
        priority
        src={data.banner}
        width={0}
        height={0}
        alt="banner"
        className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
      />
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
            {data.bannerTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm max-w-[800px]"
          >
            {data.bannerDescription}
          </motion.p>
          {showBtn && (
            <motion.button
              initial={{ opacity: 0, y: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-fit px-10 transition-all duration-150 ease-in-out py-4 rounded-md text-black bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              <Link href={`/blog/${data.id}`}>Read Post</Link>
            </motion.button>
          )}
        </div>
        {showBtn && (
          <Button className="bg-transparent border rounded-full w-[40px] h-[40px] p-0">
            <Link
              className="bg-transparent border rounded-full w-[40px] h-[40px] p-0 grid place-content-center"
              href={`/blog/${data.id}`}
            >
              <ChevronRight />
            </Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default BlogImg;
