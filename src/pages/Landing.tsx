import Divider from '../components/Divider'
import LandingHeader from '../components/LandingHeader'
import Beer from '../assets/Beer.png'
import CoffeeB from '../assets/CoffeeB.png'
import Footer from '../components/Footer'
import ScreenWrapper from '../components/ScreenWrapper'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <ScreenWrapper className="overflow-hidden">
      <div className="flex flex-col h-screen">
        
        {/* Header */}
        <div className="basis-1/4">
          <LandingHeader />
        </div>

        {/* Middle Section */}
        <div className="relative basis-2/4">
          <Divider className="absolute top-0 w-full" />

          <div className="absolute bottom-12 w-full sm:hidden flex rotate-[-2deg] justify-center">
            <img
              src={Beer}
              className="h-[16rem] animate-zoomIn object-cover object-top"
              alt="Beer"
            />
          </div>

          <Divider className="absolute bottom-0 w-full z-50 rotate-[5deg]" />
        </div>

        {/* Button */}
        <div className="basis-1/4 flex justify-center items-center">
          <button
            className="relative z-50 bg-[#FBDDB6] w-2/4 h-12 py-1 rounded-full 
            font-Tinos text-3xl font-bold text-[#954004]
            shadow-lg shadow-[#FAD29E50] hover:shadow-[#954004] hover:shadow-md
            overflow-hidden animate-bounceIn transition-all duration-1000 group"
            onClick={() => {
              setTimeout(() => navigate('/Menu'), 650)
            }}
          >
            MENU

            {/* Coffee beans decoration */}
            <img
              src={CoffeeB}
              alt=""
              className="absolute -top-3 -right-28 z-10 transition-all duration-700 group-hover:-right-14 group-hover:scale-125"
            />
            <img
              src={CoffeeB}
              alt=""
              className="absolute -top-1 -left-28 rotate-180 z-10 transition-all duration-700 group-hover:-left-14 group-hover:scale-125"
            />
          </button>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </ScreenWrapper>
  )
}
