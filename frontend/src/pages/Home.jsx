import React from 'react'
import UberLogo from '../assets/pngegg.png'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='h-screen w-full   bg-red-400 flex justify-between flex-col bg-[url(https://plus.unsplash.com/premium_photo-1661869578542-60e408846cbf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGphbXxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-center'> 
        <img className="w-[10rem] "src={UberLogo} alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
        </div>
  )
}
export default Home