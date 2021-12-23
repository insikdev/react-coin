import styled from "styled-components";

const Container = styled.main`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 10px 20px 0px 20px;
  min-height: 100vh;
  border: 1px solid black;
`;

const MainContainer: React.FC = ({ children }) => (
  <Container>{children}</Container>
);

export default MainContainer;
