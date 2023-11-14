interface titleProps {
  text: string;
}

const Title: React.FC<titleProps> = ({ text }) => {
  return <div className="text-[#1C1C1C] text-lg md:text-2xl font-bold">{text}</div>;
};

export default Title;
