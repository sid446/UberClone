import React, { useState } from 'react'
import UberLogo from '../assets/pngegg.png'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CaptainSignUp() {
     const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [Firstname, setFirstName] = useState('')
        const [Lastname, setLastName] = useState('')
        const [userData, setUserData] = useState({})
        const [vehicleColor, setVehicleColor] = useState('')
        const [vehiclePlate, setVehiclePlate] = useState('')
        const [vehicleCapacity, setVehicleCapacity] = useState('')
        const [vehicleType, setVehicleType] = useState('')
        const {captain,setCaptain}=React.useContext(CaptainDataContext)
        const navigate=useNavigate()
    
        
        const handleSubmit =async(e) => {
            e.preventDefault()
            const CaptainData={fullname:{firstname:Firstname,lastname:Lastname},email:email,password: password,vehicle:{color:vehicleColor,plate:vehiclePlate,capacity:vehicleCapacity,vehicleType:vehicleType}}
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,CaptainData)
            if(response.status===201){
                const data=response.data
                setCaptain(data.captain)
                localStorage.setItem('token',data.token)
                navigate('/captain-home')
            }
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setVehicleColor('')
            setVehiclePlate('')
            setVehicleCapacity('')
            setVehicleType('')
            
        }
  return (
   <>
   <div className='p-7 h-screen flex flex-col justify-between'>
    
    <div>
    <img className="w-[5rem] flex   "src={UberLogo} alt="" />
    <form onSubmit={handleSubmit}>
            <h3 className='text-base font-medium mb-2'>What's Our Captain's Name</h3>
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

            
            <h3 className='text-base font-medium mb-2'>What's Our Captain's Email</h3>
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
            <h3 className='text-base font-medium mb-2'>Enter Your Vehicle Information</h3>
            <div className='flex gap-2'>
            
            <input
                required
                value={vehicleColor}
                className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                type="text"
                placeholder="Vehicle Color"
                onChange={(e) => setVehicleColor(e.target.value)}
            />

            <input
                required
                value={vehiclePlate}
                className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                type="text"
                placeholder="Vehicle Plate"
                onChange={(e) => setVehiclePlate(e.target.value)}
            />
            </div>
            <div className='flex gap-2'>

           
            <input
                required
                value={vehicleCapacity}
                className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                type="number"
                placeholder="Vehicle Capacity"
                onChange={(e) => setVehicleCapacity(e.target.value)}
            />

           
            <select
                required
                value={vehicleType}
                className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                onChange={(e) => setVehicleType(e.target.value)}
            >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
            </select>
            </div>
            
            <button 
            className='bg-[#111] mb-3 rounded px-4 py-2  w-full text-lg text-white'
            type="submit">Create Captain Account</button>
            

        </form>
        <p className='text-center'>Already have a account?  <Link to='/captain-login' className='text-blue-600'>Login</Link></p> 
    </div>

    <div>
        <p className='text-zinc-500 text-xs'>Hey, hope you have a great experience using our app.</p>
    </div>

</div>
   </>
  )
}

export default CaptainSignUp