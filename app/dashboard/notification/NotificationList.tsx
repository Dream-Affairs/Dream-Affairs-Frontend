import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cancel from '../(assets)/cross.svg';
import bing from '../(assets)/notification-bing.svg'
import directbox from '../(assets)/directbox-notif.svg'

const NotificationList = () => {

const notifications = [
    {  
        id: 1,
        bing: 'bing',
        heading: 'Plan Upgrade',
        text: 'You have successfully upgraded your plan from [ _] to [_]',
        link: '',
    },
    {  
        id: 2,
        bing: 'bing',
        heading: 'Login Attempt',
        text: 'There is a suspicious login attempt, do you want to update password?',
        link: 'https://dream-affairs-frontend-dev.vercel.app/dashboard/settings',
    },
    {  
        id: 3,
        bing: 'bing',
        heading: 'Profile Update',
        text: 'Your Password has been changed',
        link: 'https://dream-affairs-frontend-dev.vercel.app/dashboard/settings',
    },
    {  
        id: 4,
        bing: 'bing',
        heading: 'Task Overdue',
        text: 'Your task is due for 7 days, please go ahead to complete your task.',
        link: 'http://localhost:3000/dashboard/checklist',
    },
    {  
        id: 5,
        bing: 'bing',
        heading: 'Task Completed',
        text: 'Your task has been completed and it’s been checked off your list.',
        link: 'http://localhost:3000/dashboard/checklist',
    },
    {  
        id: 6,
        directbox: 'box',
        heading: 'Invitation Dispatch',
        text: 'You have successfully sent out 1050 wedding invites from your contact list.',
        link: 'http://localhost:3000/dashboard/invitation',
    },
    {  
        id: 7,
        bing: 'bing',
        heading: 'Thank You Message',
        text: "You have successfully sent out 1050 'Thank You messages' to your guest list.",
        link: 'http://localhost:3000/dashboard/guest-management',
    },
]


return (
    <div>
       {
          notifications.map((item) => (
            <div key={item.id} className="flex items-center justify-between shadow-sm border border-slate-300 rounded-lg bg-white mb-[2em]">
              <div className="flex items-center justify-between p-5">
                <Image src={item.bing === 'bing' ? bing : directbox } alt="Notification Icon" width="20" height="20"  />
                <div className="px-[1em] flex flex-col justify-center">
                  <h2 className="text-[.875rem] text-[#090909] font-normal">{item.heading}</h2>
                  <p className="text-[#576672] text-[.8rem]">{item.text}</p>
                </div>
              </div>
              <div className="px-2 flex items-center justify-between">
                <Link href={item.link} className="px-3 text-[#9B57B6] cursor-pointer">view</Link>
                <Image className="cursor-pointer" src={cancel} alt="Cancel Icon" />
              </div>
              
            </div>
          ))
        }
    </div>
  )
}

export default NotificationList
