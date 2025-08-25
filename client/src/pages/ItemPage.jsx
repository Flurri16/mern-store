import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ItemPage() {
  const navigate = useNavigate()
  const toMain = () => {
    navigate(-1)
  }
  return (
    <div className='max-w-[1600px]'>
      <div className="flex gap-7 bg-slate-500 bg-opacity-40 p-5">
        <div className="w-[40%] relative">
          <img src="./mern.png" alt="img" className='w-full relative' />
          <div className="absolute top-1/2 -left-6 w-12 aspect-square bg-green-500 hover:bg-green-600 rounded-[50%] text-3xl font-bold text-white flex justify-center cursor-pointer">{'<'}</div>
          <div className="absolute top-1/2 -right-6 w-12 aspect-square bg-green-500 hover:bg-green-600 rounded-[50%] text-3xl font-bold text-white flex justify-center cursor-pointer">{'>'}</div>
        </div>
        <div className="w-[60%] ">
          <div className="h-full flex flex-col justify-between ">
            <div className="">
              <h1 className='text-3xl font-semibold text-white mb-3'>Some tiiiiiiiiiitle</h1>
              <p className='text-white'>ferendis repellendus quidem veritatis vero deleniti, similique eveniet odio unde molestiae et sunt iste. Deleniti dolorem ullam obcaecati iste alias nihil asperiores assumenda recusandae! Nihil facere velit molestias inventore, optio possimus ullam consectetur ratione reiciendis sunt quibusdam quia placeat nam perferendis et fugiat cupiditate illo magni!

              </p>
            </div>
            <div className="">
              <h1 className='text-3xl text-yellow-400 font-bold'>13 zł</h1>
              <div className="flex gap-4 pt-5">
                <button className='py-2 px-3 bg-red-500 text-white rounded-sm text-xl hover:bg-opacity-55'>Delete</button>
                <button className='py-2 px-3 bg-slate-500 text-white rounded-sm text-xl hover:bg-opacity-55' onClick={toMain}>To store</button>
                <button className='py-2 px-3 bg-yellow-500 text-white rounded-sm text-xl hover:bg-opacity-55'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
