import styled from "styled-components";
import React from "react";

// 공통 레이아웃 스타일 정의
const StyledContainer = styled.div`
  width: 400px;
  // height: 956px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default AppContainer;
