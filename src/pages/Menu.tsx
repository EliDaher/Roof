import { useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import TypeBtn from '../components/TypeBtn'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import coffeeCup from '../assets/coffeeCup2.png'
import IcedLatte from '../assets/IcedLatte.jpeg'
import FoodCard from '@/components/FoodCard'

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
    <ScreenWrapper className={'pt-20'}>
      <TopBar header={'MENU'} />

      <h1 className='text-5xl font-Tinos mb-6'>
        Order now and savor your favorites
      </h1>

      <div className='flex gap-3 overflow-x-scroll hide-scrollbar'>
        {buttons.map((type, idx) => (
          <TypeBtn
            selected={selected}
            onSelect={setSelected}
            key={idx}
            text={type.text}
          />
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-6'>
        {[...filteredItems,...filteredItems,...filteredItems,...filteredItems].map((item, idx) => (
          <FoodCard key={idx} item={item} />
        ))}
      </div>

      <Footer />
    </ScreenWrapper>
  )
}
