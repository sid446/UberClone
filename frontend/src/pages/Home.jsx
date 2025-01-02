import React from 'react'
import UberLogo from "../assets/pngegg.png"
import map from "../assets/map.png"
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'
import { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import car from '../assets/car.png'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitForDriver from '../components/WaitForDriver'

function Home() {
  const [pickupLocation, setPickupLocation] =useState('')
  const [destinationLocation, setDestinationLocation] =useState('')
  const [panelOpen, setPanelOpen] =useState(false)
  const panelRef=useRef(null)
  const arrowRef=useRef(null)
  const vehiclePanelRef=useRef(null)
  const confirmPanelRef=useRef(null)
  const LookingForDriverPanelRef=useRef(null)
  const waitingForDriverPanelRef=useRef(null)
  const [vehiclePanel, setVehiclePanel] =useState(false)
  const [ConfirmRidePanel, setConfirmRidePanel] =useState(false)
  const [LookingForDriverPanel, setLookingForDriverPanel] =useState(false)
  const [waitingForDriverPanel, setWaitingForDriverPanel] =useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const locationData={pickupLocation:pickupLocation,destinationLocation:destinationLocation}

  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{height:'70%',padding:20})
      gsap.to(arrowRef.current,{visibility:'visible'})
    }else{
      gsap.to(arrowRef.current,{visibility:'hidden'})
      gsap.to(panelRef.current,{height:0,padding:0})
    } 
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{transform:'translateY(0%)'})
    }
    else{
      gsap.to(vehiclePanelRef.current,{transform:'translateY(100%)'})
    }

  },[vehiclePanel])

  useGSAP(function(){
    if(ConfirmRidePanel){
      gsap.to(confirmPanelRef.current,{transform:'translateY(0%)'})
    }
    else{
      gsap.to(confirmPanelRef.current,{transform:'translateY(100%)'})
    }

  },[ConfirmRidePanel])
  useGSAP(function(){
    if(LookingForDriverPanel){
      gsap.to(LookingForDriverPanelRef.current,{transform:'translateY(0%)'})
    }
    else{
      gsap.to(LookingForDriverPanelRef.current,{transform:'translateY(100%)'})
    }

  },[LookingForDriverPanel])
  useGSAP(function(){
    if(waitingForDriverPanel){
      gsap.to(waitingForDriverPanelRef.current,{transform:'translateY(0%)'})
    }
    else{
      gsap.to(waitingForDriverPanelRef.current,{transform:'translateY(100%)'})
    }

  },[waitingForDriverPanel])
   
  return (
    
    <div className='relative h-screen w-screen overflow-hidden'>
      <img className='w-20 absolute' src={UberLogo} alt="" />
      <div>
        <img className="h-screen w-screen" src={map} alt="" />

      </div>
      <div className=' absolute flex flex-col justify-end h-screen  top-0  w-full'>
        <div className='h-[30%]  p-5 bg-white relative'>
        <h5 ref={arrowRef} className='absolute top-0 left-1  ' onClick={()=>setPanelOpen(false)}><i className="ri-arrow-down-wide-fill"></i></h5>
          <h4  className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-zinc-700 '></div>
            <input className='bg-[#eee] px-12 py-2 text-lg rounded-base w-full mt-5' type="text" placeholder='Add a pickup location'
            onClick={()=>setPanelOpen(true)}
            value={pickupLocation}
            onChange={(e)=>setPickupLocation(e.target.value)} />
            <input className='bg-[#eee] px-12 py-2 text-lg rounded-base w-full mt-3' type="text" placeholder='Add a destination location'
            onClick={()=>setPanelOpen(true)}
            value={destinationLocation}
            onChange={(e)=>setDestinationLocation(e.target.value)} />
          </form>
        </div>
        <div ref={panelRef} className='h-[0] bg-white ' >
          <LocationSearchPanel  setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel} />
        </div>
        
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
      <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmPanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
      <ConfirmedRide setLookingForDriverPanel={setLookingForDriverPanel}  setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div ref={LookingForDriverPanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
      <LookingForDriver setLookingForDriverPanel={setLookingForDriverPanel}/>
      </div>
      <div ref={waitingForDriverPanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
      <WaitForDriver setWaitingForDriverPanel={setWaitingForDriverPanel}/>
      </div>
      </div>
  )
}

export default Home