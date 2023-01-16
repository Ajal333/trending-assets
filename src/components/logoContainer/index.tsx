import React from "react";
import { IconMapper } from "../../common/utils";

const LogoContainer = ({ logo, color }: { logo: string; color: string }) => {
  return (
    <div
      className={`w-[100px] h-[100px] rounded-full flex items-center justify-center absolute top-[-50px]
    ${color}
    border-[1px] border-[#2e3149]`}
    >
      <img src={IconMapper(logo)} alt="bitcoin" />
    </div>
  );
};

export default LogoContainer;
