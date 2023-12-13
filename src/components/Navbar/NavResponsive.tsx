"use client"
import React, {useState, useRef, useEffect, useContext} from 'react'
import style from "./Navbar.module.scss"
import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ActiveLinkResponsive from '../ActiveLinkResponsive/ActiveLinkResponsive';
import { StyleContext } from '@/context/StyleContext';
import { usePathname } from 'next/navigation';

export default function NavResponsive() {
  const [show, setShow] = useState(false)
  const {isSticky} = useContext(StyleContext)
  const router = usePathname()

  const showMenu = () => {
    setShow(true);
  };

  const closeMenu = ()=>{
    setShow(false)
  }
  // hide navmenu after clicking link
  const handleLink = ()=>{
    setShow(false)
  }

  // outside click logic
  const menuRef: any = useRef(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className={style.navLogo} onClick={showMenu}>
        <HiMenu style={!isSticky && router === "/" ? {color: "white"} : {}} />
      </div>

       
        <div className={`${style.responsiveMenu} ${show && style.responsiveMenuActive}`} ref={menuRef}>
          <div>
            <div className={style.navLogoMenu} onClick={closeMenu}>
              <MdKeyboardArrowLeft />
            </div>
            <ActiveLinkResponsive onClick={handleLink} href="/">All</ActiveLinkResponsive>
            <ActiveLinkResponsive onClick={handleLink} href="/clothing">Clothing</ActiveLinkResponsive>
            <ActiveLinkResponsive onClick={handleLink} href="/jewelry">Jewelry</ActiveLinkResponsive>
            <ActiveLinkResponsive onClick={handleLink} href="/electronics">Electronics</ActiveLinkResponsive>
          </div>
          <div className={style.fakeStoreLogo}>
            <h1>FAKE<span>STORE</span></h1>
          </div>
        </div>
      
    </>
  )
}
