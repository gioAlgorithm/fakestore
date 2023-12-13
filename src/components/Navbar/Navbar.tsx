import React from 'react'
import style from "./Navbar.module.scss"
import Logo from '@/components/Logo/Logo'
import Cart from '@/components/Cart/Cart'
import Search from '@/components/Search/Search'
import ActiveLink from '@/components/ActiveLink/ActiveLink'
import { fetchProducts } from '@/app/fetchProducts'
import NavResponsive from './NavResponsive'
import NavContainer from './NavContainer'


export default async function Navbar() {
  const data = await fetchProducts()
  
  

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
          <div className={style.cartDiv}>
            <Cart />
          </div>
      </div>
    </NavContainer>
  )
}
