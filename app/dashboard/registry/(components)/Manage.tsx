'use client';
import Image from 'next/image';
import Banner from 'app/dashboard/(assets)/banner.svg';
import Dummy from 'app/dashboard/(assets)/dummy.svg';
import Edit from 'app/dashboard/(assets)/edit.svg';
import Board from './Board';
import React from 'react';
import Header from './Header';

const Manage = () => {
  return (
    <div>
      {/* header starts here  */}
      <Header />
      <div className="">
        <Board />
      </div>
    </div>
  );
};

export default Manage;
