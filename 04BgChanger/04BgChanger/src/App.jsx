import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='bg-lime-300 flex flex-wrap justify-center px-3 py-2 rounded-md gap-3 shadow-lg'>
            <button onClick={()=>{setColor('red')}} className='bg-red-500 rounded-xl px-4 py-1 outline-none hover:bg-red-400'> Red </button>
            <button onClick={()=>{setColor('green')}} className='bg-green-500 rounded-xl px-4 py-1 outline-none hover:bg-green-400'> Green </button>
            <button onClick={()=>{setColor('blue')}} className='bg-blue-500 rounded-xl px-4 py-1 outline-none hover:bg-blue-400'> Blur </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
