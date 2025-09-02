import { useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import TypeBtn from '../components/TypeBtn'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import coffeeCup from '../assets/coffeeCup2.png'
import IcedLatte from '../assets/IcedLatte.jpeg'
import FoodCard from '@/components/FoodCard'
import { Cake, CakeSlice, Coffee, Sandwich } from 'lucide-react'

export default function Menu() {
  const [selected, setSelected] = useState("All")
  const [menuItems, setMenuItems] = useState([])

  const buttons = [
    { text: 'All' },
    { text: 'Hot Drinks' },
    { text: 'Cold Drinks' },
    { text: 'Shisha' },
    { text: 'Nuts & Chips' },
    { text: 'Dessert & Sweets' },
    { text: 'Sandwiches & Snacks' },
  ]

  useEffect(() => {
    setMenuItems([
      {
        name: 'Black Coffee',
        price: 25000,
        img: coffeeCup,
        class: 'Hot Drinks'
      },
      {
        name: 'Iced Latte',
        price: 30000,
        img: IcedLatte,
        class: 'Cold Drinks'
      },
    ])
  }, [])

  const filteredItems = selected === "All"
    ? menuItems
    : menuItems.filter(item => item.class === selected)

  return (
    <ScreenWrapper className="flex flex-col h-screen">
  
      {/* Top Section - ثابت */}
      <div className="sticky top-0 z-20 border-b-2 border-white/20 shadow-xl pb-4">
        <TopBar header={'MENU'} />
    
        <h1 className="text-5xl font-Tinos mb-6 mt-20">
          Order now and <br /> savor your <br /> favorites
        </h1>

        <Coffee className='absolute animate-pulse top-24 stroke-[#FFFFFF10] right-14 size-12 animation-delay-600 -rotate-45'/>
        <Sandwich className='absolute animate-pulse top-44 stroke-[#FFFFFF10] right-28 size-12'/>
        <CakeSlice className='absolute animate-pulse top-40 stroke-[#FFFFFF10] right-8 size-12 animation-delay-300'/>
    
        <div className="flex gap-3 overflow-x-auto hide-scrollbar px-1">
          {buttons.map((type, idx) => (
            <TypeBtn
              selected={selected}
              onSelect={setSelected}
              key={idx}
              text={type.text}
            />
          ))}
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-2 hide-scrollbar mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6">
          {[...filteredItems,...filteredItems,...filteredItems,...filteredItems,...filteredItems].map((item, idx) => (
            <FoodCard key={idx} item={item} />
          ))}
        </div>
      </div>
      
      {/* Footer - ثابت */}
      <Footer />
    </ScreenWrapper>

  )
}
