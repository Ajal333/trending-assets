import React from "react";
import { IconMapper } from "../../common/utils";

const LogoContainer = ({ logo }: { logo: string }) => {
  return (
    <div
      className={`w-[100px] h-[100px] rounded-full flex items-center justify-center absolute top-[-50px]
    bg-gradient-to-b from-[#626A881a] to-[#EAB3001a] backdrop-blur-[50px]
    border-[1px] border-[#2e3149]`}
    >
      <img src={IconMapper(logo)} alt="bitcoin" />
    </div>
  );
};

export default LogoContainer;
