import { useState } from 'react'
import { navItem } from '../../utils/navItem'
import { Link, useLocation } from 'react-router-dom'
import './css/navbar.css'
import { List } from 'phosphor-react'

export default function Navbar() {

  const location = useLocation()

  const isLanding = location.pathname === '/'

  return (
    <header className={`${isLanding ? 'navigation-land' : 'navigation'} px-[2%] md:py-[20px] md:px-[7%] lg:px-[10%]`}>
      <div className="main-nav w-full flex flex-row justify-between items-center">
        <section className="title-list flex flex-row justify-between items-center">
          {!isLanding && <button className='md:hidden cursor-pointer outline-none'><List size={22} weight='fill'/></button>}
          <Link to={isLanding ? '/' : '/home'} className=''>
            <img src="/brand_name.png" alt="Brand Logo" className='brand-name w-[170px] md:w-[220px] h-[100px] object-fill' />
          </Link>
        </section>
        {!isLanding && <nav className="nav-item md:w-[60%] lg:w-[50%]">
          <ul className="nav-item-list w-full h-auto m-0 p-0 flex flex-row justify-between items-center">
            {navItem.map((item, index) => {

              const Icon = item.icon

              return(
              <Link to={item.route} key={index} className='hidden md:block nav-link relative'>
                <li className={`list flex flex-row justify-between items-center gap-[2px] ${location.pathname === item.route ? 'active' : ''}`}>
                  <span className='nav-item-name'>{item.name}</span>
                  <span className='nav-item-icon'><Icon size={20} weight='fill'/></span>
                </li>
              </Link>
            )})}
            <Link to={'/profile'}>
              <div className='w-[45px] h-[45px] rounded-[50%] bg-[#30382f] border-[#4c6f59] border-[2px]'>
                <img src="/logo.ico" alt="profile picture" className='w-full h-full rounded-[50%]' />
              </div>
            </Link>
          </ul>
        </nav>}
        {isLanding && <Link to='/register' className='w-1/4 md:w-max'>
          <button className='text-[20px] font-bold cursor-pointer outline-none uppercase underline'>Login</button>
        </Link>}
      </div>
    </header>
  )
}
