import ApexCharts from "react-apexcharts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCurrentExchangeRate, fetchHistory } from "../api";
import Loader from "../components/Loader";

export interface IHistory {
  time_open: Date;
  time_close: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface IRate {
  quotes: {
    KRW: { price: number };
  };
}

const Chart = () => {
  const { id } = useParams();
  const { isLoading: historyLoading, data } = useQuery<IHistory[]>(
    [id, "history"],
    () => fetchHistory(id!)
  );

  const { isLoading: rateLoading, data: currentRate } = useQuery<IRate>(
    "rate",
    fetchCurrentExchangeRate
  );

  if (historyLoading || rateLoading || !data) return <Loader />;

  return (
    <ApexCharts
      type="candlestick"
      options={{
        chart: {
          type: "candlestick",
          toolbar: { show: false },
        },
        tooltip: { enabled: false },
        xaxis: {
          type: "datetime",
          labels: { format: "MM/dd" },
        },
        yaxis: {
          tooltip: { enabled: true },
          labels: {
            formatter: (money) => money.toLocaleString("ko-KR") + "원",
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#ff0000",
              downward: "#0000ff",
            },
          },
        },
      }}
      series={[
        {
          data: data?.map((coin) => ({
            x: coin.time_open,
            y: [
              Math.floor(coin.open * currentRate?.quotes.KRW.price!),
              Math.floor(coin.high * currentRate?.quotes.KRW.price!),
              Math.floor(coin.low * currentRate?.quotes.KRW.price!),
              Math.floor(coin.close * currentRate?.quotes.KRW.price!),
            ],
          })),
        },
      ]}
    />
  );
};

export default Chart;
