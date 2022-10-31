import React from "react";
import { IconMapper } from "../../common/utils";
import LogoContainer from "../logoContainer";

const Card = ({
  name,
  price,
  change,
  tvl,
  popularPairs,
  logo,
}: {
  name: string;
  price: string;
  change: string;
  tvl: string;
  popularPairs: string[];
  logo: string;
}) => {
  return (
    <div className="w-[290px] m-4 relative flex flex-col items-center justify-center h-[400px] bg-gradient-to-t from-[#626a881a] to-[#2e31491a] border-[#2e3149] border-[1px] backdrop-blur-[50px] rounded-[17px] before:absolute before:top-[-70px] before:content-['']  before:w-[120px] before:rounded-full before:m-[10px] before:border-b-[1px] before:border-[#2e3149]  before:h-[120px] before:bg-[#14172B] ">
      <p className="font-semibold text-[12px] mb-4 my-5 text-[#737BAE] opacity-[0.9]">
        {name}
      </p>
      <div className="bg-[#14172B] border-[1px] border-[#2e3149] rounded-[17px] py-2 px-2 my-2 flex items-center justify-center w-[75%]">
        <span className="font-semibold text-[16px] text-[#ECF0FF] opacity-[0.9]">
          {price}
        </span>
        <span className="font-semibold text-[16px] ml-2 text-[#00FFA3]  opacity-[0.9]">
          {change}
        </span>
      </div>
      <p className="font-semibold mb-4 text-[12px] text-[#737BAE] opacity-[0.9]">
        Prize{" "}
      </p>
      <div className="bg-[#14172B] border-[1px] border-[#2e3149] rounded-[17px] py-2 px-2 my-2 flex items-center justify-center w-[75%]">
        <span className="font-semibold text-[16px] text-[#ECF0FF] opacity-[0.9]">
          {tvl}
        </span>
      </div>
      <p className="font-semibold mb-4 text-[12px] text-[#737BAE] opacity-[0.9]">
        TVL{" "}
      </p>
      <div className="bg-[#14172B] border-[1px] border-[#2e3149] rounded-[17px] py-2 px-2 my-2 flex items-center justify-around w-[40%]">
        {popularPairs?.map((pair, id) => (
          <img
            key={id}
            className="w-[22px] h-[22px]"
            src={IconMapper(pair)}
            alt="solana"
          />
        ))}
      </div>
      <p className="font-semibold text-[12px] text-[#737BAE] opacity-[0.9]">
        Popular pairs{" "}
      </p>
      <LogoContainer logo={logo} />
    </div>
  );
};

export default Card;
