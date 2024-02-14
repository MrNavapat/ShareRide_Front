import React, { useState } from "react";
import Input from "./Input";
import { validateRegister } from "../../validation/validate-register";
import useAuth from "../hooks/user-auth";
import { toast } from "react-toastify";

export default function RegisterContainer({ onClose }) {
  const [input, setInput] = useState({});
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
        setError(errorValidate);
      }
      delete input.confirmedPassword;
      await register(input);
      toast.success("register successfully");
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="px-4 py-2">
          <div className="flex gap-2 ">
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

          <div className="flex gap-2 ">
            <Input
              placeholder="Nationality"
              value={input?.nationality}
              name="nationality"
              onChange={handleChange}
            ></Input>
            <Input
              type="date"
              placeholder="Birthday"
              value={input?.birthday}
              name="birthday"
              onChange={handleChange}
            ></Input>
            <Input
              placeholder="Sex"
              value={input?.sex}
              name="sex"
              onChange={handleChange}
            ></Input>
          </div>

          <div className="flex gap-2 ">
            <Input
              placeholder="Occupation"
              value={input?.occupation}
              name="occupation"
              onChange={handleChange}
            ></Input>
            
            <Input
              placeholder="UserType"
              value={input?.userType}
              name="userType"
              onChange={handleChange}
            ></Input>
          </div>

          <Input
            placeholder="National ID"
            value={input?.nationalId}
            name="nationalId"
            onChange={handleChange}
          ></Input>

          <Input
            placeholder="Driving license"
            value={input?.drivingLicense}
            name="drivingLicense"
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="Telephone number"
            value={input?.telephone}
            name="telephone"
            onChange={handleChange}
          ></Input>

          <div className="flex gap-2 ">
            <Input
              placeholder="Car Model"
              value={input?.carModel}
              name="carModel"
              onChange={handleChange}
            ></Input>
            <Input
              placeholder="Num seat "
              value={input?.numSeat}
              name="numSeat"
              onChange={handleChange}
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
            <button className="  bg-red-500 px-8 py-2 rounded-full mt-2">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
