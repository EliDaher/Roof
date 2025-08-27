import React from 'react'
import { Plus } from "lucide-react";


type item = {
    name: string,
    price: number,
    img: any,
    class: string
}
type FoodCardProp = {
    item: item,
}

export default function FoodCard({item}: FoodCardProp) {
  return (
    <div className='bg-[#1d2844] relative rounded-xl font-Tinos'>
        <div className='p-1'>
            <img src={item.img} alt="" className='mx-auto w-full h-32 rounded-xl' />
        </div>
        
        <h2 className='text-[#FAD29E] font-bold text-xl ml-2 mt-2'>{item.name}</h2>

        <p className='ml-2 my-2'>$ {item.price}</p>

        <button 
            className='absolute bottom-2 right-3 
            bg-[#FAD29E50] rounded-xl border
            border-[#FAD29E] hover:bg-[#FAD29E90]'
        >
            {<Plus />}
        </button>
    </div>
  )
}
