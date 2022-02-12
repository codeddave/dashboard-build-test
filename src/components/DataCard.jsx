import React from "react";
import UserIcon from "../assets/icons/user.svg";
const DataCard = ({ title, icon, data }) => {
  return (
    <div className="shadow-md flex max-w-md">
      <div className="w-12 h-12 p-2 bg-blue-200 rounded-full flex justify-center items-center">
        <img src={UserIcon} alt="users" />
      </div>

      <div className="flex flex-col justify-center pl-4">
        <p>USERS</p>
        <p>67</p>
      </div>
    </div>
  );
};

export default DataCard;
