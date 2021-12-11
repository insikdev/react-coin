import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { fetchTicker } from "../api";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import MainContainer from "../components/MainContainer";
import MainTitle from "../components/MainTitle";

interface ITicker {
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  first_data_at: string;
  quotes: {
    KRW: {
      price: number;
      percent_change_24h: number;
      market_cap: number;
    };
  };
  error?: string;
}

const InfoContainer = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const InfoText = styled.div`
  flex: 1;
`;

const Tab = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const TabChildren = styled(Link)`
  background-color: ${(props) => props.theme.titleColor};
  padding: 10px 50px;
  border-radius: 10px;
  color: white;
`;

const Coin = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const onChart = useMatch("/:id/chart");
  const onPrice = useMatch("/:id/price");

  const { isLoading, data: ticker } = useQuery<ITicker>([id, "ticker"], () =>
    fetchTicker(id!)
  );

  return (
    <MainContainer>
      <Helmet>
        <title>{state?.name ?? ticker?.name ?? "Not Found"}</title>
      </Helmet>
      <header>
        <MainTitle>{state?.name ?? ticker?.name ?? "Not Found"}</MainTitle>
      </header>
      {isLoading || ticker?.error ? (
        <Loader />
      ) : (
        <>
          <InfoContainer>
            <img
              src={`https://cryptoicon-api.vercel.app/api/icon/${ticker?.symbol.toLowerCase()}`}
              alt={ticker?.symbol}
              style={{ width: 80 }}
            />
            <InfoText>
              <div style={{ fontSize: 20, color: "gray" }}>
                {ticker?.symbol}/KRW
              </div>
              <div>
                <div style={{ fontSize: 32, margin: "10px 0px" }}>
                  {ticker?.quotes.KRW.price! < 1
                    ? ticker?.quotes.KRW.price.toFixed(2)
                    : Math.floor(ticker?.quotes.KRW.price!).toLocaleString(
                        "ko-KR"
                      )}
                  <span
                    style={{
                      fontSize: 24,
                      color:
                        ticker?.quotes?.KRW?.percent_change_24h! >= 0
                          ? "red"
                          : "blue",
                    }}
                  >
                    {" "}
                    {ticker?.quotes.KRW.percent_change_24h}%
                  </span>
                </div>
              </div>
            </InfoText>
          </InfoContainer>
          <Detail
            rank={ticker?.rank!}
            market_cap={ticker?.quotes.KRW.market_cap!}
            total_supply={ticker?.circulating_supply!}
            release_date={ticker?.first_data_at!}
          />

          <Tab>
            <TabChildren
              to="chart"
              style={{ fontWeight: onChart ? "bold" : "normal" }}
            >
              차트
            </TabChildren>
            <TabChildren
              to="price"
              style={{ fontWeight: onPrice ? "bold" : "normal" }}
            >
              시세
            </TabChildren>
          </Tab>
          <Outlet />
        </>
      )}
    </MainContainer>
  );
};

export default Coin;
