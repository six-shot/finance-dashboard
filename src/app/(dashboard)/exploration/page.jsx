import React from "react";
import { SearchNormal1Icon } from "@gomah/vuesax-icons-react/linear";

export default function page() {
  return (
    <div className="p-6 h-[100svh]">
      <div className="border border-[#ffffff0a] bg-[#101010] shadow-[0_0_0_2px_rgba(255,255,255,0.04)] w-full h-full rounded-[12px] p-6 overflow-y-auto scroll-container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h5 className="text-white text-[20px] font-[family-name:var(--font-satoshi-medium)] leading-[28px] ">
              Explore
            </h5>
            <p className="text-white/80 text-base font-[family-name:var(--font-satoshi-normal)] leading-[20px]">
              View top post,users and more
            </p>
          </div>
          <div className="w-[350px] h-[44px] rounded-[8px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] flex gap-4 items-center justify-between px-4">
              <SearchNormal1Icon className="w-5 h-5 text-white" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder:text-white text-sm font-[family-name:var(--font-satoshi-medium)] leading-[20px] w-full outline-none"
            />
          </div>
        </div>
        <div className="mt-[30px] grid grid-cols-3 gap-4 w-full ">
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 row-span-2 w-full h-[642px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 row-span-2 w-full h-[642px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
        </div>
      </div>
    </div>
  );
}
