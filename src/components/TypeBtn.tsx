type typeBtnProps = {
    icon: any,
    text: string
} 

export default function TypeBtn({icon, text}: typeBtnProps) {
  return (
    <div className='rounded-full bg-[#09121E95] z-20 mx-5
      flex items-center gap-3 p-2 border-2 border-white/20'
    >
      <img className='size-[40px] ml-2 my-1' src={icon} alt="" />
      <h2 className='text-xl font-Tinos'>{text}</h2>
    </div>
  )
}
