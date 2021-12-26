import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 600;
  font-size: 48px;
  color: ${(props) => props.theme.titleColor};
  text-align: left;
  margin: 20px 0px;
`;

const MainTitle: React.FC = ({ children }) => (
  <header>
    <Title>{children}</Title>
  </header>
);

export default MainTitle;
