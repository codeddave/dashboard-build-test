import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import styled from "styled-components";
import AddUserIcon from "../assets/icons/add-user.svg";
import AddUser from "./AddUser";
const SideNavWrapper = styled.aside`
  width: 15vh;
`;
const SideNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SideNavWrapper className="app-dark h-screen">
      <div
        className="flex justify-center flex-col items-center pt-8"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-12 h-12 p-2 rounded-full flex justify-center items-center bg-white">
          <img src={AddUserIcon} alt="add-user" />
        </div>

        <p className="text-white text-xs font-semibold pt-2"> ADD A USER</p>
      </div>

      {isModalOpen ? (
        <ClickAwayListener onClickAway={closeModal}>
          <div>
            <AddUser closeModal={closeModal} />
          </div>
        </ClickAwayListener>
      ) : null}
    </SideNavWrapper>
  );
};

export default SideNav;
