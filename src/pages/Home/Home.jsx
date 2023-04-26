import React from 'react'
import Header from './Header/Header';
import Feed from './Feed/Feed';


    

const AppHome = () => {
	
  return (
     <>
        <div className='flex'>
              <div className='w-[240px]'>
                 <Header/>                 
              </div>
        
        
          <Feed/>
  
              
        
      </div>
    </>
  )
}

export default AppHome;