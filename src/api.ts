const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchAllTickers = () =>
  fetch(`${BASE_URL}/tickers`).then((res) => res.json());

export const fetchTickerById = (id: string) =>
  fetch(`${BASE_URL}/tickers/${id}`).then((res) => res.json());

export const fetchHistoryById = async (id: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${id}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
};

/* USD <-> KRW 변환
export const fetchExchangeRate = () =>
  fetch(`${BASE_URL}/tickers/usdt-tether?quotes=KRW`).then((res) => res.json());
*/
