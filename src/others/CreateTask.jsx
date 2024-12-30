import React, { useContext, useState } from 'react'
import Login from '../components/Auth/Login'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
      const [userData, setuserData] = useContext(AuthContext)
  
  const [taskTitle, settaskTitle] = useState("")
  const [taskDescription, settaskDescription] = useState("")
  const [taskDate, settaskDate] = useState("")
  const [assignTo, setassignTo] = useState("")
  const [category, setcategory] = useState("")

  const [newtask, setNewtask] = useState({})

  const submitHandler =(e)=>{
    e.preventDefault();
    // console.log(assignTo);
    setNewtask({taskTitle,taskDate,assignTo,taskDescription,category,active:false,completed:false,failed:false,newTask:true})

    const data = userData
      
     data.forEach((elem)=> {

      if(assignTo == elem.firstName){
        elem.tasks.push(newtask)
        elem.taskCounts.newTask = elem.taskCounts.newTask+1
        // console.log(elem.tasks);
      }
     });
     setuserData(data)
    //  console.log(data);
     
     settaskTitle("")
     settaskDate("")
     setassignTo("")
     settaskDescription("")
     setcategory("")
  }



  return (
    <div className='w-full rounded-md  bg-zinc-800 mt-4 ' >
        <div>

        <form id='form' onSubmit={(e)=>{
          submitHandler(e);
        }} className=' flex justify-between text-white ' >
            <div id='form1' className=' w-1/2 p-6' >
            <h3 className='text-xl font-medium text-zinc-300 mb-1 ' >Task title</h3>
            <input value={taskTitle} onChange={(e)=>{
              settaskTitle(e.target.value);
            }} className='px-4 py-2 w-full bg-transparent border-2 border-zinc-500 rounded-md' type="text" placeholder='Make a UI design' />
            <h3 className='text-xl font-medium text-zinc-300 mb-1 mt-3 ' >Date</h3>
            <input value={taskDate} onChange={(e)=>{
              settaskDate(e.target.value);
            }} className='px-4 py-2 w-full bg-transparent border-2 border-zinc-500 rounded-md' type="date" />
            <h3 className='text-xl font-medium text-zinc-300 mb-1 mt-3 ' >Assign to</h3>
            <input value={assignTo} onChange={(e)=>{
              setassignTo(e.target.value);
            }} className='px-4 py-2 w-full bg-transparent border-2 border-zinc-500 rounded-md' type="text" placeholder='employee name' />
            <h3 className='text-xl font-medium text-zinc-300 mb-1 mt-3 ' >Category</h3>
            <input value={category} onChange={(e)=>{
              setcategory(e.target.value);
            }} className='px-4 py-2 w-full bg-transparent border-2 border-zinc-500 rounded-md' type="text" placeholder='design,dev,etc' />
            </div>
            <div id='form2' className='w-1/2 flex flex-col items-end px-10 py-6 ' >
                <div id='form2div' className='w-3/4 ' >
                <h3 className='text-xl font-medium text-zinc-300 mb-1  ' >Description</h3>

                </div>
                <textarea value={taskDescription} onChange={(e)=>{
              settaskDescription(e.target.value);
            }}  className='h-3/4 resize-none w-3/4 rounded-md text-black ' name="" id="textarea"></textarea>
                <div className='mt-4' >
                    <button className='w-full px-[13vw] py-2 text-white rounded-md bg-emerald-400  font-semibold' >Create Task</button>
                </div>
            </div>
        </form>


        </div>

    </div>
  )
}

export default CreateTask