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

const SubTitle = styled.h3`
  font-size: 22px;
  color: gray;
  margin: 10px 0px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

const CoinContainer = styled.li`
  border-bottom: 1px solid #ecf0f1;
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
      width: 40%;
    }
    div:nth-child(n + 2) {
      width: 15%;
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

const Tab = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 12px 16px;
  background-color: #ecf0f1;
  div {
    text-align: left;
  }
  div:first-child {
    width: 40%;
  }
  div:nth-child(n + 2) {
    width: 15%;
  }
`;

const Change24 = styled.span<{ isUp: boolean }>`
  color: ${(props) => (props.isUp ? props.theme.upward : props.theme.downward)};
`;

const Home = () => {
  const { isLoading, data } = useQuery<ITickers[]>("coins", fetchAllCoins);
  const { data: exchange } = useQuery<IExchange>("exchange", fetchExchangeRate);

  return (
    <MainContainer>
      <Helmet>
        <title>CRYPTO TRACKER</title>
      </Helmet>
      <header>
        <MainTitle>CRYPTO TRACKER </MainTitle>
        <SubTitle>
          <a
            href="https://api.coinpaprika.com/"
            target="_blank"
            rel="noreferrer"
          >
            using Coinpaprika API
          </a>
        </SubTitle>
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
          {data?.slice(0, 100).map((coin) => (
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
    </MainContainer>
  );
};

export default Home;
