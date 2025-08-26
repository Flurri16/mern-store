import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const email = 'mail'
  const isAuth = true
  const changeModal = () => {

    const result = window.confirm('lkskdf?')
    if (result) {

    } else {

    }
  }
  return (
    <div>
      <div className="flex justify-between items-center relative mx-5">
        <Link to={`/`} className='text-4xl font-semibold text-white hover:text-green-300'>Logo</Link>
        <Link to={`/add`} className='text-white hover:text-green-300 text-xl font-semibold'>Admin</Link>
        <div className="flex items-center mt-2 gap-2">
          {
            isAuth ? <div className="flex"><img src="./cart.png" className='w-8' alt="" />
              <h1 className='text-white text-xl'> (1)</h1>
            </div> : null
          }
          {
            isAuth ? <button className='bg-red-500 px-4 py-2 text-3xl text-white rounded hover:opacity-60' onClick={changeModal}>Logout</button> : <button className='bg-green-500 px-4 py-2 text-3xl text-white rounded hover:opacity-60'>Login</button>
          }
        </div>
      </div>
    </div>
  )
}
