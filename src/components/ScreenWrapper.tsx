export default function ScreenWrapper({ children, className }: any) {
  return (
    <div className={`h-screen bg-gradient-to-t to-[#09121E] from-[#11233B] animate-fade-in text-white ${className}`}>
      {children}
    </div>
  )
}
