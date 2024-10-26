import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Makerble_Logo from "./images/Makerble-Logo.png";
import Signupimg from "./images/signup-img3.jpg";
const Signup = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Redirect to /login after a successful form submission
        navigate("/login");
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-row ">
        <div className="lg:w-[800px] h-screen rounded-xl py-5 px-10 flex shadow-lg flex-col gap-5  bg-white">
        <div className=" w-[200px] mb-20 h-auto overflow-hidden">
          <img
            src={Makerble_Logo}
            className="w-full h-full object-fill"
            alt=""
          />
          
        </div>
          <div className="text-5xl font-semibold mb-5">Signup</div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Name Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xl font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="border-[3px] text-2xl rounded-lg border-gray-500 p-2 "
                  name="name"
                  placeholder="Enter Name"
                  id="name"
                  {...register("username", {
                    required: { value: true, message: "Enter Username" },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message:
                        "Username should not include numbers or special characters",
                    },
                  })}
                />
                {errors.username && (
                  <div className="text-lg lg:text-[20px] font-medium mt-0  text-red-600">
                    {errors.username.message}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xl font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="border-[3px] text-2xl rounded-lg border-gray-500 p-2 "
                  name="email"
                  placeholder="Enter Email"
                  id="email"
                  {...register("email", {
                    required: { value: true, message: "Enter Email" },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email!",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-lg lg:text-[20px] font-medium mt-0  text-red-600">
                    {errors.email.message}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="pass" className="text-xl font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="border-[3px] text-2xl rounded-lg border-gray-500 p-2  "
                  name="password"
                  placeholder="Enter Password"
                  id="pass"
                  {...register("password", {
                    required: { value: true, message: "Enter Password" },
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <div className="text-lg lg:text-[20px] font-medium mt-0  text-red-600">
                    {errors.password.message}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="confirmpass" className="text-xl font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="border-[3px] text-2xl rounded-lg border-gray-500 p-2 "
                  name="cnfmpassword"
                  placeholder="Enter Confirm Password"
                  id="confirmpass"
                  {...register("confirmPassword", {
                    required: { value: true, message: "Confirm your password" },
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <div className="text-lg lg:text-[20px] font-medium mt-0 text-red-600">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="px-6 py-4  rounded-lg mt-4 bg-black font-semibold hover:bg-slate-800 transition-all 0.3s ease-in-out  text-white text-2xl"
              >
                Sign Up
              </button>
              <span className='text-xl'>Already have an Account? <Link to="/login" className='font-semibold underline hover:text-blue-600'>Login</Link></span>
            </form>
          </div>
        </div>
        <div className="h-screen w-full ">
          <img src={Signupimg} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
    </>
  );
};

export default Signup;
