import React from "react";
import styled from "styled-components";
import DataCard from "./DataCard";
import DataCardContainer from "./DataCardContainer";
const MainContentWrapper = styled.section`
  //width: 100vh;
`;
const MainContent = () => {
  return (
    <MainContentWrapper className="h-screen border w-full">
      <div className="py-6 mb-9 border">
        <h1 className="text-2xl text-black font-semibold pl-10">Dashboard</h1>
      </div>

      <DataCardContainer />
    </MainContentWrapper>
  );
};

export default MainContent;
