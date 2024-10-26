import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Makerble_Logo from "./images/Makerble-Logo.png";
import Loginimg from "./images/login-img.jpg";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Login successful!
        navigate("/")// Optionally redirect user to a different page after successful login
      } else {
        alert(result.message); // Show error message (e.g., User not found, Incorrect password)
      }
    } catch (error) {
      console.log("Error:", error.message);
      alert("An error occurred, please try again later.");
    }
  };


  return (
    <>
          <div className="min-h-screen flex flex-row">
          <div className="h-screen w-full ">
          <img src={Loginimg} className="h-full w-full object-cover" alt="" />
        </div>
      <div className='w-[900px] h-screen px-12  py-5 flex shadow-lg flex-col gap-2  bg-white'>
      <div className=" w-[200px] mb-28 h-auto overflow-hidden">
          <img
            src={Makerble_Logo}
            className="w-full h-full object-fill"
            alt=""
          />
          
        </div>
        <div className='text-5xl font-semibold text-center'>Welcome Back</div>
        <div className='text-xl text-center'>Enter your email/username and password to access your account</div>
        <div className='mt-20'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-xl font-semibold'>Name</label>
                <input type="text" className='border-2 text-2xl rounded-lg border-gray-400 p-2' name="" placeholder='Enter Name' id="name" 
                {...register("emailOrUsername", {
                  required: { value: true, message: "Enter Username or Email" },
                })}/>
                {errors.emailOrUsername && (
                  <div className="text-lg lg:text-[20px] font-medium mt-0 px-2 text-red-600">
                    {errors.emailOrUsername.message}
                  </div>
                )}
                </div>
                <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-xl font-semibold'>Password</label>
                <input type="password" className='border-2 text-2xl rounded-lg border-gray-400 p-2 ' name="" placeholder='Enter Password' id="password" 
                {...register("password", {
                  required: { value: true, message: "Enter Password" },
                })
                }/>
                {errors.password && (
                  <div className="text-lg lg:text-[20px] font-medium mt-0 px-2 text-red-600">
                    {errors.password.message}
                  </div>
                )}
                </div>
                <button type='submit' className='px-6 py-4  rounded-lg mt-5 bg-black  text-white font-semibold hover:bg-slate-800 transition-all 0.3s ease-in-out text-2xl'>Login</button>
                <span className='text-xl mt-2'>Create an Account? <Link to="/signup" className='font-semibold hover:text-blue-600 transition-all 0.3s ease-in-out underline'>Sign In</Link></span>
            </form>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Login
