"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menulinks = [
  { path: "/", label: "Home" },
  { path: "/pravi", label: "Pravi" },
  { path: "/about", label: "AboutUs" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75, opacity: 0 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".menu-link-item-holder",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
          },
          "-=0.75"
        );
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar px-4">
        <div className="menu-logo text-white">
          <Link href="/">Cusiosity4u</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>MENU</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo logo-inside">
            <Link href="/">Curiosity4u</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>CLOSE</p>
          </div>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menulinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col-1">
   
              <a href="#">X </a>
              <a href="#">Instagram </a>
              <a href="#">LinkedIn </a>
            </div>
            <div className="menu-info-col">
              <p>support@curiosity4u.in</p>
              <p>+91 95886 54379</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;