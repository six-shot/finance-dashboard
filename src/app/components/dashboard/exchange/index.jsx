"use client";
import React, { useState } from "react";

import {
  CaretDown,
  ExchangeIcon,
  SwapIcon,
} from "../../ui/jsx/icons";
import { Button } from "../../ui/button";
import { useDashboard } from "../../../contexts/DashboardContext";

export default function Exchange() {
  const { state, actions } = useDashboard();
  const [fromCurrency, setFromCurrency] = useState(state.exchange.fromCurrency);
  const [toCurrency, setToCurrency] = useState(state.exchange.toCurrency);
  const [amount, setAmount] = useState("100.00");

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    actions.updateExchange({ fromCurrency: toCurrency, toCurrency: fromCurrency });
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleExchange = () => {
    const amountNum = parseFloat(amount);
    if (amountNum > 0 && amountNum <= state.user.totalBalance) {
      actions.addTransaction({
        id: Date.now(),
        icon: "exchange",
        title: "Currency Exchange",
        subtitle: `Exchanged ${formatCurrency(amountNum)} ${fromCurrency} to ${toCurrency}`,
        amount: amountNum,
        date: new Date().toISOString(),
        type: "debit",
        category: "exchange",
        status: "completed"
      });
      
      actions.addNotification({
        id: Date.now(),
        title: "Exchange Completed",
        message: `Successfully exchanged ${formatCurrency(amountNum)} ${fromCurrency} to ${toCurrency}`,
        type: "success",
        timestamp: new Date().toISOString(),
        read: false
      });
      
      alert("Exchange completed successfully!");
    } else {
      alert("Invalid amount or insufficient balance!");
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const exchangeRate = state.exchange.rates[`${fromCurrency}_${toCurrency}`] || 0.94;
  const taxRate = 0.02;
  const feeRate = 0.01;

  const amountNum = parseFloat(amount) || 0;
  const tax = amountNum * taxRate;
  const fee = amountNum * feeRate;
  const totalAmount = (amountNum - tax - fee) * exchangeRate;

  return (
    <div className="bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]  h-full rounded-[16px] flex justify-between flex-col p-3 sm:p-4">
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 gap-3 sm:gap-0">
          <div className="flex items-center gap-2">
            <ExchangeIcon />
            <h5 className="text-base font-medium leading-6 tracking-[-0.176px] text-[#0E121B]">
              Exchange
            </h5>
          </div>
          <Button
            variant="outline"
            className="flex gap-[2px] px-2.5 h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px] w-fit"
          >
            Currencies
          </Button>
        </div>

        {/* Currency Selection */}
        <div className="flex flex-col sm:flex-row items-center min-h-[40px] sm:h-10 justify-between border border-[#E1E4EA] rounded-t-[10px]">
          <div className="h-full py-2 px-3 sm:px-4 flex w-full items-center justify-between">
            {/* From Currency */}
            <div className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] rounded-full bg-black flex-shrink-0"></div>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                {fromCurrency}
              </span>
              <div className="w-[18px] h-[18px] rounded-full flex justify-center items-center bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]">
                <CaretDown />
              </div>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              className="mx-2 sm:mx-4 p-2 transition-colors"
            >
              <SwapIcon />
            </button>

            {/* To Currency */}
            <div className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] rounded-full bg-black flex-shrink-0"></div>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                {toCurrency}
              </span>
              <div className="w-[18px] h-[18px] rounded-full flex justify-center items-center bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]">
                <CaretDown />
              </div>
            </div>
          </div>
        </div>

        {/* Amount Display */}
        <div className="border-t-0 border border-[#E1E4EA] p-3 sm:p-4 flex flex-col justify-center items-center">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="text-2xl sm:text-[32px] font-bold text-[#0E121B] font-[family-name:var(--font-geist)] leading-8 sm:leading-10 text-center bg-transparent border-none outline-none w-full"
            placeholder="0.00"
            min="0"
            step="0.01"
          />
          <div className="text-xs sm:text-sm text-[#525866] mt-1 leading-4 sm:leading-5">
            Available: <span className="text-[#0E121B]">{formatCurrency(state.user.totalBalance)}</span>
          </div>
        </div>

        {/* Exchange Rate */}
        <div className="text-center h-[28px] rounded-b-[10px] border-t-0 border border-[#e1e4ea] bg-[#f5f7fa] flex items-center justify-center">
          <div className="text-xs sm:text-sm text-[#525866] leading-4 sm:leading-5">
            1 {fromCurrency} ={" "}
            <span className="text-[#0E121B]">
              {exchangeRate} {toCurrency}
            </span>
          </div>
        </div>

        {/* Fees and Total */}
        <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4">
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
          <div className="flex justify-between items-center">
            <span className="text-[#525866] text-xs">Total amount</span>
            <span className="font-medium text-[#0e121b] text-xs">
              €{totalAmount.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Exchange Button */}
      <Button
        onClick={handleExchange}
        variant="outline"
        className="w-full h-[36px] mt-4 sm:mt-6 flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <ExchangeIcon />
        Exchange
      </Button>
    </div>
  );
}
