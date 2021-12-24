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
import { fetchTicker, fetchToday } from "../api";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import MainContainer from "../components/MainContainer";
import MainTitle from "../components/MainTitle";

const SectionInfo = styled.section`
  background-color: ${(props) => props.theme.hoverColor};
  border-radius: 2px;
  margin-bottom: 50px;
  padding: 20px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    span.title {
      font-size: 30px;
      font-weight: bold;
    }
    span.label {
      color: gray;
      font-size: 16px;
      margin-bottom: 10px;
    }
    span.text {
      font-size: 26px;
    }
  }
`;

const Tab = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const TabChildren = styled(Link)`
  background-color: ${(props) => props.theme.titleColor};
  padding: 10px 60px;
  border-radius: 10px;
  color: white;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionColumn = styled.section`
  width: 40%;
`;

const Coin = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const onChart = useMatch("/:id/chart");
  const onPrice = useMatch("/:id/price");

  const { isLoading, data: ticker } = useQuery<ITicker>([id, "ticker"], () =>
    fetchTicker(id!)
  );
  const { data: today } = useQuery<IToday[]>([id, "today"], () =>
    fetchToday(id!)
  );

  return (
    <MainContainer>
      <Helmet>
        <title>{state?.name ?? ticker?.name ?? "Not Found"}</title>
      </Helmet>
      <header>
        <MainTitle>{state?.name ?? ticker?.name ?? "Not Found"}</MainTitle>
      </header>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SectionInfo>
            <div>
              <span className="title">{ticker?.symbol}/USDT</span>
            </div>
            <div>
              <span className="label">Price</span>
              <span className="text">
                ${ticker?.quotes.USD.price.toFixed(2)}
              </span>
            </div>
            <div>
              <span className="label">24h Change</span>
              <span
                className="text"
                style={{
                  color:
                    ticker?.quotes.USD.percent_change_24h! > 0 ? "red" : "blue",
                }}
              >
                {ticker?.quotes.USD.percent_change_24h! > 0 ? "▲" : "▼"}
                {Math.abs(
                  (ticker?.quotes.USD.price! *
                    ticker?.quotes.USD.percent_change_24h!) /
                    100
                ).toFixed(2)}{" "}
                {ticker?.quotes.USD.percent_change_24h! > 0 ? "+" : null}
                {ticker?.quotes.USD.percent_change_24h}%
              </span>
            </div>
            <div>
              <span className="label">Today High</span>
              <span className="text">${today && today[0].high.toFixed(2)}</span>
            </div>
            <div>
              <span className="label">Today Low</span>
              <span className="text">${today && today[0].low.toFixed(2)}</span>
            </div>
          </SectionInfo>
          <SectionContainer>
            <SectionColumn>
              <Tab>
                <TabChildren
                  to="chart"
                  style={{ fontWeight: onChart ? "bold" : "normal" }}
                >
                  Chart
                </TabChildren>
                <TabChildren
                  to="price"
                  style={{ fontWeight: onPrice ? "bold" : "normal" }}
                >
                  Price
                </TabChildren>
              </Tab>
              <Outlet />
            </SectionColumn>
            <SectionColumn>
              <Detail
                rank={ticker?.rank!}
                market_cap={ticker?.quotes.USD.market_cap!}
                total_supply={ticker?.circulating_supply!}
                release_date={ticker?.first_data_at!}
              />
            </SectionColumn>
          </SectionContainer>
        </>
      )}
    </MainContainer>
  );
};

export default Coin;
