import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  color: ${(props) => props.theme.titleColor}; ;
`;

const MainTitle: React.FC = ({ children }) => <Title>{children}</Title>;

export default MainTitle;
