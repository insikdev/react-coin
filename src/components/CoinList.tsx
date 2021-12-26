import { Link } from "react-router-dom";
import styled from "styled-components";
import { convertToMillion } from "../utils";

const CoinContainer = styled.li`
  border-bottom: 1px solid;
  border-bottom-color: ${(props) => props.theme.hoverColor};
  padding: 0px 16px;
  transition: background-color 0.3s ease-in, color 0.3s ease-in-out;
  a {
    padding: 20px 0px;
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      font-size: 22px;
    }
    div:first-child {
      width: 30%;
    }
    div:nth-child(n + 2) {
      width: 17.5%;
    }
  }
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const CoinSymbol = styled.span`
  margin: 0px 15px;
  font-size: 22px;
  font-weight: bold;
`;

const CoinName = styled.span`
  font-size: 16px;
  color: #7f8c8d;
`;

const Change24 = styled.span<{ isUp: boolean }>`
  color: ${(props) => (props.isUp ? props.theme.upward : props.theme.downward)};
`;

const CoinList: React.FC<ITicker> = (props) => (
  <CoinContainer>
    <Link
      to={`${props.id}/chart`}
      state={{
        name: props.name,
        id: props.id,
      }}
    >
      <div>
        <Icon
          src={`https://cryptoicon-api.vercel.app/api/icon/${props.symbol.toLowerCase()}`}
          alt={props.symbol}
        />
        <CoinSymbol>{props.symbol}</CoinSymbol>
        <CoinName>{props.name}</CoinName>
      </div>
      <div>
        <span>${props.quotes.USD.price.toFixed(2)}</span>
      </div>
      <div>
        <Change24 isUp={props.quotes.USD.percent_change_24h > 0}>
          {props.quotes.USD.percent_change_24h > 0 && "+"}
          {props.quotes.USD.percent_change_24h}%
        </Change24>
      </div>
      <div>
        <span>{convertToMillion(props.quotes.USD.volume_24h)}</span>
      </div>
      <div>
        <span>${convertToMillion(props.quotes.USD.market_cap)}</span>
      </div>
    </Link>
  </CoinContainer>
);

export default CoinList;
