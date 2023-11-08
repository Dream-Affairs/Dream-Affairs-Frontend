import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ImagesProp{
    galleryImages: StaticImageData[]
}

const Gallery = (props:ImagesProp) => {
  return (
    <section className="w-full mt-[100px] flex flex-col items-center px-[80px]">
          <h3 className="font-[400] text-[40px] leading-[56px] text-primary">Our Gallery</h3>
          <div className='w-full mt-[56px] grid grid-col grid-cols-4 gap-x-[32px] '>
             {
             props.galleryImages.map((img, index)=>(
              <Image key={index} src={img} alt='image-1' height={234} width={296} className='even:mt-[117px] rounded-[20px] object-cover h-[234px]'/>
             ))}
              </div>
        </section>
  )
}

export default Gallery