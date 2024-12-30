import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeDashboard = ({data,setuser}) => {
  // console.log(data);
  
  return (
    <div id='employeDashboard' className='  p-10 bg-[#1c1c1c] text-white h-screen' >
            <Header setuser={setuser} data={data} />
            <TaskListNumbers data={data} />
            <Tasklist data={data}/>

    </div>
  )
}

export default EmployeDashboard