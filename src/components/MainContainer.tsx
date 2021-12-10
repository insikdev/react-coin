import styled from "styled-components";

const Container = styled.main`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  padding: 10px 20px 0px 20px;
  border: 1px solid black;
  min-height: 100vh;
`;

const MainContainer: React.FC = ({ children }) => (
  <Container>{children}</Container>
);

export default MainContainer;
