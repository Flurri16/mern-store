import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <div className="mx-auto flex flex-1 px-5">
          {children}
        </div>
        <Footer></Footer>
    </div>
  )
}
