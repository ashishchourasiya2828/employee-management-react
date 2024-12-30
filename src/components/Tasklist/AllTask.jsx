import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setuserData] = useContext(AuthContext)
    // console.log(authdata.employee);
    
  return (
    <>
    <h2 className='text-xl font-medium text-white mt-2 ml-1 ' >All task</h2>
    <div  className='bg-zinc-800 w-full  h-48 rounded-md  p-3 ' >
    <div className='w-full bg-emerald-400 flex itmes-center justify-between py-2 px-6 mb-1 rounded-md text-white font-semibold ' >
            <h1 className='w-1/5 ' >Employee Name</h1>
            <h2 className='w-1/5 ' >New Task</h2>
            <h2 className='w-1/5 ' >Active Task</h2>
            <h2 className='w-1/5 ' >Completed</h2>
            <h2 className='w-1/5 ' >Failed</h2>
        </div>
        <div id='tasklist' className='h-[80%] overflow-auto' >
        {userData.map((elem,idx)=>{
            return  <div key={idx} className='w-full border-2 border-emerald-400 flex itmes-center justify-between py-2 px-6 mb-1 rounded-md text-white font-semibold ' >
            <h1 className='w-1/5 ' >{elem.firstName}</h1>
            <h2 className='w-1/5 text-blue-500 pl-6 ' >{elem.taskCounts.newTask}</h2>
            <h2 className='w-1/5 text-yellow-400 pl-8 ' >{elem.taskCounts.active}</h2>
            <h2 className='w-1/5 text-green-400 pl-8 ' >{elem.taskCounts.completed}</h2>
            <h2 className='w-1/5  pl-5 text-red-600 ' >{elem.taskCounts.failed}</h2>
        </div>
        })}
        </div>
       
      
    </div>
    </>
  )
}

export default AllTask