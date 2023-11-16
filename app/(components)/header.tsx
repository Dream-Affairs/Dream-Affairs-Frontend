'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../auth/(assets)/logo.svg';
import da from '../auth/(assets)/da.svg';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useCycle, AnimatePresence, MotionConfig } from 'framer-motion';

const Header = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleMouseLeave = () => {
    setIsDropDownVisible(false);
  };
  const handleMouseEnter = () => {
    setIsDropDownVisible(true);
  };

  return (
    <header className="py-4 border-b border-[#E1E1E1] sticky top-0 z-30 bg-white">
      <div className="flex justify-between max-w-[1440px] mx-auto px-8 lg:px-10">
        <Link href="/" className="flex gap-5 sm:w-auto w-[60%]">
          <Image src={Logo} width={0} height={0} alt="Dream Affairs Logo" />
          <Image width={0} height={0} src={da} alt="da" className="" />
        </Link>
        <div className="lg:space-x-8 mt-5 hidden lg:flex">
          <p className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Features
            {isDropDownVisible ? (
              <ChevronUp className="inline mb-[1px]" />
            ) : (
              <ChevronDown className="inline mb-[1px]" />
            )}
            {isDropDownVisible && (
              <AnimatePresence>
                <motion.div
                  variants={{
                    open: {
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                        ease: 'easeInOut',
                      },
                    },
                    closed: {
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: 'easeInOut',
                      },
                    },
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col bg-white text-black absolute z-10 text-[14px] rounded-[8px]"
                >
                  <Link
                    className="p-3 px-8 rounded-t-[8px] hover:text-[#E0B0FF] duration-700 w-full"
                    href="/dashboard/event-management"
                  >
                    Event Management
                  </Link>
                  <Link
                    className="p-3 px-8 hover:text-[#E0B0FF] duration-700 w-full"
                    href="/dashboard/guest-management"
                  >
                    Guest Management
                  </Link>
                  <Link className="p-3 px-8 hover:text-[#E0B0FF] duration-700 w-full" href="/dashboard/meal-management">
                    Meal Management
                  </Link>
                  <Link className="p-3 px-8 hover:text-[#E0B0FF] duration-700 w-full" href="/">
                    Invitation
                  </Link>
                  <Link className="p-3 px-8 hover:text-[#E0B0FF] duration-700 w-full" href="/">
                    Registry
                  </Link>
                  <Link className="p-3 px-8 rounded-b-[8px] hover:text-[#E0B0FF] duration-700 w-full" href="/">
                    Budget
                  </Link>
                </motion.div>
              </AnimatePresence>
            )}
          </p>
          <Link href="/pricing">Pricing</Link>
          <Link href="/">Blog</Link>
          <Link href="/about-us">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="hidden lg:flex">
          <Link href="/auth/login">
            <Button variant="outline" className="w-[114px] h-[58px] mr-6 ">
              Log In
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="secondary" className="w-[154px] h-[56px]">
              Signup
            </Button>
          </Link>
        </div>

        {/* Dropdown Menu */}

        <div className="relative z-10 content lg:hidden">
          <motion.button
            animate={mobileNav ? 'open' : 'closed'}
            className="flex flex-col space-y-1 mt-5"
            onClick={() => toggleMobileNav()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 0, rotate: 0, y: 0, borderRadius: '0%' },
                open: { rotate: 360, borderRadius: '50%' },
              }}
              className={`${
                mobileNav ? 'absolute' : 'hidden'
              } w-5 p-3 bottom-[10px] right-[-3.99px] h-px border border-black block`}
            ></motion.span>
          </motion.button>
        </div>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: 'spring',
                bounce: 0,
              }}
            >
              <motion.div
                variants={{
                  open: {
                    x: '0%',
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      when: 'beforeChildren',
                    },
                  },
                  closed: {
                    x: '100%',
                    transition: {
                      type: 'spring',
                      bounce: 0.25,
                      when: 'afterChildren',
                    },
                  },
                }}
                animate="open"
                initial="closed"
                exit="closed"
                className="fixed inset-0 bg-white min-h-[200vh]"
              >
                <motion.div
                  variants={{
                    open: {
                      y: '0%',
                      opacity: 1,
                    },
                    closed: {
                      y: '25%',
                      opacity: 0,
                    },
                  }}
                  className="text-white py-4 px-8 border-t border-[#E1E1E1] mt-[70px]"
                >
                  <p
                    className="cursor-pointer duration-700 text-black py-5"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Features
                    {isDropDownVisible ? (
                      <ChevronUp className="inline mb-[1px]" />
                    ) : (
                      <ChevronDown className="inline mb-[1px]" />
                    )}
                    {isDropDownVisible && (
                      <AnimatePresence>
                        <motion.div
                          variants={{
                            open: {
                              opacity: 1,
                              transition: {
                                duration: 0.2,
                                ease: 'easeInOut',
                              },
                            },
                            closed: {
                              opacity: 0,
                              transition: {
                                duration: 0.2,
                                ease: 'easeInOut',
                              },
                            },
                          }}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="flex flex-col bg-white text-black text-[14px] rounded-[8px]"
                        >
                          <Link
                            className="rounded-t-[8px] py-3 hover:text-[#E0B0FF] duration-700"
                            href="/dashboard/event-management"
                          >
                            Event Management
                          </Link>
                          <Link className="py-3 hover:text-[#E0B0FF] duration-700" href="/dashboard/guest-management">
                            Guest Management
                          </Link>
                          <Link className="py-3 hover:text-[#E0B0FF] duration-700" href="/dashboard/meal-management">
                            Meal Management
                          </Link>
                          <Link className="py-3 hover:text-[#E0B0FF] duration-700" href="/">
                            Invitation
                          </Link>
                          <Link className="py-3 hover:text-[#E0B0FF] duration-700" href="/">
                            Registry
                          </Link>
                          <Link className="rounded-b-[8px] py-3 hover:text-[#E0B0FF] duration-700" href="/">
                            Budget
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </p>
                  <Link href="/" className="flex duration-700 text-black py-5">
                    Pricing
                  </Link>
                  <Link href="/" className=" flex duration-700 text-black py-5">
                    Blog
                  </Link>
                  <Link href="/about-us" className=" flex duration-700 text-black py-5">
                    About
                  </Link>
                  <Link href="/" className=" flex duration-700 text-black py-5">
                    Contact Us
                  </Link>

                  <div className="flex flex-col">
                    <Link href="/auth/login">
                      <Button variant="outline" className="w-full h-[58px] my-6 ">
                        Log In
                      </Button>
                    </Link>
                    <Link href="/auth/register">
                      <Button variant="secondary" className="w-full h-[56px]">
                        Signup
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
