'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import { Button } from '../ui/button';
interface NavItem{
    href:string;
    label:string;
}

const navlinks:NavItem[] = [
    {label:'home', href:'/'},
    {label:'about us', href:'/about'},
    {label:'product', href:'/product'},
    {label:'contact', href:'/contact'},
    {label:'cart', href:'/cart'},
]

const Header = () => {
    const pathname = usePathname()
  return (
   
<header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Logo />
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navlinks.map(link =>(
            <li key={link.label}>
              <Link href={link.href} 
              className={`${pathname === link.href ? 'text-gray-500/75':'text-black'} font-medium text-xl capitalize transition hover:text-gray-500/75`}>{link.label}</Link>
            </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <div className="hidden sm:flex">
              <Link
                className="rounded-[8px] bg-black  px-[70px] gap-2  py-[14px] text-sm font-medium text-white"
                href={'/sign-up'}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header