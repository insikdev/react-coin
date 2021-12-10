import React from "react";
import styled from "styled-components";

interface IProps {
  rank: number;
  market_cap: number;
  total_supply: number;
  release_date: string;
}

const ItemContainer = styled.ul`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
`;

const ItemList = styled.li`
  display: flex;
  margin: 10px 0px;
`;

const Label = styled.span`
  width: 150px;
  text-align: start;
`;

const Detail: React.FC<IProps> = ({
  rank,
  market_cap,
  total_supply,
  release_date,
}) => (
  <ItemContainer>
    <ItemList>
      <Label>시가총액 순위</Label>
      <span>{rank}</span>
    </ItemList>
    <ItemList>
      <Label>시가총액</Label>
      <span style={{ fontWeight: "bold" }}>
        {Math.floor(market_cap / 1.0e12).toLocaleString("ko-KR")}
        조원
      </span>
    </ItemList>
    <ItemList>
      <Label>최초 발행</Label>
      <span style={{ fontWeight: "bold" }}>
        {new Date(release_date).getFullYear()}년
        {new Date(release_date).getMonth() + 1}월
      </span>
    </ItemList>
    <ItemList>
      <Label>현재 유통량</Label>
      <span style={{ fontWeight: "bold" }}>
        {Math.floor(total_supply).toLocaleString("ko-KR")}
      </span>
    </ItemList>
  </ItemContainer>
);

export default Detail;
