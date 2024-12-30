import React, { useState } from 'react'

const Header = ({setuser}) => {
  // console.log(data);

  const logoutUser = ()=>{
    localStorage.setItem('loggedInUser',"")
    // window.location.reload();
    setuser("")
    
  }
  
  return (
    <div className='flex items-end justify-between' >
        <h1 className='text-2xl text-white  ' >Hello <br /><span className='text-3xl font-semibold ' >username👋</span></h1>
        <button onClick={logoutUser} className='px-3 py-1 bg-red-600 rounded-md text-white text-lg font-medium ' >Log out</button>
    </div>
  )
}

export default Header