import React, { useState } from 'react'
import UberLogo from '../assets/pngegg.png'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'



function UserSignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Firstname, setFirstName] = useState('')
    const [Lastname, setLastName] = useState('')
   

    const navigate=useNavigate()

    const {user,setUser}=React.useContext(UserDataContext)

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser=
        {fullname:{firstname:Firstname,lastname:Lastname},email:email,password: password}
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')

        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
        if(response.status===201){
            const data=response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
        
    }


  return (
    <>
    
    <div className='p-7 h-screen flex flex-col justify-between'>
    
        <div>
        <img className="w-[5rem] flex   "src={UberLogo} alt="" />
        <form onSubmit={handleSubmit}>
                <h3 className='text-base font-medium mb-2'>What's your name</h3>
                <div className='flex gap-2 mb-5'>
                <input 
                required
                value={Firstname} 
                className='bg-[#EEEEEE]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
                type="text" 
                placeholder="First Name" 
                onChange={(e) => setFirstName(e.target.value)}
                />
                
                <input 
                required
                value={Lastname} 
                className='bg-[#EEEEEE]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
                type="text" 
                placeholder="Last Name" 
                onChange={(e) => setLastName(e.target.value)}
                />

                </div>

                
                <h3 className='text-base font-medium mb-2'>What's your email</h3>
                <input 
                required
                value={email} 
                className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email" 
                placeholder="email@example.com" 
                onChange={(e) => setEmail(e.target.value)}
                />

                <h3 className='text-base font-medium mb-2'>Enter Password</h3>
                <input
                required
                value={password}
                className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                />
                <button 
                className='bg-[#111] mb-3 rounded px-4 py-2  w-full text-lg text-white'
                type="submit">Create Account</button>
                

            </form>
            <p className='text-center'>Already have a account?  <Link to='/login' className='text-blue-600'>Login</Link></p> 
        </div>

        <div>
            <p className='text-zinc-500 text-xs'>Hey, hope you have a great experience using our app.</p>
        </div>

    </div>
    </>
  )
}

export default UserSignUp