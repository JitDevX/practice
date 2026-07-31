import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FiSearch, FiClock, FiBell, FiMenu, FiMonitor, FiPrinter, FiGlobe } from 'react-icons/fi';


export default function test2() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
  return (
    <div className='min-h-screen w-full bg-black text-white font-sans'>

        {/* top navbar  */}
      <div className='w-full h-14 bg-green-400 flex items-center justify-between px-4'>
        <div className='bg-green-900 text-gray-300 font-bold px-3 py-2 rounded-2xl flex items-center gap-2 cursor-pointer'>
            <span>Discover Anything</span> 
            <FaSearch className="w-3 h-3" />

        </div>

        <div className='text-green-900 font-bold text-2xl flex items-center gap-2 cursor-pointer'>
            <span>HACKERNOON</span>
        </div>
        <div className='flex items-center gap-2 text-sm'>
            <button className='bg-green-900 hover:bg-green-950 text-white px-4 py-2 rounded-2xl'>Login</button>
            <button className='bg-green-900 hover:bg-green-950 text-white px-4 py-2 rounded-2xl'>SignUp</button>
            <button className='bg-green-900 hover:bg-green-950 text-white px-4 py-2 rounded-2xl'>Write</button>
            <button className='text-green-900 ml-2 hover:text-green-950'>
                <FiBell className="w-5 h-5" />
            </button>
            <button className='text-green-900 ml-2 hover:text-green-950'
            onClick={() => setIsSidebarOpen(true)}>
                <FiMenu className="w-6 h-6" />
            </button>
        </div>
      </div>

      {/* sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div 
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#0a251a] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      ></div>
      

      {/* secound navbar in main page */}
      <div className='w-full bg-[#37a16b] text-white flex items-center justify-center gap-8 py-3 text-xl '>
        <span className='hover:underline cursor-pointer'> Read </span>
        <span className='hover:underline cursor-pointer'> Top Blogs </span>
        <span className='hover:underline cursor-pointer'> Write Now </span>
        <span className='hover:underline cursor-pointer'> Bussiness Blogging </span>
        <span className='hover:underline cursor-pointer'> Hackathnos </span>
        <span className='hover:underline cursor-pointer'> About </span>
        <span className='hover:underline cursor-pointer'> More  + </span>

      </div>

      <div className='w-full bg-[#116339] text-white flex items-center justify-center gap-100 py-3 px-4  '>

        <div className='text-left'>
           <p className='text-[15px] font-medium'> Stop Phishing with FIDO2 MFA</p>
           <p className='text-[13px] text-gray-200'>by Yubico</p>
        </div>
        <button className='border px-5 py-4 font-bold rounded-2xl  '> Learn More</button>

      </div>




    </div>
  )
}
