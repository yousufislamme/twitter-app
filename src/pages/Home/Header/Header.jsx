import React from 'react'
import appLogo from '../../../img/logo.png'
import Image from 'next/image'
import { BiHomeCircle,BiBell } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";

import Link from 'next/link';


const Header = () => {
  return (
     <> 
        <div className="container px-2 lg:px-5 xl:px-10 mx-auto mt-2 ">
           
       
        <div className='w-[168px] sm:w-[200px] border-r-[1px] border-gary-4000 h-screen'>
              <div>
                 <Link href='/'>
                     <Image className='w-[40px] h-[40px] ml-5' src={appLogo} alt="asdf" />
                 </Link>
           </div>
           <div>
              <ul className='leading-10'>
                  <div className=' gap-3 font-semibold '>
                    <span className='inline-block hover:bg-gray-200 rounded-full hover:duration-300 ease-in-out '>
                       <div className='flex items-center px-5'>
                             <Link className='flex items-center font-medium ' href='/'>
                           <BiHomeCircle className='text-2xl mr-2 ' />
                                Home</Link>
                      </div>
                    </span>
                 </div>
                 <div className=' gap-3 font-semibold '>
                    <span className='inline-block hover:bg-gray-200 rounded-full hover:duration-300 ease-in-out'>
                       <div className='flex items-center px-5'>
                           <FiMessageSquare className='text-2xl' />
                           <Link className='font-medium pl-2' href='/message'>Message</Link>
                      </div>
                    </span>
                 </div>
                 <div className=' gap-3 font-semibold '>
                    <span className='inline-block hover:bg-gray-200 rounded-full hover:duration-300 ease-in-out'>
                       <div className='flex items-center px-5'>
                           <BiBell className='text-2xl' />
                           <Link className='font-medium pl-2' href='/notification'>Notification</Link>
                      </div>
                    </span>
                 </div>
                 <div className=' gap-3 font-semibold '>
                    <span className='inline-block hover:bg-gray-200 rounded-full hover:duration-300 ease-in-out'>
                       <div className='flex items-center px-5'>
                           <HiOutlineUser className='text-2xl' />
                           <Link className='font-medium pl-2' href='/profile'>Profile</Link>
                      </div>
                    </span>
                 </div>
              </ul>
           </div>
        </div>  
         </div>
    </>
  )
}

export default Header;