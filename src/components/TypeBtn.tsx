type TypeBtnProps = {
  text: string
  selected: string
  onSelect: (value: string) => void
}

export default function TypeBtn({ text, selected, onSelect }: TypeBtnProps) {
  const isActive = selected === text

  return (
    <div
      className={`rounded-lg cursor-pointer transition-colors duration-300
      px-2 py-1 border-2 border-[#FAD29E50] shadow-md
      ${isActive ? "bg-[#FAD29E90]" : "bg-[#09121E95]"}`}
      onClick={() => onSelect(text)}
    >
      <h2 className="text-lg px-1 py-0.5 font-Tinos text-white w-max">{text}</h2>
    </div>
  )
}
