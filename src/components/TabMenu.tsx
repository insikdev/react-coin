import styled from "styled-components";

interface IProps {
  title: string;
  isOn: boolean;
}

const Container = styled.div<{ isOn: boolean }>`
  background-color: ${(props) => props.theme.titleColor};
  padding: 10px 60px;
  border-radius: 10px;
  color: white;
  width: min-content;
  margin-bottom: 50px;
  font-weight: ${(props) => (props.isOn ? "bold" : "normal")};
`;

const TabMenu: React.FC<IProps> = ({ title, isOn }) => {
  return <Container isOn={isOn}>{title}</Container>;
};

export default TabMenu;
