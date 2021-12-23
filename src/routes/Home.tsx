import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  fetchAllCoins,
  fetchExchangeRate,
  IExchange,
  ITickers,
  convertToMillion,
} from "../api";
import Loader from "../components/Loader";
import MainContainer from "../components/MainContainer";
import MainTitle from "../components/MainTitle";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.hoverColor};
  div {
    text-align: left;
  }
  div:first-child {
    width: 30%;
  }
  div:nth-child(n + 2) {
    width: 17.5%;
  }
`;

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

const CoinSymbol = styled.span`
  margin: 0px 15px;
  font-size: 22px;
  font-weight: bold;
`;

const CoinName = styled.span`
  font-size: 16px;
  color: #7f8c8d;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const Change24 = styled.span<{ isUp: boolean }>`
  color: ${(props) => (props.isUp ? props.theme.upward : props.theme.downward)};
`;

const Home = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery<ITickers[]>("coins", fetchAllCoins);
  const { data: exchange } = useQuery<IExchange>("exchange", fetchExchangeRate);

  return (
    <MainContainer>
      <Helmet>
        <title>CRYPTO TRACKER</title>
      </Helmet>
      <header>
        <MainTitle>Markets</MainTitle>
      </header>
      <Tab>
        <div>Name</div>
        <div>Price</div>
        <div>24h Change</div>
        <div>24h Volume</div>
        <div>Market Cap</div>
      </Tab>
      {isLoading ? (
        <Loader />
      ) : (
        <Ul>
          {data?.slice(20 * (page - 1), 20 * page).map((coin) => (
            <CoinContainer key={coin.id}>
              <Link
                to={`${coin.id}/chart`}
                state={{
                  name: coin.name,
                }}
              >
                <div>
                  <Icon
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    alt={coin.symbol}
                  />
                  <CoinSymbol>{coin.symbol}</CoinSymbol>
                  <CoinName>{coin.name}</CoinName>
                </div>
                <div>
                  <span>${coin.quotes.USD.price.toFixed(2)}</span>
                </div>
                <div>
                  <Change24 isUp={coin.quotes.USD.percent_change_24h > 0}>
                    {coin.quotes.USD.percent_change_24h > 0 && "+"}
                    {coin.quotes.USD.percent_change_24h}%
                  </Change24>
                </div>
                <div>
                  <span>{convertToMillion(coin.quotes.USD.volume_24h)}</span>
                </div>
                <div>
                  <span>${convertToMillion(coin.quotes.USD.market_cap)}</span>
                </div>
              </Link>
            </CoinContainer>
          ))}
        </Ul>
      )}
      {page > 1 && (
        <button onClick={() => setPage((prev) => prev - 1)}>prev</button>
      )}

      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
    </MainContainer>
  );
};

export default Home;
