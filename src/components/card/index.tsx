import React from "react";
import { SolanaLogo } from "../../assets";
import LogoContainer from "../logoContainer";

const Card = () => {
  return (
    <div className="w-[290px] m-4 relative flex flex-col items-center justify-center h-[400px] bg-gradient-to-t from-[#626a881a] to-[#2e31491a] border-[#2e3149] border-[1px] backdrop-blur-[50px] rounded-[17px] before:absolute before:top-[-70px] before:content-['']  before:w-[120px] before:rounded-full before:m-[10px] before:border-b-[1px] before:border-[#2e3149]  before:h-[120px] before:bg-[#14172B] ">
      <p className="font-semibold text-[12px] mb-4 my-5 text-[#737BAE] opacity-[0.9]">
        Bitcoin (BTC){" "}
      </p>
      <div className="bg-[#14172B] border-[1px] border-[#2e3149] rounded-[17px] py-2 px-2 my-2 flex items-center justify-center w-[75%]">
        <span className="font-semibold text-[16px] text-[#ECF0FF] opacity-[0.9]">
          $31,200.80
        </span>
        <span className="font-semibold text-[16px] ml-2 text-[#00FFA3]  opacity-[0.9]">
          +10%
        </span>
      </div>
      <p className="font-semibold mb-4 text-[12px] text-[#737BAE] opacity-[0.9]">
        Prize{" "}
      </p>
      <div className="bg-[#14172B] border-[1px] border-[#2e3149] rounded-[17px] py-2 px-2 my-2 flex items-center justify-center w-[75%]">
        <span className="font-semibold text-[16px] text-[#ECF0FF] opacity-[0.9]">
          $10,200.80
        </span>
      </div>
      <p className="font-semibold mb-4 text-[12px] text-[#737BAE] opacity-[0.9]">
        TVL{" "}
      </p>
      <div className="bg-[#14172B] border-[1px] border-[#2e3149] rounded-[17px] py-2 px-2 my-2 flex items-center justify-around w-[40%]">
        <img className="w-[22px] h-[22px]" src={SolanaLogo} alt="solana" />
        <img className="w-[22px] h-[22px]" src={SolanaLogo} alt="solana" />
        <img className="w-[22px] h-[22px]" src={SolanaLogo} alt="solana" />
      </div>
      <p className="font-semibold text-[12px] text-[#737BAE] opacity-[0.9]">
        Popular pairs{" "}
      </p>
      <LogoContainer />
    </div>
  );
};

export default Card;
