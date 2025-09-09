import React from "react";
import {
  CaretDown,
  Clock,
  Other,
  ShoppingBag,
  Utilities,
} from "../../ui/jsx/icons";
import { Button } from "../../ui/button";
import Image from "next/image";

export default function SpendingSummary() {
  return (
    <div className="bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]  h-full rounded-[16px] p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-[#E1E4EA] gap-3 sm:gap-0">
        <div className="flex items-center gap-2">
          <Clock />
          <h5 className="text-base font-medium leading-6 tracking-[-0.176px] text-[#0E121B]">
            Spending Summary
          </h5>
        </div>
        <Button
          variant="outline"
          className="flex px-2.5 gap-[2px] h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px] w-fit"
        >
          Last Week
          <CaretDown />
        </Button>
      </div>
      <div className="py-4 border-b border-[#E1E4EA]">
        <Image
          src="gauge-bar.svg"
          width={320}
          height={124}
          alt="guage"
          className="w-full"
        />
      </div>
      <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 justify-between w-full">
        <div className="flex flex-col gap-3 w-full justify-center items-center">
          <div className="w-8 h-8 bg-[#EBF1FF] rounded-full flex items-center justify-center">
            <ShoppingBag />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium leading-4 tracking-[-0.084px] text-[#525866]">
              Shopping
            </span>
            <span className="text-[#0E121B] text-sm font-medium leading-5 tracking-[-0.084px]">
              $900.00
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full justify-center items-center">
          <div className="w-8 h-8 bg-[#EBF8FF] rounded-full flex items-center justify-center">
            <Utilities />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium leading-4 tracking-[-0.084px] text-[#525866]">
              Utilities
            </span>
            <span className="text-[#0E121B] text-sm font-medium leading-5 tracking-[-0.084px]">
              $600.00
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full justify-center items-center">
          <div className="w-8 h-8 bg-[#F2F5F8] rounded-full flex items-center justify-center">
            <Other />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium leading-4 tracking-[-0.084px] text-[#525866]">
              Others
            </span>
            <span className="text-[#0E121B] text-sm font-medium leading-5 tracking-[-0.084px]">
              $200.00
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[28px] rounded-[6px] px-2.5 flex items-center border border-[#E1E4EA] text-[#525866] text-xs font-medium shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)]">
        Your weekly spending limit is $2000.
      </div>
    </div>
  );
}
