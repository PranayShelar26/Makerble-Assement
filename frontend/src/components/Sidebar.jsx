import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [togglebtn, settogglebtn] = useState(false);
  const [togglebtn1, settogglebtn1] = useState(false);
  return (
    <>
      <div className="bg-[#00B0DD] fixed z-1 h-screen mt-[80px] w-[380px] flex flex-col px-5 py-10">
        <div className="text-white mb-5">
          <div className="mb-4 flex flex-row justify-between align-middle items-center">
            <div className="text-3xl font-semibold ">Main Menu</div>
            <button onClick={() => settogglebtn(!togglebtn)}>
              <span
                className={`material-symbols-outlined text-4xl transition-all 0.3s ease-in-out ${
                  togglebtn ? "rotate-0" : "rotate-180"
                } `}
              >
                keyboard_arrow_down
              </span>
            </button>
          </div>
          <div className={`${togglebtn ? "hidden" : "block"}`}>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2  ">
              <a href="" className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined text-3xl">mail</span>
                <span>Messages</span>
                </div>
                <div>
                <span className="w-10 h-10 rounded-full bg-red-500 flex justify-center items-center ">2</span>
                </div>
              </a>
            </div>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row  justify-between">
                <div className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined text-3xl">notifications</span>
                <span>Notifications</span>
                </div>
                <div>
                <span className="w-10 h-10 rounded-full bg-red-500 flex justify-center items-center ">1</span>
                </div>
                
              </a>
            </div>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-3xl">monitoring</span>
                <span>Progress</span>
              </a>
            </div>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-3xl">stacks</span>
                <span>Albums</span>
              </a>
            </div>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-3xl">pending_actions</span>
                <span>Tasks</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-white space-y-2 mb-10">
          <div className=" mb-4 flex flex-row justify-between">
            <div className="text-3xl font-semibold">Explore</div>
            <button onClick={() => settogglebtn1(!togglebtn1)}>
              <span
                className={`material-symbols-outlined text-4xl transition-all 0.3s ease-in-out ${
                  togglebtn1 ? "rotate-0" : "rotate-180"
                } `}
              >
                keyboard_arrow_down
              </span>
            </button>
          </div>
          <div className={`${togglebtn1 ? "hidden" : "block"}`}>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-3xl">calendar_month</span>
                <span>Events</span>
              </a>
            </div>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-3xl">overview</span>
                <span>Projects</span>
              </a>
            </div>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-3xl">apartment</span>
                <span>Organisations</span>
              </a>
            </div>
            <div className="text-2xl py-2 hover:bg-[#039EC6] rounded-lg transition-all 0.3s ease-in-out px-2">
            <a href="" className="flex flex-row gap-2 items-center">
                <span className="material-symbols-outlined text-3xl">groups</span>
                <span>Boards</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
