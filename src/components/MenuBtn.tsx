import React from 'react'

export default function MenuBtn() {
  return (
    <div className='flex bg-[#FAD29E50] p-2 py-3.5 
      rounded-xl flex-col gap-1.5 
      justify-center items-start
      border border-[#FAD29E] hover:bg-[#FAD29E90]'
    >
      <div className='h-0.5 w-8 bg-[#FAD29E] rounded-full'></div>
      <div className='h-0.5 w-4 bg-[#FAD29E] rounded-full'></div>
      <div className='h-0.5 w-6 bg-[#FAD29E] rounded-full'></div>
    </div>
  )
}
