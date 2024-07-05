import React from 'react'
import hero from '../../public/images/hero.jpg'
import Image from 'next/image'
import {Input } from './ui/input'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const HeroBanner = () => {
  return (
<section className=' px-4 sm:px-6 lg:px-8'>
    <div
      className="absolute inset-0 mx-auto max-w-screen-xl lg:mx-16 px-4 sm:px-6 lg:px-8 h-[88vh] mt-20 bg-black/45"
    >
  <div className='relative w-full -z-20 bg-black/30'>
    <Image src={hero} 
    alt='macbook accessories'
    className='h-[88vh] object-cover w-full'
    />
  </div>
    </div>

  <div
    className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8"
  >
    <div className="max-w-4xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        shop title
      </h1>

      <p className="mt-4 max-w-6xl text-white sm:text-xl/relaxed">
      Discover innovative tech gadgets at unbeatable prices for everyday use.
      </p>

      <div className="flex w-full justify-center items-center">
      <Input type="search" 
      placeholder="Search products, brands and categories" 
      className='border border-white rounded-[8px] h-10 w-[501px] placeholder:flex items-center bg-white placeholder:h-10 w-[501px]' />
      <Button 
      type="submit"
      className={cn('bg-black rounded-[8px] text-white')}
      >Search</Button>
    </div>
    </div>
  </div>
</section>
  )
}

export default HeroBanner