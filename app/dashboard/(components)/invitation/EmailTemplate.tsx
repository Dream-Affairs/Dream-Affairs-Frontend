import Image from "next/image";
import { EmailTemplateProp } from "@/index";
import { Button } from "@/components/ui/button";

export default function EmailTemplate({title,description,image}: EmailTemplateProp) {
  return (
        <>
         <div className="bg-[#FCF7FF] px-[33px] pt-[20px] pb-[33px] border border-[#B5868E] flex items-center">
            <div className="lg:max-w-[300px] lg:w-[100%] h-[362px]  overflow-hidden z-50">
                <Image
                width={0}
                height={0}
                src={image}
                alt={"email template"}
                style={{ height: '100%', width: '100vw' }}
                sizes="100vw"
                className="rounded-[8px] object-cover h-[100%] w-[100%]"
                />
            </div>
        </div>
        <h3 className="font-medium text-2xl mt-4">{title}</h3>
        <p className="text-sm w-4/5">{description}</p>
        <Button className="w-full mt-2 bg-[#E0B0FF] text-black">Edit Template</Button>
        
     
     </>
  )
}