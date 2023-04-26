import React from 'react'

const Feed = () => {
  return (
     <div className='container  px-5 mx-auto'>
      <div className='w-full'>
        <h1>Home</h1>
        <hr />
      </div>
      <div className='flex gap-5 bg-blue-200'>
        
    
        <div className='bg-orange-200 w-full'>
          <h2>Feed</h2>
        </div>
        <div className='bg-orange-400 hidden md:block md:min-w-[220px] lg:min-w-[350px]'>
          Tender
        </div>
      </div>
        
    </div>
  )
}

export default Feed;