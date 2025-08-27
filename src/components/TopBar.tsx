import React from 'react'
import MenuBtn from './MenuBtn'
import { Coffee } from "lucide-react";

export default function TopBar({ header = "MENU" }) {
  return (
    <div className="flex justify-between items-center fixed top-3 w-full px-2 z-50">
      <MenuBtn />

      <h1 className="font-italianno text-5xl text-[#FAD29E] leading-none">
        {header}
      </h1>

      <Coffee
        stroke="#FAD29E"
        className="bg-[#FAD29E50] p-2 rounded-xl border w-12 h-12
        border-[#FAD29E] hover:bg-[#FAD29E90] cursor-pointer"
      />
    </div>
  )
}
