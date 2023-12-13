import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface classNameProp {
  className?: string | any;
}
export const SearchBar = ({ className }: classNameProp) => {
  return (
    <div className={twMerge('relative lg:h-[36px]  py[12x]', className)}>
      <SearchIcon className="absolute top-0 bottom-0 mx-[8px] my-auto left-0 z-10 w-[20px] h-[20px] text-[#8E8E8E]" />
      <Input
        placeholder="Search"
        className="w-full px-[32px] font-[400] lg:h-[36px] lg:text-[14px] lg:leading-[20.3px] placeholder:text-[#B3B3B3]"
      />
    </div>
  );
};
