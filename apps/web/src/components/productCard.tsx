import React from 'react'
import Image from 'next/image'
import products from '@/type/product'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from '@/lib/utils'

  const ProductCard = () => {
  return (
    <div className='flex  flex-col justify-between h-full lg:py-20'>
    <div>
        <h1 className='font-semibold text-[40px] leading-[44px]'>Top Selling Products</h1>
    </div>
    <div className='flex justify-between'>
    <div className='flex flex-col gap-4 items-start'>
    <Card className='gap-x-4 border-none'>  
    <Image src={'/images/header.png'} 
    height={1000} 
    width={604} 
    alt='header'
    className='h-[530px] w-[550px] object-cover
 gap-x-6 w-[604px]'
    />
  <CardHeader className='w-72 h-28 rounded-lg'>
    <CardTitle>Smart Watch</CardTitle>
    <CardDescription>A smart watch with various health tracking features.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className='font-medium text-xl leading-8'>$299.99</p>
  </CardContent>
</Card>
    </div>
    <div className='grid  gap-6 lg:grid-cols-2'>
    {products.map(product => (
<Card 
    key={product.id}
    className='border-none'
    >  
    <Image src={product.imageUrl} 
    height={172} 
    width={307} 
    alt={product.name}
    />
  <CardHeader className='w-72 h-28 rounded-lg'>
    <CardTitle>{product.name}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p className='font-medium text-xl leading-8'>{product.price}</p>
  </CardContent>
</Card>
    ))}
    </div>
    </div>
    </div>
  )
}

export default ProductCard