const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchAllCoins = () =>
  fetch(`${BASE_URL}/tickers?quotes=KRW`).then((res) => res.json());

export const fetchInfo = (id: string) =>
  fetch(`${BASE_URL}/coins/${id}`).then((res) => res.json());

export const fetchTicker = (id: string) =>
  fetch(`${BASE_URL}/tickers/${id}?quotes=KRW`).then((res) => res.json());
