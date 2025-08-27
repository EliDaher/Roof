
export default function ScreenWrapper({ children, className }: any) {
    return ( 
        <div className={`px-4 py-2 min-h-screen max-h-screen h-screen overflow-y-scroll  bg-gradient-to-t to-[#09121E] from-[#11233B] animate-fade-in text-white ${className}`}>
          {children}
        </div>
    );
}