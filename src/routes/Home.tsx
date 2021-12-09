import { useQuery } from "react-query";
import styled from "styled-components";

interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const MainContainer = styled.section`
  width: 25%;
  margin: auto;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  margin-top: 20px;
  color: ${(props) => props.theme.titleColor}; ;
`;

const SubTitle = styled.h3`
  font-size: 22px;
  color: gray;
  margin: 10px 0px;
`;

const CoinContainer = styled.li`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px 6px;
  transition: background-color 0.3s ease-in, color 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    color: white;
    cursor: pointer;
  }
  img {
    margin: 0px 10px;
    width: 64px;
    height: 64px;
  }
  span {
    font-size: 22px;
    font-weight: bold;
  }
`;

const Home = () => {
  const { isLoading, data: coins } = useQuery<ICoins[]>("coins", () =>
    fetch("https://api.coinpaprika.com/v1/coins").then((res) => res.json())
  );

  if (isLoading) {
    return <span>Loading..</span>;
  }

  return (
    <MainContainer>
      <header>
        <MainTitle>CRYPTO TRACKER </MainTitle>
        <SubTitle>using Coinpaprika API</SubTitle>
      </header>
      <ul>
        {coins?.slice(0, 100).map((coin) => (
          <CoinContainer key={coin.id}>
            <img
              src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
              alt={coin.symbol}
            />
            <span>{coin.name}</span>
          </CoinContainer>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Home;
