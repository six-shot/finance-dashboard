"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  CaretDown,
  ExchangeIcon,
  SwapIcon,
} from "@/app/components/ui/jsx/icons";

export default function Exchange() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("100.00");
  const [availableBalance] = useState("16,058.94");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const exchangeRate = 0.94;
  const taxRate = 0.02;
  const feeRate = 0.01;

  const amountNum = parseFloat(amount);
  const tax = amountNum * taxRate;
  const fee = amountNum * feeRate;
  const totalAmount = (amountNum - tax - fee) * exchangeRate;

  return (
    <div className="bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]  h-full rounded-[16px] p-4">
      <div className="flex justify-between items-center pb-4 ">
        <div className="flex items-center gap-2">
          <ExchangeIcon />
          <h5 className="text-base font-medium leading-6 tracking-[-0.176px] text-[#0E121B]">
            Exchange
          </h5>
        </div>
        <Button
          variant="outline"
          className="flex gap-[2px] px-2.5 h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px]"
        >
          Currencies
        </Button>
      </div>

      {/* Currency Selection */}
      <div className="flex items-center h-10 justify-between border border-[#E1E4EA] rounded-t-[10px]">
        <div className="h-full py-2 px-4 flex w-full items-center justify-between">
          {/* From Currency */}

          <div className="flex items-center gap-2 ">
            <div className="w-[15px] h-[15px] rounded-full bg-black flex-shrink-0"></div>
            <span className="font-medium text-gray-900">{fromCurrency}</span>
            <div className="w-[18px] h-[18px] rounded-full flex justify-center items-center bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]">
              {" "}
              <CaretDown />
            </div>
          </div>

          {/* Swap Button */}
          <button onClick={handleSwap} className="mx-4 p-2  transition-colors">
            <SwapIcon />
          </button>

          {/* To Currency */}
          <div className="flex items-center gap-2 ">
            <div className="w-[15px] h-[15px] rounded-full bg-black flex-shrink-0"></div>
            <span className="font-medium text-gray-900">{toCurrency}</span>
            <div className="w-[18px] h-[18px] rounded-full flex justify-center items-center bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]">
              {" "}
              <CaretDown />
            </div>
          </div>
        </div>
      </div>

      {/* Amount Display */}
      <div className="border-t-0 border border-[#E1E4EA] p-4 flex flex-col justify-center items-center">
        <div className="text-[32px] font-bold text-[#0E121B] font-[family-name:var(--font-geist)] leading-10">
          ${amount}
        </div>
        <div className="text-sm text-[#525866] mt-1 leading-5">
          Available: <span className="text-[#0E121B]">$16,058.94</span>
        </div>
      </div>

      {/* Exchange Rate */}
      <div className="text-center h-[28px] rounded-b-[10px] border-t-0 border border-[#e1e4ea] bg-[#f5f7fa] flex items-center justify-center">
        <div className="text-sm text-[#525866]  leading-5">
          1 {fromCurrency} ={" "}
          <span className="text-[#0E121B]">
            {exchangeRate} {toCurrency}
          </span>
        </div>
      </div>

      {/* Fees and Total */}
      <div className="space-y-2.5 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-[#525866] text-xs">Tax (2%)</span>
          <span className="font-medium text-[#0e121b] text-xs">
            ${tax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#525866] text-xs">Exchange fee (1%)</span>
          <span className="font-medium text-[#0e121b] text-xs">
            ${fee.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center  ">
          <span className="text-[#525866] text-xs">Total amount</span>
          <span className="font-medium text-[#0e121b] text-xs">
            €{totalAmount.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Exchange Button */}
      <Button variant="outline" className="w-full h-[36px] mt-6 flex items-center justify-center">
        <ExchangeIcon />
        Exchange
      </Button>
    </div>
  );
}
