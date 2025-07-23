import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
                <form className='flex flex-wrap items-start w-full  justify-between' >

                    <div className='w-1/2'>

                        <div >
                            <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                            <input type="text" placeholder='UI Design' className='text-sm py-1 rounded px-3 w-4/5 outline-none bg-transparent border-gray-400 border-[1px] mb-4' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input className='text-sm py-1 rounded px-3 w-4/5 outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="date" name="" id="" />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assigned to</h3>
                            <input className='text-sm py-1 rounded px-3 w-4/5 outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="text" placeholder='Employee name' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Catogery</h3>
                            <input className='text-sm py-1 rounded px-3 w-4/5 outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="text" placeholder='Design Dev etc.' />
                        </div>

                    </div>


                    <div className='w-1/2'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4' name="" id="" cols="30" rows="10"></textarea>
                        <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>



                    
                </form>
            </div>
  )
}

export default CreateTask
