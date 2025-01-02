import React from 'react'

function VehiclePanel(props) {
  return (
    <div>
        <h4 onClick={()=>props.setVehiclePanel(false)} className='absolute top-8 right-4'><i  className="ri-arrow-down-s-line"></i></h4>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{props.setConfirmRidePanel(true)
            props.setVehiclePanel(false)
        }} className='flex w-full border-2 active:border-black rounded-xl mb-2  items-center justify-between p-3'>
          <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569015390/assets/fa/0e26a9-9d9d-4190-ad6d-a879ccef4266/original/Select.png' alt="" />
          <div className=' w-1/2' >
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>INR 193.2</h2>

        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)
            props.setVehiclePanel(false)
        }} className='flex w-full border-2 active:border-black rounded-xl mb-2  items-center justify-between p-3'>
          <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png' alt="" />
          <div className=' w-1/2' >
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>6 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle ride</p>
          </div>
          <h2 className='text-lg font-semibold'>INR 45.6</h2>

        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)
            props.setVehiclePanel(false)
        }} className='flex w-full border-2 active:border-black rounded-xl mb-2  items-center justify-between p-3'>
          <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' alt="" />
          <div className=' w-1/2' >
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>INR 163.9</h2>

        </div>
    </div>
  )
}

export default VehiclePanel