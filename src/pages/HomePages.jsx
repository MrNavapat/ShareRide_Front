import React from "react";
import HeroPic from "../../asset/forPage/Hero3.jpg";
import Modal from "../Component/Modal";
import { useState } from "react"

function HomePages() {

    const [loginStatus,setLoginStatus]=useState(false)

    const handleLogin = () => {
         setLoginStatus(!loginStatus)
    }

    const closeLogin = () => {
        setLoginStatus(false)
   }


    return (
      <>



    <div className="max-w max-h-[32rem] overflow-hidden flex items-center relative bg-red-400">
          <img src={HeroPic} />
        <div className="absolute top-20 start-0 left-28 text-white text-4xl hover:font-bold ">
              Share Ride
         </div>
      <button className="absolute top-20  right-60  text-white text-4xl font-semibold hover:font-bold " onClick={handleLogin}>Login</button>
      <button className="absolute top-20  right-20  text-white  text-4xl font-semibold hover:font-bold delay-600">Register</button>

          <div className="absolute bottom-20 right-60 text-white w-96 flex-col" >
              <div className="font-semibold my-4 text-3xl">Share Ride</div>
              <div className="my-4"> Shareride ,oppertunity to explore world with new friend ,new kind of social car pooling
                  ,travelling with economic cost with correct plan ,manage your trip ,see trip member
                  whether to join , also create your own trip ,select member to join
              </div>
              <button className="font-bold bg-white text-black rounded-full px-4 py-2 my-4 text-right hover:bg-none tex-white-400">Create Trip</button>

          </div>


      </div>
      
      {loginStatus?<Modal title="LoginModal" onClose={closeLogin} with={32} />:null}

      </>

  );
}

export default HomePages;
