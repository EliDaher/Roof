import React from 'react'
import MenuBtn from './MenuBtn'
import { ArrowLeft, Coffee } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function TopBar({ header = "MENU" }) {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between items-center fixed top-3 w-full px-2 z-50">
      <ArrowLeft
        onClick={() => navigate(-1)}
        stroke="#FAD29E"
        className="bg-[#FAD29E50] p-2 rounded-xl border w-12 h-12
        border-[#FAD29E] hover:bg-[#FAD29E90] cursor-pointer"
      />

      <h1 className="font-italianno text-5xl leading-none">
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
