import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import MenuBtn from '../components/MenuBtn'
import MenuCoffee from '../assets/MenuCoffee.png'
import ShiSha from '../assets/Shisha.png'
import Sandwich from '../assets/Sandwich.png'
import Dessert from '../assets/Dessert.png'
import Nuts from '../assets/Nuts.png'
import ColdDrinks from '../assets/ColdDrinks.png'
import TypeBtn from '../components/TypeBtn'
import Footer from '@/components/Footer'

const types = [
    {icon: MenuCoffee, text: 'Hot Drinks'},
    {icon: ColdDrinks, text: 'Cold Drinks'},
    {icon: ShiSha, text: 'Shisha'},
    {icon: Nuts, text: 'Nuts & Chips'},
    {icon: Dessert, text: 'Dessert & Sweets'},
    {icon: Sandwich, text: 'Sandwiches & Snacks'},
    
];



export default function Menu() {
    return (
        <ScreenWrapper>
            <MenuBtn/>
            <h1 className='fixed w-full font-italianno text-5xl text-center pt-5 z-20'>MENU</h1>
            <div className='min-h-screen w-16 bg-white opacity-10 fixed top-0 left-0 z-10'></div>

            <div className='mt-20 max-h-[calc(98vh-4rem)] overflow-y-auto'>
                <div className='flex flex-col gap-5 pb-10'>
                    {types.map((type, idx) => (
                        <TypeBtn key={idx} icon={type.icon} text={type.text} />
                    ))}
                </div>
            </div>
              
            <Footer/>
        </ScreenWrapper>

    )
}
