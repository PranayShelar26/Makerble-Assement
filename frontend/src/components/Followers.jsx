import React from "react";
import Profileimg from "./images/profile-img.png";
import Contact_img from "./images/Contact-img.png";
import { Link } from "react-router-dom";
const Followers = () => {
  let following = [
    {
      id: 1,
      Image: Profileimg,
      Name: "Jackson",
      date:'4 days ago'
    },
    {
      id: 2,
      Image: Profileimg,
      Name: "Micheal",
      date:'last week'
    },
    {
      id: 3,
      Image: Profileimg,
      Name: "Chris",
      date:'last week'
    },
    {
      id: 4,
      Image: Profileimg,
      Name: "Iman",
      date:'last month'
    },
  ];

  const scrolltoTop=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;   
}

  return (
    <>
      <div className="p-6 flex flex-col gap-4 border-b-2 border-gray-300">
        <div className="flex flex-row justify-between items-center mb-2">
          <div className="text-4xl font-semibold ">Followers</div>
        </div>
        {following.map((following) => {
          return (
            <a href="" key={following.id} className="flex flex-row items-center align-middle gap-1 mt-1 p-2 hover:bg-gray-200 rounded-xl">
              <div className="w-[60px] h-[60px] text-center rounded-full overflow-hidden items-center">
                <img
                  src={following.Image}
                  alt=""
                  className="w-100 h-100 object-cover"
                />
              </div>
              <div className="flex flex-col ">
                <div className="text-xl font-[500] hover:text-[#00B0DD]">{following.Name}</div>
                <div className="text-xl text-gray-700">Followed {following.date}</div>
              </div>
            </a>
          );
        })}

        <div >
          <Link to="/followers" onClick={scrolltoTop} className="text-lg text-[#057D74] hover:text-[#15433f]">View all</Link>
        </div>
      </div>
    </>
  );
};

export default Followers;
