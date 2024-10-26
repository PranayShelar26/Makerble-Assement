import React from "react";
import Profileimg from "./images/profile-img.png";
import Contact_img from "./images/Contact-img.png";
import { useState } from "react";
const FollowersList = () => {
  let following = [
    {
      id: 1,
      Image: Profileimg,
      Name: "Jackson",
      date: "4 days ago",
    },
    {
      id: 2,
      Image: Profileimg,
      Name: "Micheal",
      date: "last week",
    },
    {
      id: 3,
      Image: Profileimg,
      Name: "Chris",
      date: "last week",
    },
    {
      id: 4,
      Image: Profileimg,
      Name: "Iman",
      date: "last month",
    },
    {
      id: 5,
      Image: Profileimg,
      Name: "Iman",
      date: "last month",
    },
    {
      id: 6,
      Image: Profileimg,
      Name: "Iman",
      date: "last month",
    },
    {
      id: 7,
      Image: Profileimg,
      Name: "Iman",
      date: "last month",
    },
    {
      id: 8,
      Image: Profileimg,
      Name: "Iman",
      date: "last month",
    },
    {
      id: 9,
      Image: Profileimg,
      Name: "Iman",
      date: "last month",
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
    <div className="mt-[100px] w-[1200px] justify-center ml-[400px] h-auto flex flex-col px-7 py-7 gap-5">
      <div className="text-5xl font-semibold border-b-2 pb-5 border-gray-400">
        Followers
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
                <div className="text-xl text-gray-700">
                  Followed {following.date}
                </div>
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
                  {followState[following.id] ? "Undo" : "Remove"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowersList;
