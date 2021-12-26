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
import { fetchTickerById } from "../api";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import MainContainer from "../components/MainContainer";
import MainTitle from "../components/MainTitle";
import TabMenu from "../components/TabMenu";
import Info from "../components/Info";

const Tab = styled.nav`
  display: flex;
  justify-content: space-around;
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

  const { isLoading, data } = useQuery<ITicker>([id, "ticker"], () =>
    fetchTickerById(id!)
  );

  return (
    <MainContainer>
      <Helmet>
        <title>{state?.name ?? data?.name ?? "Not Found"}</title>
      </Helmet>
      <MainTitle>{state?.name ?? data?.name ?? "Not Found"}</MainTitle>
      {isLoading || !data ? (
        <Loader />
      ) : (
        <>
          <Info {...data} />
          <SectionContainer>
            <SectionColumn>
              <Tab>
                <Link to="chart">
                  <TabMenu title="Chart" isOn={onChart?.pattern.end ?? false} />
                </Link>
                <Link to="price">
                  <TabMenu title="Price" isOn={onPrice?.pattern.end ?? false} />
                </Link>
              </Tab>
              <Outlet />
            </SectionColumn>
            <SectionColumn>
              <Detail {...data} />
            </SectionColumn>
          </SectionContainer>
        </>
      )}
    </MainContainer>
  );
};

export default Coin;
