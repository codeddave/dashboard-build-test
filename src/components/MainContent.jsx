import React from "react";
import styled from "styled-components";
const MainContentWrapper = styled.section`
  width: 80vh;
`;
const MainContent = () => {
  return (
    <MainContentWrapper>
      <div>
        <h1>Dashboard</h1>
      </div>
    </MainContentWrapper>
  );
};

export default MainContent;
