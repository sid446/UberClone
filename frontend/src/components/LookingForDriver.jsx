import React from 'react'

function LookingForDriver(props) {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <h4 onClick={()=>props.setLookingForDriverPanel(false)} className='absolute top-8 right-4'><i  className="ri-arrow-down-s-line"></i></h4>
        <h3 className='text-2xl font-semibold mb-5'>Looking for a driver</h3>
        <div className='flex flex-col w-full gap-2 items-center justify-between'>
        <img className='w-[8rem]' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569015390/assets/fa/0e26a9-9d9d-4190-ad6d-a879ccef4266/original/Select.png' alt="" />
        <div className='w-full mt-5 '>
            <div className='flex items-center gap-5 p-3 border-b-2'>
            <h4><i className="text-lg ri-map-pin-range-fill"></i></h4>
                <div >
                    <h3 className='text-lg font-semibold'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600 '>Kankariya Talab,Ahmedabad</p>
                </div> 
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2' >
            <h4><i className="ri-square-fill"></i></h4>
                <div >
                    <h3 className='text-lg font-semibold'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600 '>Kankariya Talab,Ahmedabad</p>
                </div> 
            </div >
            <div className='flex items-center gap-5 p-3'> 
             <h4><i className="ri-wallet-fill"></i></h4>
                <div >
                    <h3 className='text-lg font-semibold'>INR 193.20</h3>
                    <p className='text-sm -mt-1 text-gray-600 '>Cash Cash</p>
                </div> 
            </div>


        </div>
    
        </div>

    </div>
  )
}

export default LookingForDriver