import React from 'react'

export default function Item() {
  return (
    <div>
        <div className="bg-slate-200 bg-opacity-30 rounded max-w-[300px] p-4 hover:scale-105">
            <img src="./mern.png" alt="img" className='w-full flex mx-auto'/>
            <h1 className='text-white text-2xl font-semibold pt-2'>Some title</h1>
            <button className='px-3 py-1 bg-blue-500 text-white text-xl font-semibold mt-4'>To cart</button>
        </div>

    </div>
  )
}
