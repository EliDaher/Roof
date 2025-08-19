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
          className='flex flex-col'
      >
        <div className='mt-4 mb-5 basis-1/3'>
          <LandingHeader/>
        </div>
    
        <div className='flex flex-col basis-1/3 mt-5'>
    
          <Divider className='w-full mt-5 basis-1/6'/>
    
          <div className='w-full basis-4/6 sm:hidden overflow-hidden'>
            <img src={Beer} className='w-full -mt-24 h-[22rem] animate-zoomIn object-cover object-top' alt="" />
          </div>
    
          <Divider className='basis-1/6 -mt-10 z-50 rotate-[5deg]'/>
      
        </div>      
    
    
        <div className='basis-1/3 flex justify-center items-center pb-10 mt-16'>
    
          <button className='z-50 bg-[#FBDDB6] w-3/4 h-12 py-1 rounded-full 
            mx-auto font-Tinos hover:child:(1):scale-150 group hover:shadow-[#954004] hover:shadow-md
            text-4xl font-bold text-[#954004] shadow-lg shadow-[#FAD29E50] mt-10
            overflow-hidden animate-bounceIn hover-animate-glow transition-all duration-1000'
            onClick={()=>{
              setTimeout(() => navigate('/Menu'), 650)   
            }}
          >
            MENU
            <img src={CoffeeB} alt="" className='h-96 absolute -mt-24 ml-28 z-10 group-hover:ml-5 group-:scale-[15] transition-all duration-1000'/>
            <img src={CoffeeB} alt="" className='h-96  -mt-24 -ml-20 z-10 rotate-180 group-hover:ml-0 group-hoverscale-[15] transition-all duration-1000'/>
          </button>
        </div>
          
        <Footer/>
          
      </div>
    </ScreenWrapper>
  )
}
