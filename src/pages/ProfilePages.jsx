import React from "react";
import HeroPic from "../../asset/forPage/Hero2.jpg";
import Modal from "../Component/Modal";
import { useState,useEffect } from "react";

import TripContainer from "../Component/TripContainer";
import useAuth from "../hooks/user-auth"
import ShareRideSlogan from "../Component/ShareRideSlogan";
import { ApigetTrip } from "../api/trip";

function ProfilePages() {

  const [createTripStatus, setCreateTripStatus] = useState(false)
  const { authUser } = useAuth()
  const [trip, setTrip] = useState(null)
  

  const handleCreateTrip = () => {
    setCreateTripStatus(!createTripStatus);
  };
  
  const closeCreateTrip = () => {
    setCreateTripStatus(false);
  };

  useEffect(
     () => {
      alert("effect is running")
      ApigetTrip().then(res => setTrip(res.data.tripResult)).catch(err => console.log(err))
    },
    [])
  
  console.log(trip)
  


  return (
    <>
      <div className="max-w max-h-[32rem] overflow-hidden flex items-center relative bg-red-400">
        <img src={HeroPic} />
        <div className="absolute top-20 start-0 left-28 text-white text-4xl hover:font-bold ">
          Share Ride
        </div>
     

        {authUser ? <div
          className="absolute top-20  right-20  text-white  text-4xl font-semibold hover:font-bold delay-600">
          {authUser.userName}
        </div> : null}
        
        {authUser ? <button className="absolute top-20  right-60  text-white text-4xl font-semibold hover:font-bold " >
          Logout
        </button> : null}
        

        <div className="absolute bottom-20 right-60 text-white w-96 flex-col">
          <ShareRideSlogan />
          <button className="font-bold bg-white text-black rounded-full px-4 py-2 my-4 text-right hover:bg-none tex-white-400" onClick={handleCreateTrip}>
            Create Trip
          </button>
        </div>
      </div>

      {trip ? trip.map(el => {
        return (
          <>
            <h1>{el.startLoc}</h1>
            <h1>{el.endLoc}</h1>
            </>
        )
      }) : null}
         
    
      
      
      {createTripStatus ? (
        <Modal title="Create Trip" onClose={closeCreateTrip} width={24} >
          <TripContainer onClose={closeCreateTrip} />
        </Modal>
      ) : null}

    
      
    
    


    </>
  );

}
export default ProfilePages;
