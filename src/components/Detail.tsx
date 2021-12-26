import React from "react";
import styled from "styled-components";
import { convertToMillion } from "../utils";
import TabMenu from "./TabMenu";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

const Label = styled.div`
  width: 50%;
  font-size: 22px;
  font-weight: bold;
`;

const Value = styled.div`
  font-size: 20px;
  color: gray;
`;

const Detail: React.FC<ITickerById> = (props) => (
  <Container>
    <TabMenu title="Detail" />
    <Row>
      <Label>Market Cap Rank</Label>
      <Value>{props.rank}</Value>
    </Row>
    <Row>
      <Label>Market Cap</Label>
      <Value>{convertToMillion(props.quotes.USD.market_cap)}</Value>
    </Row>
    <Row>
      <Label>Circulation Supply</Label>
      <Value>{props.circulating_supply.toLocaleString("KR")}</Value>
    </Row>
    <Row>
      <Label>Max Supply</Label>
      <Value>{props.max_supply.toLocaleString("KR")}</Value>
    </Row>
    <Row>
      <Label>Total Supply</Label>
      <Value>{props.total_supply.toLocaleString("KR")}</Value>
    </Row>
    <Row>
      <Label>Issue Date</Label>
      <Value>{new Date(props.first_data_at).toLocaleString()}</Value>
    </Row>
  </Container>
);

export default Detail;
