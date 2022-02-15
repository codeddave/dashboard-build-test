import React from "react";
import Person from "../../assets/images/big-person.svg";

const UserDetailsCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <img src={Person} alt="person" />
      </div>
    </div>
  );
};

export default UserDetailsCard;
