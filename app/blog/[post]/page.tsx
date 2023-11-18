'use client';
import React from 'react';
import BlogImg from '../(components)/BlogImg';
import Image from 'next/image';
import card from '../(assets)/card.svg';
import img2 from '../(assets)/img2.svg';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import Cards from '../(components)/Cards';
import { data } from '../(components)/helpers';
import ExternalLayout from '@/app/(components)/External-Layout';
import { usePathname } from 'next/navigation';

const BlogId = () => {
  const path = usePathname();
  return (
    <ExternalLayout>
      <BlogImg data={data[0]} showBtn={false} />
      <div className="max-w-[1440px] mx-auto px-8 lg-px-10 w-full my-24">
        <div className="flex justify-between w-full items-center mb-9">
          <div className="flex items-center gap-4">
            <Image
              src={card}
              width={0}
              alt="Curly"
              className="w-[40px] aspect-square object-cover object-center rounded-full"
            />
            <p>John Chuka K.</p>
            <p>23 Jan 2023</p>
          </div>

          <div className="flex items-center gap-6">
            <p>10 minutes</p>
          </div>
        </div>

        <div>
          <p className="my-9">
            Your wedding day is a celebration of love, and every moment of that special day deserves to be captured in a
            way that reflects the romance and joy you and your partner share. Choosing the right wedding photographer is
            a crucial decision that goes beyond just finding someone with a camera – it&apos;s about finding an artist
            who can beautifully tell your unique love story through their lens. Here&apos;s a comprehensive guide to
            help you select your dream wedding photographer.
            <br />
            <br />
            1. Define Your Style: Before diving into the search for a photographer, take some time to define your
            wedding style. Are you envisioning a classic and timeless celebration, a rustic and intimate affair, or a
            modern and chic party? Knowing your style will guide you in finding a photographer whose portfolio aligns
            with your vision.
            <br />
            <br />
            2. Research and Review Portfolios: Start your search by exploring the portfolios of various photographers.
            Look for consistency in their work and an ability to capture genuine emotions. Pay attention to their use of
            light, composition, and storytelling. Most photographers showcase their best work on their websites,
            providing you with a glimpse of their unique style.
            <br />
            <br />
            3. Read Reviews and Testimonials: Client testimonials offer insights into a photographer&apos;s
            professionalism, reliability, and ability to connect with couples. Platforms like WeddingWire and The Knot
            are valuable resources for reading reviews from previous clients. Personal recommendations from friends or
            family who have experienced a photographer&apos;s work firsthand can also be invaluable.
            <br />
            <br />
            4. Meet and Connect: Schedule meetings with potential photographers to get to know them personally.
            Establishing a connection is essential, as you&apos;ll be spending a significant part of your wedding day
            with them. Discuss your vision, ask about their approach to capturing moments, and ensure your personalities
            complement each other.
            <br />
            <br />
            5. Ask About Experience: Inquire about a photographer&apos;s experience in shooting weddings. Experienced
            photographers often have the expertise to handle various lighting conditions, unexpected challenges, and
            complex timelines. Ask to see full wedding galleries to get a better understanding of their consistency
            throughout an entire event.
          </p>
          <Image src={img2} width={0} alt="Curly" className="object-cover aspect-video w-full max-h-[400px]" />
          <p>
            <br />
            <br />
            6. Understand the Package: Wedding photography packages vary, so it&apos;s crucial to understand what each
            package includes. Discuss the number of hours of coverage, the delivery timeline for your photos, and any
            additional services such as engagement sessions or photo albums. Clarify the rights to the photos and any
            potential extra costs.
            <br />
            <br />
            7. Check Availability: Once you find a photographer you love, check their availability for your wedding
            date. Popular photographers often book up quickly, so it&apos;s advisable to secure your date as early as
            possible.
            <br />
            <br />
            8. Trust Your Instincts: Trust your gut feeling when making the final decision. Your photographer should not
            only be skilled but also someone you feel comfortable with. A sense of trust and a positive connection will
            contribute to more natural and authentic photographs.
            <br />
            <br />
            Choosing your dream wedding photographer is an investment in preserving the memories of your special day. By
            taking the time to research, meet, and connect with potential photographers, you&apos;ll be well on your way
            to finding the perfect artist to capture the romance of your wedding day. Remember, these photos will be
            cherished for a lifetime, so make the choice that feels right for you and your love story.
          </p>
          <div className="flex gap-5 items-center mt-8 mb-16">
            <ThumbsUp className="text-gray-500" />
            <ThumbsDown className="text-gray-500" />
          </div>
        </div>

        <div>
          <h1 className="text-4xl text-primary font-[500]">Similar posts</h1>
          <Cards data={data.slice(0, 3)} />
        </div>
      </div>
    </ExternalLayout>
  );
};

export default BlogId;
