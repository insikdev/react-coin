import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchAllTickers } from "../api";
import CoinList from "../components/CoinList";
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

const Home = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery<ITicker[]>("coins", fetchAllTickers);

  return (
    <MainContainer>
      <Helmet>
        <title>CRYPTO TRACKER</title>
      </Helmet>
      <MainTitle>Markets</MainTitle>
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
          {data?.slice(20 * (page - 1), 20 * page).map((coin, index) => (
            <CoinList {...coin} key={index} />
          ))}
        </Ul>
      )}
      <div>
        {page > 1 ? (
          <button onClick={() => setPage((prev) => prev - 1)}>prev</button>
        ) : null}
        {page < 100 ? (
          <button onClick={() => setPage((prev) => prev + 1)}>next</button>
        ) : null}
      </div>
    </MainContainer>
  );
};

export default Home;
