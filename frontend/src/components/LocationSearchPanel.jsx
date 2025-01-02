import React from 'react'

function LocationSearchPanel(props) {


  const locations=["24B, Near Kapoor's cafe, Bhopal",
  "22B, Near Kalpana cafe, Bhopal",
  "24B, Near Malhortara cafe, Bhopal",
  "24B, Near Kapoor's cafe, Bhopal",
  "24B, Near Kapoor's cafe, Bhopal"
  ]

  return (
    <div>
        {locations.map((location , index)=>{
        
        return  <div key={index} onClick={()=>{props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex gap-4 items-center border-2 p-3 border-white active:border-black  rounded-xl my-2 justify-start'>
           <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'> <i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-medium'>{location}</h4>
        </div>
        })}
    </div>
  )
}

export default LocationSearchPanel