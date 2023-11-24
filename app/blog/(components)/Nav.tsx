import { Search } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Nav = ({ links, active, setActive }: any) => {
  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      whileInView={{ opacity: 1 }}
      className="my-[80px] flex justify-between items-center h-[100px] bg-[#FFF8FA] "
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-10 w-full flex justify-between items-center gap-12">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex gap-8 overflow-x-auto overflow-y-hidden"
        >
          {links.map((link: any) => (
            <motion.li
              variants={variants}
              key={link.id}
              className={`min-w-fit ${
                active === link.href ? 'border-b-2 border-primary font-semibold' : 'text-gray-700 font-[500]'
              }`}
            >
              <a
                href={`${link.href}`}
                onClick={() => setActive(link.href)}
                className="transition duration-300 ease-in-out hover:text-secondary"
              >
                {link.text}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center items-center rounded-lg border border-accent px-3 min-w-[400px]  bg-white"
        >
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-gray-600 h-[40px] outline-none ring-0 border-none px-3"
          />
        </motion.label>
      </div>
    </motion.div>
  );
};

export default Nav;
