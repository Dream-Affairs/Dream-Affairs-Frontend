'use client';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import React, { useEffect } from 'react';
import faqBg from '../(assets)/faqBg.svg';
import need from '../../auth/(assets)/image1.svg';
import ExternalLayout from '../../(components)/External-Layout';
import Wrapper from '../(components)/imageWrapper';
import AccordionComponent from './Accordion';
import { account, billing, general, gift, guestlist, rsvp, links } from './data';

const MainWrapper = () => {
  const [active, setActive] = React.useState('general');
  const [questions, setQuestions] = React.useState(general);

  useEffect(() => {
    AOS.init({});

    switch (active) {
      case 'general':
        setQuestions(general);
        break;
      case 'account':
        setQuestions(account);
        break;
      case 'billing':
        setQuestions(billing);
        break;
      case 'gift':
        setQuestions(gift);
        break;
      case 'guestlist':
        setQuestions(guestlist);
        break;
      case 'rsvp':
        setQuestions(rsvp);
        break;
      default:
        setQuestions(general);
        break;
    }
  }, [active]);

  return (
    <ExternalLayout>
      <Wrapper
        bg={faqBg}
        title="Frequently Asked Questions"
        text="Navigate through our extensive list of frequently asked questions to find answers and solutions for typical queries."
      />
      <div className="flex flex-col items-center min-h-[50vh] max-w-[1440px] mx-auto px-8 lg:px-10 py-10">
        <ul className="flex gap-5 text-gray-400 w-full justify-between overflow-x-auto">
          {links.map((link) => (
            <li
              key={link.id}
              className={`min-w-fit cursor-pointer border-b-[3px] pb-2 transition-all duration-200 ease-in-out ${
                link.href === active ? ' border-secondary text-black font-semibold' : 'border-transparent'
              }`}
              onClick={() => {
                setActive(link.href);
              }}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div className="w-full md:w-[70%] min-h-[300px] md:min-h-[400px] flex justify-center items-start md:items-center mt-10 md:mt-0">
          <AccordionComponent questions={questions} />
        </div>
      </div>
      <Wrapper
        bg={need}
        title="Need more help?"
        text="Our team is here to assist you with any technical questions or issues you may encounter"
      >
        <Button variant="secondary" className="z-10 h-auto px-10 py-3 scale-125 md:scale-150">
          Contact Us
        </Button>
      </Wrapper>
    </ExternalLayout>
  );
};

export default MainWrapper;
