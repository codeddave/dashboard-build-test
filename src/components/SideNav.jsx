import React from "react";
import styled from "styled-components";

const SideNavWrapper = styled.aside`
  width: 15vh;
`;
const SideNav = () => {
  return (
    <SideNavWrapper className="app-dark h-screen">
      <div className="flex justify-center flex-col items-center pt-8">
        <div className="w-12 h-12 p-2 rounded-full flex justify-center items-center bg-white">
          <img src="" alt="" />
        </div>

        <p className="text-white text-xs font-semibold"> ADD A USER</p>
      </div>
    </SideNavWrapper>
  );
};

export default SideNav;
