import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 bg-red-400 w-[28vw] p-5 rounded-lg' >
    <div className=' flex items-center justify-between  ' >
        <button className='text-sm font-semibold px-3 py-1  bg-red-600 text-white rounded-lg' >{data.category}</button>
        <h1 className='text-lg font-semibold   ' >{data.taskDate}</h1>
    </div>
    <div className='' >
        <h1 className='text-2xl mt-5 font-semibold ' >{data.taskTitle}</h1>
        <p className='text-lg font-sm mt-2 h-28' >{data.taskDescription}</p>
        <div className='flex w-full mt-8  itmes-center justify-between' >
            <button className='px-3 py-2 rounded-md text-white  bg-green-500 ' >Mark as Completed</button>
            <button className='px-3 py-2 rounded-md text-white  bg-red-500 ' >Mark as Failed</button>
        </div>
    </div>
</div>  )
}

export default AcceptTask