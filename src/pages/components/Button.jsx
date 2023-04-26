import React from 'react'

function Button(props) {
  return (
     <>
        <button className='px-5 py-1 bg-sky-400 rounded-full font-bold text-white shadow-md hover:bg-sky-500'>{props.value}</button>  
    </>
  )
}

export default Button