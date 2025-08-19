import Divider from '../components/Divider'
import LandingHeader from '../components/LandingHeader'
import Beer from '../assets/Beer.png'
import Fumaa from '../assets/Fumaa.gif'
import CoffeeB from '../assets/CoffeeB.png'
import Footer from '../components/Footer'
import ScreenWrapper from '../components/ScreenWrapper'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

  const navigate = useNavigate()

  return (
    <ScreenWrapper>
      <div 
          className='flex flex-col gap-2 h-screen'
      >
        <div className='mt-2 mb-5 basis-1/3'>
          <LandingHeader/>
        </div>
    
        <div className='flex flex-col basis-1/3 mt-4'>
    
          <Divider className='w-full basis-1/6 mb-2'/>
    
          <div className='w-full basis-4/6 sm:hidden flex rotate-[-2deg] justify-center'>
            <img src={Beer} className='h-[16rem] animate-zoomIn object-cover object-top' alt="" />
          </div>
    
          <Divider className='basis-1/6 -mt-8 z-50 rotate-[5deg]'/>
      
        </div>      
    
    
        <div className='basis-1/3 flex justify-center items-center mb-5'>
    
          <button className='z-50 bg-[#FBDDB6] w-3/4 h-12 py-1 rounded-full 
            mx-auto font-Tinos hover:child:(1):scale-150 group hover:shadow-[#954004] hover:shadow-md
            text-4xl font-bold text-[#954004] shadow-lg shadow-[#FAD29E50]
            overflow-hidden animate-bounceIn hover-animate-glow transition-all duration-1000'
            onClick={()=>{
              setTimeout(() => navigate('/Menu'), 650)   
            }}
          >
            MENU
            <img src={CoffeeB} alt="" className='absolute -mt-20 ml-40 z-10 group-hover:ml-5 group-:scale-[15] transition-all duration-1000'/>
            <img src={CoffeeB} alt="" className='-mt-20 -ml-36 z-10 rotate-180 group-hover:ml-0 group-hoverscale-[15] transition-all duration-1000'/>
          </button>
        </div>
          
        <Footer/>
          
      </div>
    </ScreenWrapper>
  )
}
