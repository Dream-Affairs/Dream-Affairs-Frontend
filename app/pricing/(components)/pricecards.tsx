import React from 'react'
import freemium from '../(assets)/notification-circle.svg'
import proIcon from '../(assets)/medal-star.svg'
import coreIcon from '../(assets)/share.svg'
import arrowR from '../(assets)/arrow-right.svg'
import arrowRw from '../(assets)/arrow-right-w.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Pricecards = () => {
  return (
    <section className='w-[80%] mx-auto flex items-center justify-between mt-[-150px]'>
        <div className='w-[325px] h-[700px] rounded-[20px] px-4 py-6 border-[#EBEBEB] border text-[14px] flex flex-col bg-white'>
            <div className='h-[215px] border-b border-[#BCBCBC]'>
            <Image 
            src={freemium}
            alt=''
            width={24}
            height={24}
            />
            <h3 className='text-[24px] font-[600] mt-4'>Free Plan</h3>
            <p className='text-[#6F6F6F]'>Basic Event Management</p>
            <h2 className='text-[64px] font-[500] text-[#242424]'><span className='text-[14px] text-[#6F6F6F] align-top'>$</span>0<span className='text-[14px] text-[#6F6F6F]'>/free</span></h2>
            </div>
            <div>
                <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Event Dashboard:</strong> Main event overview, Customizable URLs.</p>
                </div>
                <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Guest Management:</strong>Manage and track RSVPs for up to 30 guests, Manage 3 categories.</p>
                </div>  
                <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Invitations:</strong>Basic templates for the main event and &quot;"Save the Date".</p>
                </div>  
                <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Communication:</strong>Send bulk emails.</p>
                </div> 
                <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Template Selection:</strong>Limited access to basic website templates.</p>
                </div> 
            </div>
            <Button size='lg' variant='outline' className='w-[100%] mt-auto'>Choose Plan</Button>
        </div>
        <div className='w-[395px] h-[814px] rounded-[20px] px-4 py-6 border-[#EBEBEB] border text-[14px] flex flex-col bg-[#F5E7FF]'>
        <p className='text-[#008D36] text-[16px] font-[500] bg-[#E6F4EB] w-[134px] h-[30px] rounded-[8px]   self-end text-center mb-2'>Recommended</p>
            <div className='h-[215px] border-b border-[#BCBCBC]'>
            <Image 
            src={proIcon}
            alt=''
            width={24}
            height={24}
            />
            <h3 className='text-[24px] font-[600] mt-4'>Pro plan</h3>
            <p className='text-[#6F6F6F]'>Comprehensive Event Suite</p>
            <h2 className='text-[64px] font-[500] text-[#242424]'><span className='text-[14px] text-[#6F6F6F] align-top'>$</span>10<span className='text-[14px] text-[#6F6F6F]'>/one time fee</span></h2>
            </div>
            <div>
            <div className='flex my-4'>
                <Image src={arrowRw} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Everything in Core Plan</strong></p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowRw} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>On-the-Go Management:</strong> Access all your wedding details and tools right from your mobile device.</p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowRw} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Guest Communication:</strong> Directly interact with guests, send reminders or updates with ease.</p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowRw} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Unlimited Guest Management:</strong> Import, export, seating arrangements, and unlimited categories, guest tracking.</p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowRw} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Customizable Invitations:</strong> Unlimited templates and full customization.</p>
            </div> 
            <Button size='lg' variant='secondary' className='w-[100%] mt-20'>Choose Plan</Button>
        </div>
        </div>
        <div className='w-[325px] h-[700px] rounded-[20px] px-4 py-6 border-[#EBEBEB] border text-[14px] flex flex-col bg-white'>
            <div className='h-[215px] border-b border-[#BCBCBC]'>
            <Image 
            src={coreIcon}
            alt=''
            width={24}
            height={24}
            />
            <h3 className='text-[24px] font-[600] mt-4'>Core Plan</h3>
            <p className='text-[#6F6F6F]'>Advanced Planning Features</p>
            <h2 className='text-[64px] font-[500] text-[#242424]'><span className='text-[14px] text-[#6F6F6F] align-top'>$</span>5<span className='text-[14px] text-[#6F6F6F]'>/one time fee</span></h2>
            </div>
            <div>
            <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Everything in Free Plan.</strong></p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Enhanced Guest Management:</strong> Up to 60 guests, Import guests, sub-events, 6 categories, and guest limits.</p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Advanced Invitations: </strong> Additional templates and invites for sub-events.</p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Meal Management: </strong> Define and manage guest meal choices.</p>
            </div> 
            <div className='flex my-4'>
                <Image src={arrowR} alt='' width={24} height={24} className='mr-2 self-baseline'/>
                <p className=''><strong>Gift Management: </strong> Curate an e-commerce wishlist and accept cash donations.</p>
            </div> 
            </div>
            <Button size='lg' variant='outline' className='w-[100%] mt-auto'>Choose Plan</Button>
        </div>
    </section>
  )
}

export default Pricecards