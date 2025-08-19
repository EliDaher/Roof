
export default function ScreenWrapper({ children }: any) {
    return ( 
        <div className="min-h-screen max-h-screen h-screen overflow-scroll  bg-gradient-to-t to-[#09121E] from-[#11233B] animate-fade-in text-white">
          {children}
        </div>
    );
}