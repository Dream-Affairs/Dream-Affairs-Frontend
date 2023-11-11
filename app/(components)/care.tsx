import Curly from "./(assets)/curly.svg";
import Mgt1 from "./(assets)/mgt1.svg";
import Mgt2 from "./(assets)/mgt2.svg";
import Mgt3 from "./(assets)/mgt3.svg";
import Image from "next/image";

const Care = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 lg-px-10">
      <div className="m-auto text-center flex flex-col items-center pb-20">
        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] text-[#48195A] font-semibold">
          We take care of everything
        </h1>
        <Image src={Curly} width={0} alt="Curly" className="w-[240px] lg:w-[400px]" />
      </div>

      <section className="text-[#48195A] font-semibold">
        <div className="lg:relative lg:mb-[-90px] flex flex-col-reverse lg:flex-row">
          <Image data-aos="flip-left" data-aos-duration="700" src={Mgt1} width={0} alt="Event Management" />
          <p
            data-aos="zoom-in"
            data-aos-duration="700"
            className="pb-6 text-center lg:text-left m-auto w-[300px] lg:w-[330px]"
          >
            From managing your events and giving you a customised wedding website{' '}
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row">
          <p data-aos="zoom-in" className="py-6 text-center lg:text-left m-auto w-[300px] lg:w-[330px]">
            To managing your guest list, invites and guest sitting arrangements
          </p>
          <Image data-aos="flip-right" data-aos-duration="700" src={Mgt2} width={0} alt="Guest Management" />
        </div>
        <div className="lg:relative lg:mt-[-90px] flex flex-col-reverse lg:flex-row">
          <Image data-aos="flip-left" data-aos-duration="700" src={Mgt3} width={0} alt="Plenty Meals" />
          <p data-aos="zoom-in" className="py-6 text-center lg:text-left m-auto w-[300px] lg:w-[330px]">
            To managing your meals, giving you the flexibility to choose what kind of meals you want on your special day
          </p>
        </div>
      </section>
    </section>
  );
}

export default Care
