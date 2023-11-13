import Image from 'next/image'
import React from 'react'
import {SlArrowRight, SlArrowDown} from 'react-icons/sl'
import FaqItem from './(components)/FaqItems'
import banner from "../pricing/(assets)/contactbg.svg"

type Props = {}

export default function page({}: Props) {
  return (
    <>
    <div className="faq_banner_image w-full h-[55vh] relative ">
        <Image src="/assets/faq_banner.png" className="object-cover h-[100%] w-[100%]" sizes='100vw' alt="faq_banner_image" width={0} height={0}  style={{width: "100vw", height:'100%'}}/>
        <div className='w-full h-full bg-black absolute top-0 left-0 opacity-50'></div>
        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[80%] text-white text-center font-semibold">
        <h1 className='text-2xl'>Frequently Asked Questions</h1>
        <h4 className='text-lg mt-6'>Navigate through our extensive list of frequently asked questions to find answers and solutions for typical queries.</h4>
        </div>
    </div>
    <div className="mt-4 px-4 py-4 w-full flex flex-row overflow-scroll gap-4 flex-nowrap whitespace-nowrap underline-offset-4 font-semibold text-slate-400">
        <p id='general' role='button' className='active_faq_nav faq-nav w-full'>General</p>
        <p id='accounts' role='button' className='faq-nav w-[100%]' >Accounts & Registration</p>
        <p id='guest' role='button' className='faq-nav w-full'>Guest List Management</p>
        <p id='invitation' role='button' className='faq-nav w-full'>Invitations and RSVP</p>
        <p id='gift' role='button' className='faq-nav w-full'>Gift Management</p>
        <p id='pricing' role='button' className='faq-nav w-full'>Pricing & Billing</p>
    </div>

    <div className="px-4 mt-6">
        <div className="displays " id='general_display'>
            <FaqItem title='What is Dream Affairs' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_0' />
            
            <FaqItem title='Is Dream Affairs a free service?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_1' />
            
            <FaqItem title='How do I sign up for Dream Affairs?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_2' />
            
            <FaqItem title='Can I use Dream Affairs on mobile devices?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_3' />
            
            <FaqItem title="How can I contact Dream Affair's technical support team?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_4' />
        </div>

        <div className="displays hidden" id='accounts_display'>
            <FaqItem title='Can I change my account information later?' description='Yes, you can edit your account information at any time. Simply go to your Account management section and make the desired changes.' check_id='check_0' />
            
            <FaqItem title='What should I do if I forget my password?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_1' />

            <FaqItem title='How do I create an account on Dream Affairs?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_2' />

            <FaqItem title='Can I use Dream Affairs on mobile devices?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_3' />

            <FaqItem title="How can I contact Dream Affair's technical support team?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_4' />
        </div>

        <div className="displays hidden" id='guest_display'>
            <FaqItem title='How do I import my guest list from an Excel file?' description='In the "Guest Management" section, select the option to import from an Excel file. Follow the instructions to upload your file, and our system will process it efficiently.' check_id='check_0' />
            
            <FaqItem title='Can I manually add guests to my list?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_1' />

            <FaqItem title='What guest information can I collect?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_2' />

            <FaqItem title='How can I assign guests to specific events or categories?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_3' />

            <FaqItem title="What is a unique guest code?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_4' />
        </div>


        <div className="displays hidden" id='invitation_display'>
            <FaqItem title='How do I send digital invitations to my guests?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_0' />
            
            <FaqItem title='What do guests need to do to RSVP for an event?' description="Guests will receive a digital invitation with an access code. They'll enter this code on the platform, view the event details, and indicate their attendance status." check_id='check_1' />

            <FaqItem title='What if a guest needs to decline an invitation?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_2' />

            <FaqItem title='How can I track RSVP responses?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_3' />

            <FaqItem title="Can I send separate email invitations for different events?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_4' />
        </div>

        <div className="displays hidden" id='gift_display'>
                        
            <FaqItem title='How do I create a gift wishlist for our event?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_1' />

            <FaqItem title="Can guests make cash donations through the app?" description="Yes, guests have the option to make cash donations through the app. They can choose their donation amount and complete the transaction securely." check_id='check_2' />
            
            <FaqItem title='How can I track gift purchases and donations?' description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_0' />
            
            <FaqItem title="How can I manage inventory for gift items?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_3' />
            
            <FaqItem title="Can I send thank-you notes for gifts and attendance?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_4' />
        </div>

        <div className="displays hidden" id='pricing_display'>
            <FaqItem title="How does billing work for the Core and Pro Plans?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_0' />
            
            <FaqItem title="Can I cancel my subscription?" description="Yes, you can cancel your subscription at any time. Please note that no refunds will be provided for partial subscription periods." check_id='check_1' />
            
            <FaqItem title="What happens if I downgrade from a paid plan to the Free Plan?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_2' />
            
            <FaqItem title="How can I make changes to my billing information?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_3' />
            
            <FaqItem title="What payment methods do you accept?" description='Dream Affairs is a comprehensive wedding planning and management application designed to help couples effortlessly plan, organize, and share their special day with family and friends. It provides tools for managing guest lists, seating arrangements, meal preferences, and gift Wishlist.' check_id='check_4' />
        </div>
    </div>
    <div className="w-full h-[50vh] bg-slate-600 relative">
        <div className="w-full h-full">
            <Image src={banner} alt='banner_image' width={0} height={0} sizes='100vw' className='object-cover w-[100%] h-[100%] '/>
        </div>
        <div className="text-white text-center absolute w-[85%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h2 className='text-3xl font-semibold'>Need more help?</h2>
            <p className='text-xl mt-8'>Our team is here to assist you with any technical questions or issues you may encounter</p>
        </div>
    </div>
    <script src="/js/faq.js"></script>
    </>
  )
}
