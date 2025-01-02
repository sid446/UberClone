import React,{useContext, useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext.jsx'



function UserProtectedWrapper({children}) {
    const token=localStorage.getItem('token')
    const navigate = useNavigate()
    const {user,setUser}=useContext(UserDataContext)
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() =>  {
        if(!token){
            navigate('/login')
            return
        }
         axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers:{
              Authorization:`Bearer ${token}`
            }}).then(response=>{
                if(response.status===200){
                    setUser(response.data.user)
                    setIsLoading(false)
                }
            }).catch((err)=>{
                localStorage.removeItem('token')

                navigate('/login')
            })
    }, [token])
    if(isLoading){
      return <div>Loading...</div>

     }
  
    
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper