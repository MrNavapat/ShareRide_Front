import React from 'react'
import { useState } from 'react';
import Input from './Input';
import { validateTrip } from '../../validation/validate-createtrip';

export default function TripContainer() {

  const [input, setInput] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert("submit trip")
    
    const errorValidate = validateTrip(input);
    if (errorValidate) {
    setError(errorValidate)
  }


  }

  return (
     
    <form onSubmit={handleSubmitForm}>
    <div>
        <Input
          placeholder="Start Location"
          value={input?.startLoc}
          name="startLoc"
          onChange={handleChange}
          errorMessage={error?.startLoc}
        > </Input>
              
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
              
          <div className="flex flex-col items-center py-4">
          <button className="bg-red-500 px-8 py-2 rounded-full mt-2">Create Trip</button>
          </div>

  </div>
  
</form>

  )
}

