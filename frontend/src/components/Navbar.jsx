import React, { useState } from "react";
import Profileimg from "./images/profile-img.png";
import Makerble_Logo from "./images/Makerble-Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMore, setshowMore] = useState(false)

  const onShowMore=()=>{
    setshowMore(!showMore);
  }
  return (
    <>
      <div className="flex flex-row z-50 justify-between fixed items-center w-screen py-4 px-5 bg-white shadow-md ">
        <div className=" w-[200px] h-[60px] overflow-hidden">
          <Link to='/'><img
            src={Makerble_Logo}
            className="w-full h-full object-fill"
            alt=""
          /></Link>
          
        </div>
        <div className="mx-5 text-2xl  font-semibold flex flex-row gap-8">
          <Link to="/"
            className="hover:text-[#00B0DD] transition-all 0.3s ease-in-out"
          >
            Home
          </Link>
          <a
            href=""
            className="hover:text-[#00B0DD] transition-all 0.3s ease-in-out"
          >
            My Pages
          </a>
        </div>
        <div className="mx-5 flex flex-row items-center ">
          <input
            type="text"
            placeholder="Type to search..."
            className="border-2 rounded-lg  w-[600px] border-gray-400 py-2 px-5  text-2xl hover:text-[#00B0DD] transition-all 0.3s ease-in-out"
          />
        </div>
        <div className="flex flex-row text-2xl mx-5 font-semibold gap-8">
          <div className="flex flex-row items-center gap-2 hover:text-[#00B0DD] transition-all 0.3s ease-in-out">
            <span className="material-symbols-outlined text-4xl">
              notifications
            </span>
            <a href="">Notifications</a>
          </div>
          <div className="flex flex-row items-center gap-2 hover:text-[#00B0DD] transition-all 0.3s ease-in-out">
            <span className="material-symbols-outlined text-4xl">
              mark_email_unread
            </span>
            <a href="">Messages</a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 mr-5">
          <div className="flex flex-row text-2xl items-center  mx-5 font-semibold gap-2">
            <div className="w-[60px] h-[60px] items-center rounded-full overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={Profileimg}
                alt=""
              />
            </div>
            <a
              href=""
              className="hover:text-[#00B0DD] transition-all 0.3s ease-in-out"
            >
              Pranay
            </a>
          </div>
          <div className="relative">
          <button onClick={onShowMore} className={`flex flex-row items-center gap-2  border-2 rounded-lg border-[#00B0DD] ${showMore ? 'bg-[#00B0DD] text-white' : 'bg-gray-100'} hover:bg-[#00B0DD] hover:text-white p-2`}>
          <span className="material-symbols-outlined text-4xl ">
              menu
              </span>
            <div className="font-semibold text-2xl ">
              More
            </div>
          </button>

          {showMore && 
          <div className="absolute right-0 mt-2 bg-white border-2 border-gray-300 shadow-lg rounded-lg py-2 w-48">
              <ul className="flex flex-col gap-2">
                <li className="hover:text-white text-xl px-3 py-2  hover:bg-purple-500 "><a href="#">About Us</a></li>
                <li className="hover:text-white text-xl px-3 py-2  hover:bg-blue-500"><a href="#">Settings</a></li>
                <li className="hover:text-white text-xl px-3 py-2  hover:bg-green-500"><a href="#">Help</a></li>
                <li className="hover:text-white text-xl px-3 py-2  hover:bg-orange-500"><a href="#">Logout</a></li>
              </ul>
            </div>}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
