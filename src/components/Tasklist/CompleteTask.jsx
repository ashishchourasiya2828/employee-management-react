import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 bg-blue-400 w-[28vw] p-5 rounded-lg' >
    <div className=' flex items-center justify-between  ' >
        <button className='text-sm font-semibold px-3 py-1  bg-red-600 text-white rounded-lg' >{data.category}</button>
        <h1 className='text-lg font-semibold   ' >{data.taskDate}</h1>
    </div>
    <div className='' >
        <h1 className='text-2xl mt-5 font-semibold ' >{data.taskTitle}</h1>
        <p className='text-lg font-sm mt-2  h-28' >{data.taskDescription}</p>
        <div className='mt-8 ' >
            <button className='w-full bg-green-500 text-white rounded-md px-3 py-2 ' >Completed</button>

        </div>
    </div>
</div>  )
}

export default CompleteTask