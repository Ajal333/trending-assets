export const trendingData: {
  name: string;
  price: string;
  change: string;
  tvl: string;
  popularPairs: string[];
  logo: string;
}[] = [
  {
    name: "Bitcoin (BTC)",
    price: "$31,812.20",
    change: "+10%",
    tvl: "$60,000",
    popularPairs: ["btc", "shib", "eth"],
    logo: "btc",
  },
  {
    name: "Solana (SOL)",
    price: "$32.20",
    change: "-12.31%",
    tvl: "$60,000",
    popularPairs: ["busd", "sol", "shib"],
    logo: "sol",
  },
  {
    name: "Etherium (ETH)",
    price: "$1,344.42",
    change: "-11.21%",
    tvl: "$60,000",
    popularPairs: ["sol", "btc", "busd"],
    logo: "eth",
  },
  {
    name: "Binance (BUSD)",
    price: "$1.00",
    change: "+0.26%",
    tvl: "$60,000",
    popularPairs: ["sol", "eth", "btc"],
    logo: "busd",
  },
  {
    name: "Shiba Inu (SHIB)",
    price: "$0.00082.20",
    change: "-8.10%",
    tvl: "$60,000",
    popularPairs: ["btc", "sol", "eth"],
    logo: "shib",
  },
];
