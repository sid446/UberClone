import React, { useState } from 'react'
import UberLogo from '../assets/pngegg.png'
import { Link } from 'react-router-dom'



function UserLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserData({email:email,password: password})
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
            <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p> 
        </div>

        <div>
            <Link to='/captain-login' 
            className='flex items-center justify-center bg-[#689F39] mb-5 rounded px-4 py-2  w-full text-lg text-white'
            >Sign In As Captain</Link>
        </div>

    </div>
    </>
  )
}

export default UserLogin