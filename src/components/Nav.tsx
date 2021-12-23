import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.nav`
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.titleColor};
  background-color: black;
  padding: 28px;
`;

const Market = styled(Link)`
  margin-left: 50px;
  font-weight: normal;
  color: white;
  font-size: 20px;
`;

const Nav = () => {
  return (
    <Title>
      <Link to="/">CRYPTO TRACKER</Link>
      <Market to="/">Markets</Market>
    </Title>
  );
};

export default Nav;
