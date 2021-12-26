import styled from "styled-components";

interface IProps {
  title: string;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.titleColor};
  padding: 10px 60px;
  border-radius: 10px;
  color: white;
  width: min-content;
  margin-bottom: 50px;
`;

const TabMenu: React.FC<IProps> = ({ title }) => {
  return <Container>{title}</Container>;
};

export default TabMenu;
