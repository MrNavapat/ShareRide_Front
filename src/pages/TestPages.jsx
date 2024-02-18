import React from 'react'
import TripCard from '../Component/TripCard'

export default function TestPages() {

  return (  
    <>
      <div className="mx-auto w-5/6">
      <div className="grid grid-cols-3 justify-items-center gap-4 bg-red-300">
                <TripCard buttonMessage="Join Now" startLoc="startLoc" endLoc="endLoc" />     
                <TripCard  buttonMessage="Join Now" startLoc="startLoc" endLoc="endLoc" />     
                <TripCard  buttonMessage="Join Now" startLoc="startLoc" endLoc="endLoc" />     
                <TripCard buttonMessage="Join Now" startLoc="startLoc" endLoc="endLoc" />    
        </div>
        </div>
      </>
          
  )
  
    
}


