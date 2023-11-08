import React, { ComponentProps } from 'react';
// import { teamProps } from '../page'
interface teamProps {
  teamMembers: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  }[];
}

const Team = (props: teamProps) => {
  return (
    <section className="w-full bg-[#F5E7FF] flex flex-col items-center pb-[113px]">
      <h1 className="mt-[44px] font-[400] text-[40px] leading-[56px] text-primary">Meet Our Team</h1>
      <div className="w-full mt-[31px] flex flex-row justify-center flex-wrap lg:gap-x-[125px] gap-y-[80px]">
        {props.teamMembers?.map((team, index) => (
          <div
            key={index}
            className="lg:w-[381px] h-[371px] py-[35px] flex flex-col shadow-sm shadow-[#1018284f] p-[29px]"
          >
            <div className="flex flex-row gap-x-[15px] items-center text-[#111111]">
              <div className="w-[95px] h-[95px] rounded-full bg-[#352d2d]"></div>
              <div className="flex flex-col ">
                <h4 className="font-[400] text-[24px] leading-[33.6px] ">{team.name}</h4>
                <p className="font-[400] text-[16px] leading-[22.4px]">{team.role}</p>
              </div>
            </div>
            <p className="font-[400] mt-[26px] text-[16px] leading-[22.4px]">{team.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
