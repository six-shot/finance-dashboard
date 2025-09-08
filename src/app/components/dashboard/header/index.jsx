import React from "react";
import { ArrowRight, Notification, Search } from "../../ui/jsx/icons";
import { Button } from "../../ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="p-3  h-[88px]">
        <div className="flex justify-between items-center p-3">
          <div className="flex gap-3.5 items-center">
            <div className="w-[48px] h-[48px] bg-[#C0D5FF] rounded-full">
                <Image src="/avatarr.png" width={48} height={48} alt="avatar"/>
            </div>
            <div className="flex flex-col font-[family-name:var(--font-inter)]">
              <h4 className="text-[18px] text-[#0E121B] leading-6 tracking-[-0.27px] font-medium">
                Arthur Taylor
              </h4>
              <p className="text-sm text-[#525866] leading-5tracking-[-0.084px] ">
                Welcome back to Apex 👋🏻
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex justify-center items-center">
              <Search />
            </div>
            <div className="w-10 h-10 flex justify-center items-center">
              <div className="relative">
                {" "}
                <Notification />
                <div
                  className="absolute top-[1px] right-[4px] w-[5px] h-[5px]  bg-[#FB3748] rounded-full drop-shadow-[0_1px_2px_rgba(10,_13,_20,_0.03)]"
                ></div>
              </div>
            </div>

            <Button>
              Move Money <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
