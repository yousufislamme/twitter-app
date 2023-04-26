import React, { useState } from 'react'
import { BsCardImage, BsFiletypeGif, BsEmojiSmile } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiPoll } from "react-icons/bi";
import Button from '../components/Button'

const TweetBox = () => {

  const [input, setInput] = useState('');


  return (
     <>
      <div className='flex mt-2'>
            <div className='flex'>
              <img className='w-[45px] h-[45px] object-cover rounded-full' src="https://pbs.twimg.com/profile_images/1401075216042708994/LyIiDkL1_400x400.jpg" alt="Profile pic" />
            </div>
            <div className='flex flex-col justify-center w-full'>
              <form className='ml-4 mt-4'>
                <input type="text" onChange={(e)=> setInput(e.target.value)} value={input} placeholder="What's happing" className='outline-none' />
                <hr className='mt-10' />

                 <div className="flex items-center justify-between pr-5 mt-1">
                    <div className='flex items-center space-x-4 text-sky-500'>
                  <BsCardImage className='hover:scale-125 duration-150 ease-in cursor-pointer'/>
                  <BsFiletypeGif  className='hover:scale-125 duration-150 ease-in cursor-pointer'/>
                  <BiPoll className='hover:scale-125 duration-150 ease-in cursor-pointer' />
                  <BsEmojiSmile className='hover:scale-125 duration-150 ease-in cursor-pointer' />
                  <FaMapMarkerAlt className='hover:scale-125 duration-150 ease-in cursor-pointer'/>
                </div>
                <div className='flex '>
                  <Button className='mt-10' value="Tweet"/>
                </div>
                </div>
             </form>
            </div>

          </div>  
    </>
  )
}

export default TweetBox;