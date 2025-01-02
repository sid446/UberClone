import React, { useState } from 'react'
import UberLogo from '../assets/pngegg.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'



function CaptainLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    const {captain,setCaptain}=React.useContext(CaptainDataContext)
    const navigate=useNavigate()

    
    const handleSubmit =async (e) => {
        e.preventDefault()
        const captain={email:email,password: password}
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)
        if(response.status===200){
            const data=response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }
      
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