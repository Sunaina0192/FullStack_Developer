import React from 'react'

const RightPara = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-10 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
        <div>
            <p className='text-lg text-white leading-relaxed mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto quisquam impedit similique ut quod!</p>
        <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='  font-semibold rounded-full py-2 px-7 mt-5'>{props.tag}</button>
            <button style={{backgroundColor:props.color}}  className=' font-semibold rounded-full px-4 mt-5'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
   </div>
  )
}

export default RightPara
