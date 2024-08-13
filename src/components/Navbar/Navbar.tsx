import React from 'react'
import style from "./Navbar.module.scss"
import Logo from '@/components/Logo/Logo'
import Cart from '@/components/Cart/Cart'
import Search from '../Search'
import ActiveLink from '@/components/ActiveLink/ActiveLink'
import NavResponsive from './NavResponsive'
import NavContainer from './NavContainer'
import { fetchAllProducts } from '@/utils/fetchAllProducts'

export default async function Navbar() {
  const data = await fetchAllProducts()
  
  

  return (
    <NavContainer>
        
      <div className={style.navigation}>
        <ActiveLink href="/">All</ActiveLink>
        <ActiveLink href="/clothing">Clothing</ActiveLink>
        <ActiveLink href="/jewelry">Jewelry</ActiveLink>
        <ActiveLink href="/electronics">Electronics</ActiveLink>
      </div>
      <NavResponsive />
        
      <div className={style.logo}>
          <Logo />
      </div>
      <div className={style.cartSearch}>
          <div className={style.cartDiv}>
            <Search data={data} />
          </div>
          <div className={`${style.cartDiv} ${style.responsive}`}>
            <Cart />
          </div>
      </div>
    </NavContainer>
  )
}
