import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='tasklistnumber flex justify-between  gap-4 mt-10 ' >
        <div className='px-9 py-6 rounded-xl  w-[45%] bg-blue-400 ' >
        <h2 className='text-2xl font-bold'  >{data.taskCounts.newTask}</h2>
        <h3 className='text-lg font-medium' >New Task</h3>

        </div>
       <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400 ' >
        <h2 className='text-2xl font-bold'  >{data.taskCounts.completed}</h2>
        <h3 className='text-lg font-medium' >completed Task</h3>

        </div>
       <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400 ' >
        <h2 className='text-2xl font-bold'  >{data.taskCounts.active}</h2>
        <h3 className='text-lg font-medium' >Accepted Task</h3>
        </div>
       <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400 ' >
        <h2 className='text-2xl font-bold'  >{data.taskCounts.failed}</h2>
        <h3 className='text-lg font-medium' >Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers