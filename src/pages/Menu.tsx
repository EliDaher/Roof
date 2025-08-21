import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import MenuBtn from '../components/MenuBtn'
import MenuCoffee from '../assets/MenuCoffee.png'
import ColdDrinks from '../assets/ColdDrinks.png'
import TypeBtn from '../components/TypeBtn'
import Plasma from '@/components/Plasma'

const types = [
    {icon: MenuCoffee, text: 'Hot Drinks'},
    {icon: ColdDrinks, text: 'Cold Drinks'}
];



export default function Menu() {
    return (
        <ScreenWrapper>
            <div className='absolute bottom-0 h-full w-full'>
                <Plasma 
                  color="#11233B"
                  speed={0.6}
                  direction="forward"
                  scale={0.9}
                  opacity={0.6}
                  mouseInteractive={true}
                />
            </div>
            <MenuBtn/>
            <h1 className='fixed w-full font-italianno text-5xl text-center pt-5 z-20'>MENU</h1>
            <div className='min-h-screen w-16 bg-white opacity-10 fixed top-0 left-0 z-10'></div>

            <div className='mt-28 max-h-[calc(98vh-4rem)] overflow-y-auto'>
                <div className='flex flex-col gap-5'>
                    {types.map((type, idx) => (
                        <TypeBtn key={idx} icon={type.icon} text={type.text} />
                    ))}
                </div>
            </div>
              
        </ScreenWrapper>

    )
}
