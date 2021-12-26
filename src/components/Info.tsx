import styled from "styled-components";
import { convertToDollar } from "../utils";

const Container = styled.section`
  background-color: ${(props) => props.theme.hoverColor};
  border-radius: 2px;
  margin-bottom: 50px;
  padding: 20px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Symbol = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const Label = styled.span`
  color: gray;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Text = styled.span`
  font-size: 26px;
`;

const Change = styled(Text)<{ isUp: boolean }>`
  color: ${(props) => (props.isUp ? props.theme.upward : props.theme.downward)};
`;

const Info: React.FC<ITicker> = (props) => (
  <Container>
    <Column>
      <Symbol>{props.symbol}/USDT</Symbol>
    </Column>
    <Column>
      <Label>Price</Label>
      <Text>{convertToDollar(props.quotes.USD.price)}</Text>
    </Column>
    <Column>
      <Label>24h Change</Label>
      <Change isUp={props.quotes.USD.percent_change_24h > 0}>
        {props.quotes.USD.percent_change_24h > 0 ? "▲" : "▼"}
        {Math.abs(props.quotes.USD.percent_change_24h)}%
      </Change>
    </Column>
    <Column>
      <Label>ATH</Label>
      <Text>{convertToDollar(props.quotes.USD.ath_price)}</Text>
    </Column>
  </Container>
);

export default Info;
