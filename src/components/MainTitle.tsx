import React from "react";
import styled from "styled-components";

const Title = styled.nav`
  font-weight: 600;
  font-size: 48px;
  color: ${(props) => props.theme.titleColor};
  text-align: left;
  margin: 20px 0px;
`;

const MainTitle: React.FC = ({ children }) => <Title>{children}</Title>;

export default MainTitle;
