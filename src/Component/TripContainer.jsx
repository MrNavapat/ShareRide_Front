import React from "react";
import { useState } from "react";
import Input from "./Input";
import { validateTrip } from "../../validation/validate-createtrip";
import Uploadpic from "./Uploadpic";
import useAuth from "../hooks/user-auth";
import dayjs from "dayjs";

export default function TripContainer({onClose}) {
  const [input, setInput] = useState({});
  const [tripPic, setTripPic] = useState({});
  const [error, setError] = useState({});
  const { createTrip, authUser} = useAuth();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      alert("submit trip1");    
      const errorValidate = validateTrip(input);
      // console.log(errorValidate)
      if (Object.keys(errorValidate).length > 0) {
        alert('error found')
        setError(errorValidate);
      } else {
        const formData = new FormData();
        formData.append("tripPicture", tripPic);
        formData.append("startDate", dayjs(input.startDate).toISOString())
        formData.append("endDate",dayjs(input.endDate).toISOString())
        formData.append("startLoc",input.startLoc)
        formData.append("endLoc", input.endLoc)
        formData.append("tripMember",input.tripMember)
        formData.append("requestorId",authUser.id)
        createTrip(formData)
        onClose()
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <Input
          placeholder="Start Location"
          value={input?.startLoc}
          name="startLoc"
          onChange={handleChange}
          errorMessage={error?.startLoc}
        >
        </Input>

        <Input
          placeholder="End Location"
          value={input?.endLoc}
          name="endLoc"
          onChange={handleChange}
          errorMessage={error?.endLoc}
        ></Input>

        <Input
          type="date"
          placeholder="Start Date"
          value={input?.startDate}
          name="startDate"
          onChange={handleChange}
          errorMessage={error?.startDate}
        ></Input>

        <Input
          type="date"
          placeholder="End Date"
          value={input?.endDate}
          name="endDate"
          onChange={handleChange}
          errorMessage={error?.endDate}
        ></Input>

        <Input
          placeholder="Trip Member"
          value={input?.tripMember}
          name="tripMember"
          onChange={handleChange}
          errorMessage={error?.tripMember}
        ></Input>

        <Uploadpic setTripPic={setTripPic} />
        <div className="flex flex-col items-center py-4">
          <button className="bg-red-500 px-8 py-2 rounded-full mt-2">
            Create Trip
          </button>
        </div>
      </div>

     
    </form>
  );
}
