import Rose from './(assets)/rose.svg';
import Curly from './(assets)/curly.svg';
import Rec from './(assets)/rec.svg';
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
      <div className="m-auto text-center flex flex-col items-center pt-[32px] pb-[24px]">
        <h1 className="text-[24px] sm:text-[56px] text-[#48195A] font-semibold">Why do you need DreamAffairs</h1>
        <Image src={Curly} width={0} alt="Curly" className="w-[108px] sm:w-[400px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb">
        {boxes.map((box) => (
          <div
            style={{ backgroundImage: `url(${Rec.src})` }}
            key={box.id}
            data-aos="fade-up"
            data-aos-duration="800"
            className=""
          >
            <div className=" border-2 m-6 sm:m-10 border-[#E8ACB6] h-[200px] md:h-[300px] p-6 px-7 sm:p-10 md:pt-20 py-10 rounded-md relative rounded-bl-[50px]">
              <Image src={Rose} width={0} alt="Rose" className="absolute -left-6 bottom-[-20px] z-10" />
              <p className="text-[11px] sm:text-[14px] md:text-[18px] font-[500] z-5 text-black">{box.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Importance;
