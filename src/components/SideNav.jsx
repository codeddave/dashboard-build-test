import React from "react";
import styled from "styled-components";
import AddUserIcon from "../assets/icons/add-user.svg";
const SideNavWrapper = styled.aside`
  width: 15vh;
`;
const SideNav = () => {
  return (
    <SideNavWrapper className="app-dark h-screen">
      <div className="flex justify-center flex-col items-center pt-8">
        <div className="w-12 h-12 p-2 rounded-full flex justify-center items-center bg-white">
          <img src={AddUserIcon} alt="add-user" />
        </div>

        <p className="text-white text-xs font-semibold pt-2"> ADD A USER</p>
      </div>
    </SideNavWrapper>
  );
};

export default SideNav;
