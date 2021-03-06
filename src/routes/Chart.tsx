import ApexCharts from "react-apexcharts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchHistoryById } from "../api";
import Loader from "../components/Loader";

const Chart = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery<IHistory[]>([id, "history"], () =>
    fetchHistoryById(id!)
  );

  if (isLoading) return <Loader />;

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
            formatter: (money) => money.toLocaleString("ko-KR"),
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
            y: [coin.open, coin.high, coin.low, coin.close],
          })),
        },
      ]}
    />
  );
};

export default Chart;
