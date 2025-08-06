'use client';

import React from 'react';
import { MainLogo } from '../Icons/main-logo';
import Navbar from '../custom/navbar';

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <MainLogo />
      <Navbar />
    </div>
  );
};

export default Header;
