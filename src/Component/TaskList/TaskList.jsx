import React from 'react'
import AccaptTask from './AccaptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id='taskList' className='flex flex-nowrap overflow-x-auto items-center justify-start gap-5 h-[55%] py-5 w-full mt-10'>
          {data.tasks.map((elem ,idx)=>{
            if(elem.active){
              return <AccaptTask key={idx}/>
            }
            if(elem.newTask){
              return <NewTask key={idx} />
            }
            if(elem.completed){
              return <CompleteTask key={idx}/>
            }
            if(elem.failed){
              return <FailedTask key={idx}/>
            }

          })}

        

        

        

        
      
    </div>
  )
}

export default TaskList
