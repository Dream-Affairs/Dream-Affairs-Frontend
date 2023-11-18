import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const BlogImg = ({ blogImg }: any) => {
  return (
    <div
      className="bg-cover bg-center h-[650px] text-white flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: `url(${blogImg.src})` }}
    >
      <div className="flex max-w-[1440px] mx-auto px-8 lg-px-10 w-full justify-between items-center mt-20">
        <div className="flex flex-col gap-5 max-w-[1000px]">
          <p className="text-xl">Featured post for the week</p>
          <h1 className="text-5xl leading-[50px]">
            Capturing Romance: A Guide to Choosing Your Dream Wedding Photographer
          </h1>
          <p className="text-sm max-w-[800px]">
            Embarking on the journey to &apos;I do&apos; involves not only choosing the right partner but also selecting
            the perfect storyteller for your big day – your wedding photographer. In &apos;Capturing Romance&apos;
          </p>
          <Button variant="secondary" className="w-fit px-10">
            Read Post
          </Button>
        </div>
        <Button className="bg-transparent border rounded-full w-[40px] h-[40px] p-0">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default BlogImg;
