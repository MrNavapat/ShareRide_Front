import React from "react";
import HeroPic from "../../asset/forPage/Hero3.jpg";
import Modal from "../Component/Modal";
import { useState,useEffect } from "react";
import RegisterContainer from "../Component/RegisterContainer";
import LoginContainer from "../Component/LoginContainer"
import useAuth from "../hooks/user-auth"
import ShareRideSlogan from "../Component/ShareRideSlogan";
import TripCard from "../Component/TripCard";
import dayjs from "dayjs";
import TripDisplay from "../Component/TripDisplay";

function HomePages() {
  const [registerStatus, setRegisterStatus] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const { displayTrip, upComingPage,setUpComingPage } = useAuth()
  const { authUser } = useAuth()

       
  const handleRegister = () => {
    setRegisterStatus(!registerStatus);
  };

  const closeRegister = () => {
    setRegisterStatus(false);
  };

  const handleLogin = () => {
    setLoginStatus(!loginStatus);
  };

  const closeLogin = () => {
    setLoginStatus(false);
  }

  const handleClickBack = () => {
    if (upComingPage > 0) { setUpComingPage(prv => prv - 1) }

  }
  
  const handleClickForward = () => {
    setUpComingPage(prv => prv + 1)

  }

    

  return (
    <>
      <div className="max-w max-h-[32rem] overflow-hidden flex items-center relative bg-red-400">
        <img src={HeroPic} />

        <div className="absolute top-20 start-0 left-28 text-white text-4xl hover:font-bold ">
          Share Ride
        </div>
    
        <button className="btn glass opacity-60 absolute top-20  right-60  text-white text-4xl font-semibold hover:font-bold "
          onClick={handleLogin}>
          Login
        </button>
        
        <button
            className="btn glass opacity-60 absolute top-20  right-20  text-white  text-4xl font-semibold hover:font-bold delay-600"
            onClick={handleRegister}>
            Register
        </button>

        {registerStatus ? (
              <Modal title="Register" onClose={closeRegister} width={32} >
              <RegisterContainer onClose={closeRegister} />
              </Modal>
      ) : null}

        {loginStatus ? (
              <Modal title="Login" onClose={closeLogin} width={24} >
              <LoginContainer onClose={closeLogin} />
              </Modal>
      ) : null}

        <div className="absolute bottom-20 right-60 text-white w-96 flex-col">
              <ShareRideSlogan/>
        </div>
      </div>
      
      <TripDisplay trip={displayTrip} title="Upcoming trip for travel " buttonMessage="View Trip" page={9}  />            


       {/* <div className="flex justify-between mx-auto w-5/6 p-10">
      <div >Upcoming Trip</div>
      <div className="join bg-green-400">
          <button className="join-item btn" onClick={handleClickBack}>«</button>
          <button className="join-item btn">Page {upComingPage + 1}</button>
          <button className="join-item btn" onClick={handleClickForward}>»</button>
      </div>
  </div>
      <div className="mx-auto w-5/6 p-10">
      <div className="grid grid-cols-3 justify-items-center gap-10">
                {displayTrip ? displayTrip.map(el => <TripCard src={el.tripPicture} buttonMessage="Join Now" startLoc={el.startLoc} endLoc={el.endLoc} startDate={dayjs(el.startDate).format('DD-MMM-YYYY')} />):null}
     
        </div>
        </div>   */}



    </>
  );
}

export default HomePages;
