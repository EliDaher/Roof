import React from 'react'
import MenuBtn from './MenuBtn'
import coffeeCup from '../assets/coffeeCup.png'
import { Coffee } from "lucide-react";


export default function TopBar({header}) {
  return (
    <div className='flex justify-between items-center fixed top-3 w-full pr-4'>
        <MenuBtn/>

        <h1 className='font-italianno text-5xl h-8'>MENU</h1>

        <div className='w-14 mr-2'>
            <Coffee 
                stroke='#FAD29E' 
                className='bg-[#FAD29E50] p-2 
                rounded-xl border w-12 h-12
                border-[#FAD29E] hover:bg-[#FAD29E90]'
            />
        </div>
    </div>
  )
}
