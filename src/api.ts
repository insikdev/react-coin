const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchAllCoins = () =>
  fetch(`${BASE_URL}/tickers`).then((res) => res.json());

export const fetchTicker = (id: string) =>
  fetch(`${BASE_URL}/tickers/${id}?quotes=KRW`).then((res) => res.json());

// export const fetchInfo = (id: string) =>
//   fetch(`${BASE_URL}/coins/${id}`).then((res) => res.json());
export const fetchHistory = async (id: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${id}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
};

export const fetchExchangeRate = () =>
  fetch(`${BASE_URL}/tickers/usdt-tether?quotes=KRW`).then((res) => res.json());

export interface ITickers {
  id: string;
  name: string;
  symbol: string;
  quotes: {
    USD: {
      price: number;
      percent_change_24h: number;
      volume_24h: number;
      market_cap: number;
    };
  };
}

export interface IExchange {
  quotes: {
    KRW: {
      price: number;
    };
  };
}
