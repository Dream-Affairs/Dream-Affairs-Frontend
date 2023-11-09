import React from 'react';

interface TextProps {
  text: string;
}

const Subtitle: React.FC<TextProps> = ({ text }) => {
  return <h3 className="text-[#242424] text-[1.2rem] font-semibold w-full">{text}</h3>;
};

export default Subtitle;
