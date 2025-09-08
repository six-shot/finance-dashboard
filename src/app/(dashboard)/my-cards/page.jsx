"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";

import {
  ArrowLeftIcon,
  CardIcon,
  CheckIcon,
  Clock,
  Grocery,
  Line1,
  Line2,
  MastercardIcon,
  Netflix,
  PlusIcon,
  RentalIcon,
  VerveIcon,
  WalletIcon,
} from "@/app/components/ui/jsx/icons";
import { ArrowRightIcon } from "@/app/components/ui/jsx/icons";
import Image from "next/image";

export default function MyCardsPage() {
  const [activeTab, setActiveTab] = useState("virtual");

  const transactions = [
    {
      id: 1,
      icon:<Netflix/>,
      title: "Netflix Cashback",
      subtitle: "Cashback of September, 2023",
      amount: "$36.24",
      date: "Sep 18",
      type: "credit",
    },
    {
      id: 2,
      icon:<RentalIcon/>,
      title: "Rental Income",
      subtitle: "Rental payment from Mr. Dudley.",
      amount: "$800.00",
      date: "Sep 17",
      type: "credit",
    },
    {
      id: 3,
      icon:<Grocery/>,
      title: "Grocery Shopping",
      subtitle: "Purchase of monthly groceries.",
      amount: "$84.14",
      date: "Sep 16",
      type: "debit",
    },
  ];

  return (
    <div className=" bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]  h-full rounded-[16px] p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <WalletIcon />
          <h5 className="text-base font-medium leading-6 tracking-[-0.176px] text-[#0E121B]">
            My Cards
          </h5>
        </div>
        <Button
          variant="outline"
          className="flex gap-1.5 h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px]"
        >
          <PlusIcon />
          Add Card
        </Button>
      </div>

      {/* Card Type Selector */}
      <div className="py-4">
        <div className="flex gap-1 bg-[#F5F7FA] rounded-[10px] p-1 h-[36px]">
          <button
            onClick={() => setActiveTab("virtual")}
            className={`flex-1   text-sm font-medium transition-colors ${
              activeTab === "virtual"
                ? " bg-white text-[#0E121B] shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] rounded-[6px]"
                : " text-[#99A0AE] hover:shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] bg-white hover:rounded-[6px]"
            }`}
          >
            Virtual <span className="text-[#99A0AE]">(2)</span>
          </button>
          <button
            onClick={() => setActiveTab("physical")}
            className={`flex-1  px-4   text-sm font-medium transition-colors ${
              activeTab === "physical"
                ? " text-[#0E121B] shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] rounded-[6px]"
                : " text-[#99A0AE] hover:shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] hover:bg-white hover:rounded-[6px]"
            }`}
          >
            Physical
          </button>
        </div>
      </div>

      {/* Main Card Display */}

      <div className="border border-[#E1E4EA] rounded-[16px] p-5  bg-white shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] h-[188px] flex justify-between  flex-col relative">
        <div className="absolute top-0 right-0">
          <Line1 />
        </div>
        <div className="absolute -top-[4px] right-0">
          <Line2 />
        </div>
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center">
              <CardIcon />
              <VerveIcon />
            </div>
            <div className="pl-1 pr-2 h-[24px] flex gap-1 items-center">
              <CheckIcon />
              <h6 className="text-xs font-medium text-[#525866]">Active</h6>
            </div>
          </div>
          <MastercardIcon />
        </div>

        <div className="relative z-10">
          <h3 className="text-sm text-[#525866] leading-5 tracking-[-0.084px] mb-1">
            Savings Card
          </h3>
          <div className="flex items-end justify-between">
            <h2 className="text-[32px] font-medium text-[#0E121B] -mb-[2px]">
              $16,058.94
            </h2>
            <div className="flex w-[48px] h-[24px] ">
              <button className="w-6 h-6  border border-[#E1E4EA] rounded-l-[6px]   flex justify-center items-center">
                <ArrowLeftIcon />
              </button>
              <button className="w-6 h-6  border border-[#E1E4EA] rounded-l-none rounded-r-[6px] flex justify-center items-center">
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="my-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm ">
            <span className="text-[#525866]">Card Number</span>
            <span className="text-[#0E121B] font-medium">• • • • 1234</span>
          </div>
          <div className="flex justify-between items-center text-sm ">
            <span className="text-[#525866]">Expiry Date</span>
            <span className="text-[#0E121B] font-medium">06/27</span>
          </div>
          <div className="flex justify-between items-center text-sm ">
            <span className="text-[#525866]">CVC</span>
            <span className="text-[#0E121B] font-medium">• • •</span>
          </div>
          <div className="flex justify-between items-center text-sm ">
            <span className="text-[#525866]">Spending Limit</span>
            <span className="text-[#0E121B] font-medium">$12,000.00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-between py-4 border-b border-[#E1E4EA]">
          <Button
            variant="outline"
            className="w-full flex justify-center gap-1.5 h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px]"
          >
            Unhide
          </Button>
          <Button
            variant="outline"
            className="w-full text-nowrap flex justify-center gap-1.5 h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px]"
          >
            Adjust Limit
          </Button>
          <Button
            variant="outline"
            className=" w-full flex justify-center gap-1.5 h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px]"
          >
            More
          </Button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="pb-4">
        <h3 className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px] leading-4 mb-2">
          RECENT TRANSACTIONS
        </h3>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center gap-3 h-[56px]"
            >
              <div className="w-10 h-10 bg-white border border-[#E1E4EA] rounded-full flex justify-center items-center">
                {transaction.icon}{" "}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px]">
                  {transaction.title}
                </h4>
                <p className="text-xs text-[#525866] leading-4">
                  {transaction.subtitle}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#0E121B] font-medium text-sm leading-5 tracking-[-0.084px]">
                  {transaction.type === "credit"
                    ? transaction.amount
                    : `-${transaction.amount}`}
                </p>
                <p className="text-xs text-[#525866] leading-4">
                  {transaction.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See All Transactions Button */}
      <div className="">
        <Button
          variant="outline"
          className="w-full h-[36px] flex gap-1 justify-center items-center "
        >
          <Clock />
          See All Transactions
        </Button>
      </div>
    </div>
  );
}
