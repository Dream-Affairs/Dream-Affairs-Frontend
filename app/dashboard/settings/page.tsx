'use client';

import Title from '../settings/(components)/title';
import React, { useState } from 'react';
import ProfileManagement from './(components)/profile';
import ChangePassword from './(components)/change-password';
import Notification from './(components)/notification';
import Payment from './(components)/payment';
import Permission from './(components)/roles-permission';

type Props = {};

const settingsData = [
  {
    id: 1,
    title: 'Profile Management',
    name: 'Edit profile',
    active: true,
    render: <ProfileManagement />,
  },
  {
    id: 2,
    title: 'Password Updates',
    name: 'Change Password',
    active: false,
    render: <ChangePassword />,
  },
  {
    id: 3,
    title: 'Notification Setting',
    name: 'Notification Control',
    active: false,
    render: <Notification />,
  },
  {
    id: 4,
    title: 'Payment & Subscription',
    name: 'payment & subscription',
    active: false,
    render: <Payment />,
  },
  {
    id: 5,
    title: 'Roles and Permission',
    name: 'Roles and permission',
    active: false,
    render: <Permission />,
  },
];

const Settings = (props: Props) => {
  const [settings, setSettings] = useState(settingsData);
  const handleActive = (id: number) => {
    const updatedSettings = settings.map((setting) => ({
      ...setting,
      active: false,
    }));

    // Find the setting with the specified id and set its active property to true
    const updatedSetting = updatedSettings.find((setting) => setting.id === id);
    if (updatedSetting) {
      updatedSetting.active = true;
    }
    // Update the state with the new settings array
    setSettings(updatedSettings);
  };

  return (
    <div className=" box-border w-full relative pb-12">
      <div className="ps-10 border-b-[1px] py-7 ms-1 pb-4 fixed z-10 bg-white w-full">
        {settings.map((setting) => (
          <div key={setting.id}>{setting.active ? <Title text={setting.title} /> : null}</div>
        ))}
        <div className="flex gap-0 gap-x-5 gap-y-3 md:gap-20 mt-6 flex-wrap">
          {settings.map((setting) => (
            <p
              key={setting.id}
              onClick={() => {
                handleActive(setting.id);
              }}
              className={`capitalize font-medium cursor-pointer border-b-[3.2px]  hover:text-purple-700 ${
                setting.active
                  ? 'border-b-[3.2px] border-purple-700 text-purple-700 transition-all duration-300'
                  : 'text-[#242424] border-b-white'
              }`}
            >
              {setting.name}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-auto mt-[8.65rem] ps-1">
        {settings.map((setting) => (
          <div key={setting.id}>{setting.active ? setting.render : null}</div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
