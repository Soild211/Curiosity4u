import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-10 bg-gradient-to-b from-red-950 via-red-950 to-black text-white">
      <div className="flex flex-col items-center">
        <Image 
          src="/Curiosity logo 2.png" 
          alt="Curiosity Logo"  
          height={220} 
          width={220} 
        />
        <p className="font-bold mt-4 text-center">
          Curiosity
          <br />
          Providing reliable tech since 2024
        </p>
        <p className="mt-2 text-center">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
        <p className="mt-4 text-sm text-center">
          *Some images are for representation purposes, actual product may vary.
        </p>
      </div>
      <nav className="mt-4">
        <div className="grid grid-flow-col gap-4 text-3xl justify-center">
          <a 
            href="https://www.linkedin.com/company/103952718" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer" />
          </a>
          <a 
            href="https://www.youtube.com/@curious-us" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <FaYoutube className="cursor-pointer" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
