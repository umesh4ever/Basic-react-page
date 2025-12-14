import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {

  return (
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 text-2xl font-semibold flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-2xs text-lg text-white leading-relaxed mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe sapiente doloremque exercitationem in alias.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-6 py-2 rounded-full '>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full '><ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
