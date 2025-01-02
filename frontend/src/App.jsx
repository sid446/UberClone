import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start.jsx'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/Home.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
          }/>
        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout/>
          </UserProtectedWrapper>}/>
          <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome/> </CaptainProtectedWrapper>}/>
          <Route path='/captain/logout' element={<CaptainProtectedWrapper><CaptainLogout/></CaptainProtectedWrapper>}/>
      </Routes>

      
    </div>
  )
}

export default App
