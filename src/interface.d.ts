interface ITickers {
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

interface ITicker {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  first_data_at: string;
  quotes: {
    USD: {
      price: number;
      percent_change_24h: number;
      market_cap: number;
    };
  };
}

interface IExchange {
  quotes: {
    KRW: {
      price: number;
    };
  };
}

interface IToday {
  high: number;
  low: number;
  close: number;
  open: number;
}

interface IHistory {
  time_open: Date;
  time_close: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}
