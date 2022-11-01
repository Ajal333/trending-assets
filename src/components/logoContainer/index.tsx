import React from "react";
import { IconMapper } from "../../common/utils";

const LogoContainer = ({ logo, color }: { logo: string; color: string }) => {
  const bgStyle: string = `bg-gradient-to-b from-[#626A881a] to-[${color}] backdrop-blur-[50px]`;

  return (
    <div
      className={`w-[100px] h-[100px] rounded-full flex items-center justify-center absolute top-[-50px]
    ${bgStyle}
    border-[1px] border-[#2e3149]`}
    >
      <img src={IconMapper(logo)} alt="bitcoin" />
    </div>
  );
};

export default LogoContainer;
