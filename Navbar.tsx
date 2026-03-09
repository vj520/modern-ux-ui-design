import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function Navbar({ scrolled }: { scrolled: boolean }) {

    
    const [mobileMenuIsOpen,setMobileMenuIsOpen] = useState(false);
    return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/20 backdrop-blur-sm" 
        :"bg-slate-950/20 backdrop-blur-sm"}`}>
            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1 ">
                    <img src="/images/sea.jpg" className="w-6 h-6" alt="GrowMore"/>
                    <span>
                        <span className="text-base text-green-500">Grow</span>
                        <span className="text-base text-white">More</span>
                    </span>
                </div>
                <div className="space-x-3 hidden md:flex items-center lg-space-x-4">
                    <a className="hover:text-gray-300 transition duration-200 text-sm md:text-base cursor-pointer" href="#">Features</a>
                    <a className="hover:text-gray-300 transition duration-300 text-sm md:text-base cursor-pointer" href="#">Pricing</a>
                    <a className="hover:text-gray-300 transition duration-300 text-sm md:text-base cursor-pointer"href="#">Testimonials</a>
                </div>
                <button className="md:hidden p-2 text-gray hover:text-white"
                onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                >
                    {mobileMenuIsOpen ? (
                        <X className="w-5 h-5 sm:h-6" />
                    ):(
                    <Menu className="w-5 h-5 sm:h-6"/>
                    )}
                </button>
            </div>
        </div>
        {mobileMenuIsOpen && <div className="md:hidden bg-slate-900/95 border-t border-slate-800 backdrop-blur-lg  ">
            <div className="px-4 py-4 sm:space-y-3 sm:space-y-4">
                <a className=" block text-gray300 hover:text-gray-300 transition duration-200 text-sm md:text-base cursor-pointer"
                onClick={() => setMobileMenuIsOpen(false)} href="#">Features</a>
                    <a onClick={() => setMobileMenuIsOpen(false)}  
                    className="block hover:text-gray-300 transition duration-300 text-sm md:text-base cursor-pointer" href="#">Pricing</a>
                    <a onClick={() => setMobileMenuIsOpen(false)} 
                    className="block hover:text-gray-300 transition duration-300 text-sm md:text-base cursor-pointer"href="#">Testimonials</a>
            </div>
            </div>}
    </nav>;
}
