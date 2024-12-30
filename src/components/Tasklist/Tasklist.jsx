import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className=' h-[55vh] w-full  p-5 flex items-center  overflow-x-auto justify-start gap-5 mt-10 rounded-md' >

         {data.tasks.map((elem,idx)=>{

            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }

         })}   
       
       
       
       
       
    </div>
  )
}

export default Tasklist