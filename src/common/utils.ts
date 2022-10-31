import {
  BinanceLogo,
  BitcoinLogo,
  EtherLogo,
  ShibaLogo,
  SolanaLogo,
} from "../assets";

export const IconMapper = (name: string) => {
  switch (name) {
    case "btc":
      return BitcoinLogo;
    case "eth":
      return EtherLogo;
    case "sol":
      return SolanaLogo;
    case "shib":
      return ShibaLogo;
    case "busd":
      return BinanceLogo;
    default:
      return EtherLogo;
  }
};
