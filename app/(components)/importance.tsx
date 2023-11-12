import RoseBox from './(assets)/rosebox.svg';
import Curly from './(assets)/curly.svg';
import Image from 'next/image';
import { url } from 'inspector';

const Importance = () => {
  const boxes = [
    {
      id: 1,
      content:
        'We offer a centralized platform designed to streamline and organize every detail of your special day. From managing guest lists and seating arrangements to meal preferences and gift wishlists, our service ensures a stress-free planning experience.',
    },
    {
      id: 2,
      content:
        'Empower your guests with access to event-specific information. They can view seating details, make meal selections, and engage with the event, ensuring a more interactive and enjoyable experience for everyone attending your wedding.',
    },
    {
      id: 3,
      content:
        'From the initial planning stages to the execution of the event, our tool allows couples to efficiently manage every aspect of their wedding, creating a memorable and hassle-free celebration for you and your guests.',
    },
    {
      id: 4,
      content:
        "Why settle for ordinary when you can have extraordinary? Choose DreamAffairs because every love story deserves a touch of magic, and we're here to turn your dreams into the wedding of a lifetime",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-8 lg:px-10">
      <div className="m-auto text-center flex flex-col items-center pt-20 md:pb-20">
        <h1 className="text-[30px] md:text-[40px] text-[#48195A] font-semibold">Why do you need DreamAffairs</h1>
        <Image src={Curly} width={0} alt="Curly" className="w-[240px] sm:w-[400px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-0 mb-[80px]">
        {boxes.map((box, index) => (
          <div key={box.id} data-aos="flip-right" data-aos-duration="700" className="">
            <Image
              src={RoseBox}
              width={0}
              height={700}
              alt="Rose Box"
              className="relative h-[320px] lg:h-[400px] mb-[-120px] sm:mb-0"
            />
            <p className="absolute text-center lg:text-left text-[11px] sm:text-[14px] w-[220px] md:w-[400px] lg:w-[450px] m-auto top-[55%] md:top-[35%] left-6 right-0">
              {box.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Importance;
