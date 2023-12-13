"use client"
import React, {useContext} from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import style from "./ActiveLink.module.scss"
import { StyleContext } from '@/context/StyleContext'

interface LinkProps{
  href: string
  children: React.ReactNode
  onClick?: ()=> void
}

export default function ActiveLink({href, children, onClick}: LinkProps) {
  const router = usePathname();
  const { isSticky } = useContext(StyleContext);

  return (
    <Link href={href} onClick={onClick} style={!isSticky && router === '/' ? {color: "white"} : {}} className={router === href ? style.active : style.unActive} >{children}</Link>
  )
}
