import React from "react";
import Sidebar from './Sidebar'
import Peoples from './Peoples'
import Connect from "./Connect";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SuggestionList = () => {
  return (
    <>
    <Navbar/>
      <div className="flex flex-row justify-between">
        <div>
          <Sidebar />
        </div>
        <div>
          <Connect />
        </div>
        <div>
          <Peoples />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SuggestionList;
