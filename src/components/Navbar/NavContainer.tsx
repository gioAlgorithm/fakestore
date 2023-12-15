"use client"
import React, { ReactNode, useContext} from 'react'
import style from "./Navbar.module.scss"
import { StyleContext } from '@/context/StyleContext'
import { usePathname } from 'next/navigation'


interface NavContainerProps{
  children: ReactNode
}

const NavContainer: React.FC<NavContainerProps> = ({children}) => {
  const { isSticky } = useContext(StyleContext);
  const router = usePathname()

  return (
    <div className={`${style.navbar} ${!isSticky && router != "/cartpage" ? style.sticky : ""}`}>
      {children}
    </div>
  )
}

export default NavContainer