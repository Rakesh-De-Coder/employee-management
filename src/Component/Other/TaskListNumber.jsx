import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 w-screen justify-between gap-5'>
        


        <div className='rounded-xl px-9 py-6 w-[20%] bg-blue-400'>
        <h2 className='text-2xl font-semibold'>{data.taskStats.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>


        <div className='rounded-xl px-9 py-6 w-[20%] bg-green-400'>
        <h2 className='text-2xl font-semibold'>{data.taskStats.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
        </div>


        <div className='rounded-xl px-9 py-6 w-[20%] bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>{data.taskStats.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
        </div>

        <div className='rounded-xl px-9 py-6 w-[20%] bg-red-400'>
        <h2 className='text-2xl font-semibold'>{data.taskStats.failed}</h2>
        <h3 className='text-xl font-medium'>Failed 🤷‍♂️</h3>
        </div>

        <div className='rounded-xl px-9 py-6 w-[20%] bg-violet-700'>
        <h2 className='text-2xl font-semibold'>{data.taskStats.total}</h2>
        <h3 className='text-xl font-medium'>Total</h3>
        </div>
        
      
    </div>
  )
}

export default TaskListNumber
