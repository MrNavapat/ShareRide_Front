import React from "react";
import HeroPic from "../../asset/forPage/Hero2.jpg";
import Modal from "../Component/Modal";
import { useState,useEffect } from "react";
import TripContainer from "../Component/TripContainer";
import useAuth from "../hooks/user-auth"
import ShareRideSlogan from "../Component/ShareRideSlogan";
// import { ApigetTripbyUser } from "../api/trip";
import { ApiJoinTripbyUser } from "../api/trip";
import useProfile from "../hooks/trip-auth";
import TripCard from "../Component/TripCard";
// import dayjs from "dayjs";
import { clearToken } from "../utils/local-storage";
import TripDisplay from "../Component/TripDisplay";

function ProfileLayout() {

  const [createTripStatus, setCreateTripStatus] = useState(false)
  const { authUser,setAuthUser } = useAuth()
  const {confirmTrip,pendingTrip,upComingTrip,upComingPage,setUpComingPage}=useProfile()

  
  const handleCreateTrip = () => {
    setCreateTripStatus(!createTripStatus);
  };
  
  const closeCreateTrip = () => {
    setCreateTripStatus(false);
  };

  const handleClickBack = () => {
    if (upComingPage > 0) { setUpComingPage(prv => prv - 1) }

  }
  
  const handleClickForward = () => {
    setUpComingPage(prv => prv + 1)

  }
      
  const handleLogout = () => {
    alert("log out is clicked")
        setAuthUser(null);
    clearToken();
  };

  const handleJoin = async (id) => {
    alert("id"+id+"is clicked")
    await ApiJoinTripbyUser( id )
  }

  return (
    <>
      <div className="max-w max-h-[32rem] overflow-hidden flex items-center relative bg-red-400">
        <img src={HeroPic} />
        <div className="absolute top-20 start-0 left-28 text-white text-4xl hover:font-bold ">
          Share Ride
        </div>
     

        {authUser ? <div
          className="btn glass opacity-60 absolute top-20  right-20  text-white  text-4xl font-semibold hover:font-bold delay-600">
          {authUser.userName}
        </div> : null}
        
        {authUser ? <button className="btn glass opacity-60 absolute top-20  right-60  text-white text-4xl font-semibold hover:font-bold "onClick={handleLogout} >
          Logout
        </button> : null}
        

        <div className="absolute bottom-20 right-60 text-white w-96 flex-col">
          <ShareRideSlogan />
          <button className="btn glass opacity-60 font-bold bg-white text-black rounded-full px-4 py-2 my-4 text-right hover:bg-none tex-white-400" onClick={handleCreateTrip}>
            Create Trip
          </button>
        </div>
      </div>

           
      <TripDisplay trip={confirmTrip} title="Ready for travel " buttonMessage="View Trip" page={3}  />            
      <TripDisplay trip={pendingTrip} title="On-process Trip" buttonMessage="Modify Trip" page={3} />
      <TripDisplay trip={upComingTrip} title="Suggestion Trip" buttonMessage="Join Trip" page={3} />

      
      
      {createTripStatus ? (
        <Modal title="Create Trip" onClose={closeCreateTrip} width={24} >
          <TripContainer onClose={closeCreateTrip} />
        </Modal>
      ) : null}

    
         
    


    </>
  );

}
export default ProfileLayout;
