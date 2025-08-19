import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import MenuBtn from '../components/MenuBtn'
import MenuCoffee from '../assets/MenuCoffee.png'
import TypeBtn from '../components/TypeBtn'

const types = [
    {icon: MenuCoffee, text: 'Hot Drinks'}
];



export default function Menu() {
    return (
        <ScreenWrapper>
            <MenuBtn/>
            <h1 className='fixed w-full font-italianno text-6xl text-center pt-4 z-20'>MENU</h1>

            <div className='mt-24 max-h-[calc(98vh-4rem)] overflow-y-auto'>
                <div className='flex flex-col gap-10'>
                    {types.map((type, idx) => (
                        <TypeBtn key={idx} icon={type.icon} text={type.text} />
                    ))}
                </div>
            </div>
              
            <div className='min-h-screen w-20 bg-white fixed top-0 left-0 z-10'></div>
        </ScreenWrapper>

    )
}
