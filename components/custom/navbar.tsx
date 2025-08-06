import React from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="flex">
      <ul className="flex gap-4">
        <li>HOME</li>
        <li>COURCES</li>
        <li>CERTIFICATES</li>
        <li>GALLERY</li>
        <li>BLOG</li>
        <li>ABOUT US</li>
      </ul>
      <Button>Contact Us</Button>
    </nav>
  );
};

export default Navbar;
