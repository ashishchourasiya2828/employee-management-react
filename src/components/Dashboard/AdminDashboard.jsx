import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../Tasklist/AllTask'

const AdminDashboard = ({setuser}) => {
  return (
    <div id='admin' className='bg-[#1c1c1c] px-6 py-2 h-screen' >
        <Header setuser={setuser} />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard