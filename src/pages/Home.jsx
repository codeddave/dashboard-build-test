import React from "react";
import MainContent from "../components/MainContent.jsx";
import SideNav from "../components/SideNav.jsx";

const Home = () => {
  return (
    <div className="flex w-full h-screen overflow-y-scroll">
      <SideNav />
      <MainContent />
    </div>
  );
};

export default Home;
