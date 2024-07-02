import React from 'react'
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const Provider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Header />
    {children}
      <Footer />
    </div>
  )
}

export default Provider