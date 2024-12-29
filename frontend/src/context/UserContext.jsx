import React,{useState} from 'react'
import { use } from 'react'

export const UserDataContext = React.createContext({})

const UserContext = ({children}) => {
  const [user,setUser] =useState({
    email: '',
    fullname:{
      firstname:"",
      lastname:"",
    }, 
  })
  return (
    <div>
      <UserDataContext.Provider value={{user}}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
