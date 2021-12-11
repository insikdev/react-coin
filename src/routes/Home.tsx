import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchAllCoins } from "../api";
import Loader from "../components/Loader";
import MainContainer from "../components/MainContainer";
import MainTitle from "../components/MainTitle";

interface ITickers {
  id: string;
  name: string;
  symbol: string;
  quotes: {
    KRW: {
      price: number;
    };
  };
}

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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 0px 2px;
  margin: 8px 0px;
  transition: background-color 0.3s ease-in, color 0.3s ease-in-out;
  a {
    padding: 20px 6px;
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    color: white;
    cursor: pointer;
  }
  img {
    margin-right: 10px;
    width: 64px;
    height: 64px;
  }
  span {
    font-size: 22px;
    font-weight: bold;
    width: fit-content;
  }
`;

const Price = styled.span`
  flex: 1;
  text-align: end;
`;

const Home = () => {
  const { isLoading, data } = useQuery<ITickers[]>("coins", fetchAllCoins);

  return (
    <MainContainer>
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
                <img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.symbol}
                />
                <span>{coin.name}</span>
                <Price>
                  {coin.quotes.KRW.price < 1
                    ? coin.quotes.KRW.price.toFixed(2)
                    : Math.floor(coin.quotes.KRW.price).toLocaleString("ko-KR")}
                  {" KRW"}
                </Price>
              </Link>
            </CoinContainer>
          ))}
        </Ul>
      )}
    </MainContainer>
  );
};

export default Home;
