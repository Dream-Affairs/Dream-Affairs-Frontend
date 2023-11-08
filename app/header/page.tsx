'use client'

import React from 'react'
import Image from 'next/image'
import Logo from './assets/logo.svg';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useCycle, AnimatePresence, MotionConfig } from 'framer-motion';

const Header = () => {

    const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <header className="py-4 px-8 lg:px-15 border-b border-black/10 sticky top-0 z-30 backdrop-blur-md">
      <div className="flex justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="mt-1 z-10">
          <Image src={Logo} width={200} height={200} alt="Dream Affairs Logo" />
        </Link>
        <div className="lg:space-x-8 mt-3 hidden lg:flex">
          <Link href="/">
            Features <ChevronDown className="inline" />
          </Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Blog</Link>
          <Link href="/about-us">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="hidden lg:flex">
          <Link href="/auth/login">
            <Button variant="outline" className="p-3 px-4 h-10 mr-6">
              Log In
            </Button>
          </Link>
          <Link href="/auth/register">
          <Button variant="secondary" className="p-3 px-8 h-10">
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
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: 'spring',
                bounce: 0.25,
              }}
            >
              <motion.div
                variants={{
                  open: {
                    x: '0%',
                    transition: {
                      type: 'spring',
                      bounce: 0.25,
                      when: 'beforeChildren',
                    },
                  },
                  closed: {
                    x: '-100%',
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
                className="fixed inset-0 bg-white min-h-screen"
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
                  className="text-white pt-[160px] flex flex-col justify-center items-center py-6 px-8"
                >
                  <Link href="/" className=" flex duration-700 text-black pb-5">
                    Features <ChevronDown className="inline" />
                  </Link>
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

                  <div className="flex mt-2">
                    <Link href="/auth/login">
                      <Button variant="outline" className="p-3 px-4 h-10 mr-6">
                        Log In
                      </Button>
                    </Link>
                    <Link href="/auth/register">
                      <Button variant="secondary" className="p-3 px-8 h-10">
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
}

export default Header
