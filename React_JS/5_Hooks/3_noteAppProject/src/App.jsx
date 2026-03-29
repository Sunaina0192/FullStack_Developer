import React, { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler =(e)=>{
    e.preventDefault();
    const copyTask =[...task];
    copyTask.push({title,text})
    setTask(copyTask);
    setTitle("");
    setText('');
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];

    copyTask.splice(idx,1)
    setTask(copyTask);
  }

  return (
    <div className='min-h-screen flex flex-col lg:flex-row  bg-black text-white'>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-col items-start gap-10 p-10 lg:w-1/2 '>
      <h1 className='text-2xl font-bold'>Add Notes</h1>

      {/* title input */}
        <input type="text" placeholder='Enter Notes heading' className='px-10 outline-none w-full font-medium py-5  border-2 rounded '
        value={title} onChange={(e)=>{
             setTitle(e.target.value);
        }}/> 
      <textarea type="text" placeholder='Write Details' className='px-3 py-2 outline-none font-medium w-full border-2 h-30 rounded'
      value={text}
      onChange={(e)=>{
        setText(e.target.value);
      }}/>
      <button className='bg-white text-black text-2xl active:scale-95 w-full outline-none rounded'>Add Notes</button>
     
    </form>
    <div className=' p-10 lg:w-1/2 bg-blue-950 border-t-2 lg:border-t-0 lg:border-l-2 '>
    <h1 className='text-3xl font-bold'>Recent Notes</h1>
     <div  className='flex flex-wrap gap-5 mt-5 h-[90%] items-start justify-start overflow-auto'>
       {task.map(function(elem,idx){
        return  <div key={idx} className="flex justify-between flex-col items-start relative h-50 w-50 rounded bg-white text-black pt-9 pb-4 px-4">
    <div>
            {/* <h2 className='absolute top-5 right-5 rounded-full bg-red-400 p-1'><X size={19} strokeWidth={2.75}/></h2> */}
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-5 leading-tight font-medium text-gray-600'>{elem.text}</p>
    </div>
    <button onClick={()=>{
      deleteNote(idx)
    }} className='w-full cursor-pointer bg-red-400 text-white p-1 rounded font-bold active:scale-95'>Delete</button>
        </div>
       })}
     </div>
    </div>
    </div>
  )
}

export default App
