import React, { useState } from 'react'
import UberLogo from '../assets/pngegg.png'
import { Link } from 'react-router-dom'



function CaptainLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setCaptainData({email:email,password: password})
        console.log(captainData)
        setEmail('')
        setPassword('')
        
    }


  return (
    <>
    
    <div className='p-7 h-screen flex flex-col justify-between'>
    
        <div>
        <img className="w-[5rem] flex   "src={UberLogo} alt="" />
        <form onSubmit={handleSubmit}>
                
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                required
                value={email} 
                className='bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email" 
                placeholder="email@example.com" 
                onChange={(e) => setEmail(e.target.value)}
                />

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input
                required
                value={password}
                className='bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                />
                <button 
                className='bg-[#111] mb-3 rounded px-4 py-2  w-full text-lg text-white'
                type="submit">Login</button>
                

            </form>
            <p className='text-center'>want to Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as Captain</Link></p> 
        </div>

        <div>
            <Link to='/login' 
            className='flex items-center justify-center bg-[#A4572D] mb-5 rounded px-4 py-2  w-full text-lg text-white'
            >Sign In As User</Link>
        </div>

    </div>
    </>
  )
}

export default CaptainLogin