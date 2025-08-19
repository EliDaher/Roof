import React from 'react'

type typeBtnProps = {
    icon: any,
    text: string
} 

export default function TypeBtn({icon, text}: typeBtnProps) {
  return (
    <div className='rounded-full bg-[#09121E95] z-20 ml-10 mr-2 flex items-center gap-5 p-3'>
        <img className='size-[65px]' src={icon} alt="" />
        <h2 className='text-4xl font-Tinos'>{text}</h2>
    </div>
  )
}
