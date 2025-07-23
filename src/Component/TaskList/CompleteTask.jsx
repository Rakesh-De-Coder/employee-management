import React from 'react'

const CompleteTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
                 <div className='flex justify-between items-center'>
                  <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
                  <h4 className='text-sm'>20 feb 2024</h4>
                  
                 </div>
                 <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                  <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut dolore placeat qui quo rerum.l</p>
                  <div className="mt-2">
                    <button className='bg-green-500 rounded text-sm py-1 px-2 w-full'>completed</button>
                  </div>
        </div>
  )
}

export default CompleteTask
