'use client'

import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from 'lucide-react';
import Curly from "../(components)/(assets)/curly.svg";
import Image from 'next/image';

const Faq = () => {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const questions = [
      {
        id: 1,
        question: 'What is DreamAffairs?',
        answer:
          'Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.',
      },
      {
        id: 2,
        question: 'Is Dream Affairs a free service?',
        answer:
          'Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.',
      },
      {
        id: 3,
        question: 'How do I sign up for Dream Affairs?',
        answer:
          'Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.',
      },
      {
        id: 4,
        question: 'Can I use Dream Affairs on Mobile devices?',
        answer:
          'Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.',
      },
      {
        id: 5,
        question: "How can I contact Dream Affair's technical team?" ,
        answer:
          'Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.',
      },
    ];

  return (
    <div className="max-w-[1440px] mx-auto px-8 lg:px-10">
      <div className="m-auto text-center flex flex-col items-center pt-20 md:pb-20 mb-16 lg:mb-[-10px]">
        <h1 className="text-[30px] md:text-[40px] text-[#48195A] font-semibold">Frequently asked questions</h1>
        <Image src={Curly} width={0} alt="Curly" className="w-[240px] sm:w-[400px]" />
      </div>

      {questions.map((quest) => (
        <div key={quest.id} className="md:w-[700px] md:m-auto border-b-2 border-white/ ">
          <button
            onClick={() => setActiveQuestion(activeQuestion === quest.id ? null : quest.id)}
            className="flex justify-between font-bold w-full text-[14px] sm:text-[16px] py-5 text-left focus:outline-none"
          >
            {quest.question}
            {activeQuestion === quest.id ? <ChevronDown className="inline" /> : <ChevronRight className="inline" />}
          </button>
          <AnimatePresence>
            {activeQuestion === quest.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pb-3 mt-2 w-[90%] text-[12px] sm:text-[13px] text-gray-500"
              >
                <p>{quest.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Faq
