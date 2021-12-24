import styled from "styled-components";

const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const MainContainer: React.FC = ({ children }) => (
  <Container>{children}</Container>
);

export default MainContainer;
