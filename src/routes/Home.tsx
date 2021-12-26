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

const Pagination = styled.footer`
  align-self: flex-end;
  margin: 30px 0px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 16px;
  background-color: ${(props) => props.theme.hoverColor};
`;

const Home = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery<ITicker[]>("coins", fetchAllTickers);
  const nextPage = () => setPage((prev) => (prev === 1 ? 1 : prev - 1));
  const prevPage = () => setPage((prev) => (prev === 20 ? 20 : prev + 1));

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
      <Pagination>
        <Button onClick={nextPage}>{"<< "}prev</Button>
        <span>Page {page} of 20</span>
        <Button onClick={prevPage}>next{" >>"}</Button>
      </Pagination>
    </MainContainer>
  );
};

export default Home;
