"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import {
  MastercardIcon,
  ChipIcon,
  CardIconn,
  Line1,
  Line2,
  VerveIcon,
} from "@/app/components/ui/jsx/icons";
import { PlatinumIcon } from "../sidebar";

export default function PhysicalCard({ card }) {
  const { cardholderName, cardNumber, expiryDate } = card;

  return (
    <div className="bg-white border border-[#E1E4EA] rounded-[16px] p-4 font-[family-name:var(--font-inter)] shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] relative overflow-hidden">
      {/* Card Header */}
      <div className="relative z-10 flex justify-between items-center font-[family-name:var(--font-inter)] mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <CardIconn />

            <span className="text-base font-medium text-[#0E121B] ">
              Physical Card
            </span>
          </div>
        </div>
        <div className="h-8 px-2.5 bg-white border border-[#E1E4EA] rounded-[8px] shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] text-sm leading-5 tracking-[-0.084px] flex items-center justify-center">
          <span className="text-[#525866] leading-5">Details</span>
        </div>
      </div>
      <div className="border border-[#2A2A2A] rounded-[16px] p-5  bg-black shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] h-[188px] flex justify-between  flex-col relative">
        <div className="absolute top-0 right-0">
          <Line1 />
        </div>
        <div className="absolute -top-[4px] right-0">
          <Line2 />
        </div>
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center">
              <PlatinumIcon />
              <VerveIcon />
            </div>
          </div>
          <MastercardIcon />
        </div>

        <div className="relative z-10">
          <h3 className="text-sm text-white leading-5 tracking-[-0.084px] mb-1">
            Cardholder Name
          </h3>
          <div className="flex items-end justify-between">
            <h2 className="text-[24px] font-medium text-white -mb-[2px] font-[family-name:var(--font-geist)] leading-8">
              Arthur Taylor
            </h2>
          </div>
        </div>
      </div>
      <div className="space-y-3 mt-4 font-[family-name:var(--font-inter)]">
        <div className="flex justify-between items-center text-sm text-[#525866] ">
          <span>Card Number</span>
          <span className=" text-[#0E121B] font-medium">{cardNumber}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-[#525866]">
          <span>Expiry Date</span>
          <span className=" text-[#0E121B] font-medium">{expiryDate}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-[#525866]">
          <span>CVC</span>
          <span className=" text-[#0E121B] font-medium">• • •</span>
        </div>
        <div className="flex justify-between items-center text-sm text-[#525866]">
          <span>Spending Limit</span>
          <span className=" text-[#0E121B] font-medium">$12,000.00</span>
        </div>
      </div>
    </div>
  );
}
