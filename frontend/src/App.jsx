import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllFollowers from "./components/AllFollowers";
import Connect from "./components/Connect";
import SuggestionList from "./components/SuggestionList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/followers" element={<AllFollowers/>}></Route>
          <Route path="/suggestion" element={<SuggestionList/>}> </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
