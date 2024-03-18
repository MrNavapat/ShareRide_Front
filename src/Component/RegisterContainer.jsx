import React, { useState } from "react";
import Input from "./Input";
import { validateRegister } from "../../validation/validate-register";
import useAuth from "../hooks/user-auth";
import { toast } from "react-toastify";

export default function RegisterContainer({ onClose }) {
  const [input, setInput] = useState({sex:"Male",userType:"TRAVELLER"});
  const [error, setError] = useState({});
  const { register } = useAuth();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const errorValidate = validateRegister(input);
      if (errorValidate) {
        console.log(errorValidate)
        setError(errorValidate);
      }
      delete input.confirmedPassword;
      await register(input);
      toast.success("register successfully");
      onClose();
    } catch (err) {
      
      if (err.response?.data.message === 'User exists') {
        return setError({ userName: 'username already in use' });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="px-4 py-2 bg-gray-100">
          <div className="flex gap-2 bg-gray-100">
            <Input
              placeholder="Firstname"
              value={input?.firstName}
              name="firstName"
              onChange={handleChange}
              errorMessage={error?.firstName}
            ></Input>
            <Input
              placeholder="Lastname"
              value={input?.lastName}
              name="lastName"
              onChange={handleChange}
              errorMessage={error?.lastName}
            ></Input>
          </div>

          <div className="flex gap-2  bg-gray-100">
            <Input
              placeholder="Nationality"
              value={input?.nationality}
              name="nationality"
              onChange={handleChange}
              errorMessage={error?.nationality}

            ></Input>
            <Input
              type="date"
              placeholder="Birthday"
              value={input?.birthday}
              name="birthday"
              onChange={handleChange}
              errorMessage={error?.birthday}
            ></Input>
           
            <select name="sex" className="h-10 mt-8 rounded-lg" onChange={handleChange}>
              <option value="Male" selected>Male</option>
              <option value="Female">Female</option>
            </select>

          </div>

          <div className="flex gap-2  bg-gray-100 ">
            <Input
              placeholder="Occupation"
              value={input?.occupation}
              name="occupation"
              onChange={handleChange}
              errorMessage={error?.occupation}
            ></Input>
           
         
            <select name="userType" className="h-10 mt-8 rounded-lg" onChange={handleChange}>
              <option value="DRIVER_TRAVELLER" >DRIVER_TRAVELLER</option>
              <option value="TRAVELLER" selected>TRAVELLER</option>
            </select>

          </div>

          <Input
            placeholder="National ID"
            value={input?.nationalId}
            name="nationalId"
            onChange={handleChange}
            errorMessage={error?.nationalId}
          ></Input>

          <Input
            placeholder="Driving license"
            value={input?.drivingLicense}
            name="drivingLicense"
            onChange={handleChange}
            errorMessage={error?.drivingLicense}
          ></Input>
          <Input
            placeholder="Telephone number"
            value={input?.telephone}
            name="telephone"
            onChange={handleChange}
            errorMessage={error?.telephone}
          ></Input>

          <div className="flex gap-2  bg-gray-100">
            <Input
              placeholder="Car Model"
              value={input?.carModel}
              name="carModel"
              onChange={handleChange}
              errorMessage={error?.carModel}
            ></Input>
            <Input
              placeholder="Number of seat "
              value={input?.numSeat}
              name="numSeat"
              onChange={handleChange}
              errorMessage={error?.numSeat}
            ></Input>
          </div>
          <Input
            type
            placeholder="Username"
            value={input?.userName}
            name="userName"
            onChange={handleChange}
            errorMessage={error?.userName}
          ></Input>

          <Input
            type="password"
            placeholder="Password"
            value={input?.password}
            name="password"
            onChange={handleChange}
            errorMessage={error?.password}
          ></Input>
          <Input
            type="password"
            placeholder="Confirmed password"
            value={input?.confirmedPassword}
            name="confirmedPassword"
            onChange={handleChange}
            errorMessage={error?.confirmedPassword}
          ></Input>

          <div className="flex flex-col items-center py-4">
            <button className=" font-bold bg-gray-300 px-8 py-2 rounded-full mt-2">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
