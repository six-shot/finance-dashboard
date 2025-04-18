import React from "react";

import Image from "next/image";
import profile from "../../../../public/svgs/profile.svg";


export default function page() {
  return (
    <div className="p-6 h-[100svh]">
      <div className="border border-[#ffffff0a] bg-[#101010] shadow-[0_0_0_2px_rgba(255,255,255,0.04)] w-full h-full rounded-[12px] p-6 overflow-y-auto scroll-container">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-2">
            <Image src={profile} alt="profile" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h5 className="text-white text-[20px] font-[family-name:var(--font-satoshi-medium)] leading-[28px] ">
                  John tony
                </h5>
                <p className="text-white/80 text-[20px] font-[family-name:var(--font-satoshi-normal)] leading-[20px]">
                  @johntony
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-6 items-center">
                  <div className="flex items-center gap-1">
                    <h5 className="text-base font-[family-name:var(--font-satoshi-bold)] leading-[24px] text-white/80">
                      42
                    </h5>
                    <p>Following</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <h5 className="text-base font-[family-name:var(--font-satoshi-bold)] leading-[24px] text-white/80">
                      128
                    </h5>
                    <p>Followers</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <h5 className="text-base font-[family-name:var(--font-satoshi-bold)] leading-[24px] text-white/80">
                      780
                    </h5>
                    <p>REPT Earned</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm font-[family-name:var(--font-satoshi-normal)] leading-[20px] w-[419px]">
                  Web3 enthusiast, NFT creator, and blockchain developer.
                  Building the future of decentralized social
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-10">
          {/* <ProfileTabs/> */}
          <div className=" grid grid-cols-3 gap-4 w-full ">
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1  w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
            <div className="col-span-1 w-full h-[309px] rounded-[8px] bg-[#FF7B1C]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
