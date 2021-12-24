import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchHistory } from "../api";
import Loader from "../components/Loader";

const Tab = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const List = styled.li`
  display: flex;
  margin-bottom: 10px;
  transform: rotate(-180deg);
`;

const Price = () => {
  const { id } = useParams();
  const { isLoading: historyLoading, data } = useQuery<IHistory[]>(
    [id, "history"],
    () => fetchHistory(id!)
  );

  if (historyLoading) return <Loader />;

  return (
    <section style={{ padding: "0px 20px", width: "100%" }}>
      <Tab>
        <div style={{ width: "33%", textAlign: "center" }}>일자</div>
        <div style={{ width: "33%", textAlign: "center" }}>종가</div>
        <div style={{ width: "33%", textAlign: "center" }}>전일대비</div>
      </Tab>
      <ul style={{ transform: "rotate(180deg)" }}>
        {data?.map((coin, index) => {
          let calculate = 0;
          if (index !== 0 && index < data.length) {
            const today = coin.close;
            const yesterday = data[index - 1].close;
            calculate = Math.round(((today - yesterday) / today) * 10000) / 100;
          }
          return (
            <List key={index}>
              <div
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent: "center",
                }}
              >
                <span>{new Date(coin.time_open).getMonth() + 1}</span>
                <span>.</span>
                <span>
                  {new Date(coin.time_open).getDate() < 10
                    ? "0" + new Date(coin.time_open).getDate()
                    : new Date(coin.time_open).getDate()}
                </span>
              </div>
              <span style={{ width: "33%", textAlign: "center" }}>
                {coin.close.toLocaleString("ko-KR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span
                style={{
                  width: "33%",
                  textAlign: "center",
                  color:
                    calculate === 0 ? "black" : calculate > 0 ? "red" : "blue",
                }}
              >
                {index === 0 ? "-" : calculate + "%"}
              </span>
            </List>
          );
        })}
      </ul>
    </section>
  );
};

export default Price;
