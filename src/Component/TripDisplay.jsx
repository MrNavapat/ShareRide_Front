import React, { useState,useEffect } from "react";
import TripCard from "./TripCard";
import dayjs from "dayjs";
import { ApiUnJoinTripbyUser, ApiJoinTripbyUser } from "../api/tripmember";
import { ApigetTripbyGuest } from "../api/trip";
import useAuth from "../hooks/user-auth";
import useProfile from "../hooks/trip-auth";
import { useNavigate } from "react-router-dom";
import initialSrc from "../../asset/forPage/empty.jpg";

export default function TripDisplay({ trip, title,buttonMessage ,page,mode}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayTrip, setDisplayTrip] = useState([])
  console.log(useProfile());
  const { setForRefresh } = useProfile()

  const navigate = useNavigate(); 
  
    useEffect(() => {
       function tripByPage() {       
        console.log(trip.slice(currentPage * page, currentPage * page + page))
        setDisplayTrip(trip.slice(currentPage * page, currentPage * page + page))     
      }
      tripByPage()
    
    }, [currentPage,trip])
 

  const handleClickBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prv) => prv - 1);
    }
  };

    const handleClickForward = () => {
      if (currentPage < Math.ceil(trip.length / page)-1) {
        setCurrentPage((prv) => prv + 1);

        }
    };
    
  const handleClick = async (id) => {
      
    if (mode == "Join Trip") {
      // alert("id" + id + "Join trip")
      await ApiJoinTripbyUser(id)
      setForRefresh(prv=>!prv)
    } else if (mode == "Unjoin Trip") {
      // alert("id" + id + "Unjoin trip")
      await ApiUnJoinTripbyUser(id)
      setForRefresh(prv=>!prv)

    } else if (mode == "Manage Trip") {
      navigate(`/tripinformation/${id}`)
    }
  }
    return (
    <>
      <div className="flex justify-between mx-auto w-5/6 p-10">
        <div className="text-xl font-bold">{title}</div>
        <div className="join bg-green-400">
            <button className="join-item btn" onClick={handleClickBack}>{`<<`}</button>        
                  <button className="join-item btn">Page {currentPage + 1}/ {Math.ceil(trip.length / page)}</button>
            <button className="join-item btn" onClick={handleClickForward}>{`>>`}</button>      
       
        </div>
      </div>

      <div className="mx-auto w-5/6 p-10">

      <div className="grid grid-cols-3 justify-items-center gap-10">
        {displayTrip.length
          ? displayTrip.map((el) => (
              <TripCard
                src={el.tripPicture}
                buttonMessage={buttonMessage}
                startLoc={el.startLoc}
                endLoc={el.endLoc}
                startDate={dayjs(el.startDate).format("DD-MMM-YYYY")}
                onClick={e=>{handleClick(el.id)}}  
              />
            ))
          : <TripCard
          src={initialSrc}
          buttonMessage="No any trip relates"
          startLoc=""
          endLoc=""
          startDate=""
          onClick={e =>e } />
            
            }
        </div>
        </div>
    </>
  );
}
