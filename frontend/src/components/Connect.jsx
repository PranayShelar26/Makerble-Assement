import React from "react";
import Profileimg from "./images/profile-img.png";
import Contact_img from "./images/Contact-img.png";
import { useState } from "react";
const Connect = () => {
  let following = [
    {
      id: 1,
      Image: Profileimg,
      Name: "Pranay",
    },
    {
      id: 2,
      Image: Profileimg,
      Name: "Shawn",
    },
    {
      id: 3,
      Image: Profileimg,
      Name: "Frank",
    },
    {
      id: 4,
      Image: Profileimg,
      Name: "Trevour",
    },
    ,
    {
      id: 5,
      Image: Profileimg,
      Name: "Mike",
    },
  ];

  const [followState, setFollowState] = useState(
    following.reduce((acc, following) => {
      acc[following.id] = false; // Initializing each suggestion with 'not followed'
      return acc;
    }, {})
  );
  const toggleFollow = (id) => {
    // Toggle the follow state for the specific suggestion by its id
    setFollowState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      <div className="mt-[100px] w-[1200px] justify-center ml-[400px] h-auto flex flex-col px-7 py-7 gap-5">
        <div className="text-5xl font-semibold border-b-2 pb-5 border-gray-400">
          Connect
        </div>
        <div className="flex flex-col gap-5">
          {following.map((following) => {
            return (
              <div
                key={following.id}
                className="flex flex-row items-center align-middle gap-4 mt-3"
              >
                <div className="w-[70px] h-[70px] text-center rounded-full overflow-hidden items-center">
                  <img
                    src={following.Image}
                    alt=""
                    className="w-100 h-100 object-cover"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="text-2xl font-[500] ">{following.Name}</div>
                </div>
                <div className="ml-auto self-end">
                  <button
                    onClick={() => toggleFollow(following.id)}
                    className={`text-xl ${
                      followState[following.id]
                        ? "bg-white border-2 border-[#057D74] hover:bg-gray-200"
                        : "bg-[#057D74] hover:bg-[#1a6460] text-white"
                    } px-8 py-3   rounded-lg font-semibold`}
                  >
                    {followState[following.id] ? "Following" : "Follow"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Connect;
