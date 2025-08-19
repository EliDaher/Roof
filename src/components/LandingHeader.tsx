import coffeeCup from '../assets/coffeeCup.png'

export default function LandingHeader() {
  return (
    <div>
      <h1 className="text-white font-italianno text-6xl ml-4 my-4">
        welcome to
      </h1>

      <div className="flex flex-col justify-center items-center -mt-8">
        <div className="flex items-center justify-center gap-2">
          <h1 className="font-italianno text-[#FAD29E] text-7xl mt-5">
            R
          </h1>
          <img
            src={coffeeCup}
            className="size-[60px] animate-bounceIn delay-200"
            alt="O"
          />
          <h1 className="font-italianno text-[#FAD29E] text-7xl mt-5" >
            O
          </h1>
          <h1 className="font-italianno text-[#FAD29E] text-7xl mt-5">
            F
          </h1>
        </div>

        <h1 className="font-italianno text-7xl text-white/30 -mt-3">
          CAFE
        </h1>
      </div>
    </div>
  )
}
