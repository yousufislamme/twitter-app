import React, { useEffect, useState } from 'react'
import TweetBox from '../TweetBox';
import Link from 'next/link';

const Feed = () => {


  return (
     <div className='container  px-5 mx-auto '>
      <div className='w-full py-5 flex '>
        <h1 className='font-semibold'>
          <Link href='/'>
            Home
        </Link></h1>
        <hr />
      </div>
      <div className='flex gap-5'>
        
    
        <div className='w-full h-screen border-r-[1px] border-gray-300'>
          <TweetBox/>


        </div>
        <div className='bg-orange-400 hidden md:block md:min-w-[220px] lg:min-w-[350px]'>
          Tender
        </div>
      </div>
        
    </div>
  )
}

export default Feed;