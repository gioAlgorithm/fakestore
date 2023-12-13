import React from 'react'
import style from "./ActiveLinkResponsive.module.scss"
import { usePathname } from "next/navigation"
import Link from 'next/link'

interface ActiveLinkProps{
  href: string
  children: React.ReactNode
  onClick?: ()=> void
}

const ActiveLinkResponsive = ({href, children, onClick}: ActiveLinkProps) => {
  const router = usePathname();

  return (
    <Link href={href} onClick={onClick} className={router === href ? style.active : style.unActive}>{children}</Link>
  )
}

export default ActiveLinkResponsive