"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { useDashboard } from "../../../contexts/DashboardContext";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CardIcon,
  CheckIcon,
  Clock,
  Grocery,
  Line1,
  Line2,
  MastercardIcon,
  Netflix,
  Other,
  PlusIcon,
  RentalIcon,
  ShoppingBag,
  Utilities,
  VerveIcon,
  WalletIcon,
} from "../../ui/jsx/icons";
import Image from "next/image";
import { PlatinumIcon } from "../sidebar";
import Link from "next/link";

export default function Cards() {
  const { state, actions } = useDashboard();
  const [activeTab, setActiveTab] = useState("virtual");
  const [currentVirtualCard, setCurrentVirtualCard] = useState(0);
  const [currentPhysicalCard, setCurrentPhysicalCard] = useState(0);

  const virtualCards = state.cards.virtual;
  const physicalCards = state.cards.physical;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Format card number for display
  const formatCardNumber = (cardNumber) => {
    return `• • • • ${cardNumber}`;
  };

  // Format CVC for display
  const formatCVC = (cvc) => {
    return "• • •";
  };

  // Get recent transactions from global state
  const recentTransactions = state.transactions.slice(0, 3);

  // Icon mapping for transactions
  const getTransactionIcon = (iconType) => {
    const iconMap = {
      netflix: <Netflix />,
      rental: <RentalIcon />,
      grocery: <Grocery />,
      utilities: <Utilities />,
      shopping: <ShoppingBag />,
    };
    return iconMap[iconType] || <Other />;
  };

  // Format date for display
  const formatTransactionDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  // Navigation handlers
  const handlePreviousCard = () => {
    if (activeTab === "virtual") {
      setCurrentVirtualCard((prev) =>
        prev === 0 ? virtualCards.length - 1 : prev - 1
      );
    } else {
      setCurrentPhysicalCard((prev) =>
        prev === 0 ? physicalCards.length - 1 : prev - 1
      );
    }
  };

  const handleNextCard = () => {
    if (activeTab === "virtual") {
      setCurrentVirtualCard((prev) =>
        prev === virtualCards.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentPhysicalCard((prev) =>
        prev === physicalCards.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Get current card data
  const currentCard =
    activeTab === "virtual"
      ? virtualCards[currentVirtualCard]
      : physicalCards[currentPhysicalCard];

  // Card management functions
  const handleHideCard = () => {
    actions.updateCard(activeTab, currentCard.id, { status: "Hidden" });
    actions.addNotification({
      id: Date.now(),
      title: "Card Hidden",
      message: `${currentCard.title} has been hidden successfully`,
      type: "info",
      timestamp: new Date().toISOString(),
      read: false,
    });
  };

  const handleUnhideCard = () => {
    actions.updateCard(activeTab, currentCard.id, { status: "Active" });
    actions.addNotification({
      id: Date.now(),
      title: "Card Unhidden",
      message: `${currentCard.title} has been unhidden successfully`,
      type: "success",
      timestamp: new Date().toISOString(),
      read: false,
    });
  };

  const handleAdjustLimit = () => {
    const newLimit = prompt(
      "Enter new spending limit:",
      currentCard.spendingLimit
    );
    if (newLimit && !isNaN(parseFloat(newLimit))) {
      actions.updateCard(activeTab, currentCard.id, {
        spendingLimit: parseFloat(newLimit),
      });
      actions.addNotification({
        id: Date.now(),
        title: "Spending Limit Updated",
        message: `Spending limit for ${
          currentCard.title
        } updated to ${formatCurrency(parseFloat(newLimit))}`,
        type: "info",
        timestamp: new Date().toISOString(),
        read: false,
      });
    }
  };

  const handleMoreOptions = () => {
    const options = [
      "Freeze Card",
      "Block Card",
      "Change PIN",
      "View Statements",
      "Report Lost/Stolen",
    ];
    const choice = prompt(
      `Choose an option:\n${options
        .map((opt, i) => `${i + 1}. ${opt}`)
        .join("\n")}`
    );
    const optionIndex = parseInt(choice) - 1;

    if (optionIndex >= 0 && optionIndex < options.length) {
      const selectedOption = options[optionIndex];
      actions.addNotification({
        id: Date.now(),
        title: "Card Action",
        message: `${selectedOption} requested for ${currentCard.title}`,
        type: "info",
        timestamp: new Date().toISOString(),
        read: false,
      });
    }
  };

  return (
    <div className=" bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]  h-full rounded-[16px] p-4">
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
            Virtual{" "}
            <span className="text-[#99A0AE]">({virtualCards.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("physical")}
            className={`flex-1   text-sm font-medium transition-colors ${
              activeTab === "physical"
                ? " bg-white text-[#0E121B] shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] rounded-[6px]"
                : " text-[#99A0AE] hover:shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] bg-white hover:rounded-[6px]"
            }`}
          >
            Physical{" "}
            <span className="text-[#99A0AE]">({physicalCards.length})</span>
          </button>
        </div>
      </div>

      {/* Main Card Display */}
      {activeTab === "virtual" ? (
        <div
          className={`border rounded-[16px] p-5 bg-white shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] h-[188px] flex justify-between flex-col relative ${
            currentCard.status === "Hidden"
              ? "border-[#FF6B6B] opacity-75"
              : "border-[#E1E4EA]"
          }`}
        >
          <div className="absolute top-0 right-0">
            <Line1 />
          </div>
          <div className="absolute -top-[4px] right-0">
            <Line2 />
          </div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                <div>
                  {" "}
                  <CardIcon />
                </div>
                <VerveIcon />
              </div>
              <div
                className={`pl-1 pr-2 h-[24px] flex gap-1 items-center border rounded-[6px] ${
                  currentCard.status === "Hidden"
                    ? "border-[#FF6B6B] bg-[#FFF5F5]"
                    : "border-[#E1E4EA]"
                }`}
              >
                <CheckIcon />
                <h6
                  className={`text-xs font-medium ${
                    currentCard.status === "Hidden"
                      ? "text-[#FF6B6B]"
                      : "text-[#525866]"
                  }`}
                >
                  {currentCard.status}
                </h6>
              </div>
            </div>
            <MastercardIcon />
          </div>

          <div className="relative z-10">
            <h3 className="text-sm text-[#525866] leading-5 tracking-[-0.084px] mb-1">
              {currentCard.title}
            </h3>
            <div className="flex items-end justify-between">
              <h2 className="text-[32px] font-medium text-[#0E121B] -mb-[2px]">
                {formatCurrency(currentCard.balance)}
              </h2>
              <div className="flex w-[48px] h-[24px] ">
                <button
                  onClick={handlePreviousCard}
                  className="w-6 h-6  border border-[#E1E4EA] rounded-l-[6px]   flex justify-center items-center hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={handleNextCard}
                  className="w-6 h-6  border border-[#E1E4EA] rounded-l-none rounded-r-[6px] flex justify-center items-center hover:bg-gray-50 transition-colors"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border rounded-[16px] p-5 bg-black shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] h-[188px] flex justify-between flex-col relative ${
            currentCard.status === "Hidden"
              ? "border-[#FF6B6B] opacity-75"
              : "border-[#2A2A2A]"
          }`}
        >
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
              <div
                className={`pl-1 pr-2 h-[24px] flex gap-1 items-center rounded-[6px] ${
                  currentCard.status === "Hidden"
                    ? "border border-[#FF6B6B] bg-[#2A1A1A]"
                    : ""
                }`}
              >
                <CheckIcon />
                <h6
                  className={`text-xs font-medium ${
                    currentCard.status === "Hidden"
                      ? "text-[#FF6B6B]"
                      : "text-white"
                  }`}
                >
                  {currentCard.status}
                </h6>
              </div>
            </div>
            <MastercardIcon />
          </div>

          <div className="relative z-10">
            <h3 className="text-sm text-white leading-5 tracking-[-0.084px] mb-1">
              {currentCard.title}
            </h3>
            <div className="flex items-end justify-between">
              <h2 className="text-[32px] font-medium text-white -mb-[2px]">
                {formatCurrency(currentCard.balance)}
              </h2>
              <div className="flex w-[48px] h-[24px] ">
                <button
                  onClick={handlePreviousCard}
                  className="w-6 h-6  border border-[#404040] rounded-l-[6px]   flex justify-center items-center hover:bg-gray-800 transition-colors"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={handleNextCard}
                  className="w-6 h-6  border border-[#404040] rounded-l-none rounded-r-[6px] flex justify-center items-center hover:bg-gray-800 transition-colors"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card Details */}
      <div className="my-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm text-[#525866] ">
            <span>Card Number</span>
            <span className=" text-[#0E121B] font-medium">
              {formatCardNumber(currentCard.cardNumber)}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm text-[#525866]">
            <span>Expiry Date</span>
            <span className=" text-[#0E121B] font-medium">
              {currentCard.expiryDate}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm text-[#525866]">
            <span>CVC</span>
            <span className=" text-[#0E121B] font-medium">
              {formatCVC(currentCard.cvc)}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm text-[#525866]">
            <span>Spending Limit</span>
            <span className=" text-[#0E121B] font-medium">
              {formatCurrency(currentCard.spendingLimit)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex gap-3 justify-between py-4 border-b ${
            activeTab === "physical" ? "border-[#404040]" : "border-[#E1E4EA]"
          }`}
        >
          <Button
            onClick={
              currentCard.status === "Hidden"
                ? handleUnhideCard
                : handleHideCard
            }
            variant="outline"
            className="w-full flex justify-center gap-1.5 h-8 items-center text-sm font-medium leading-5 tracking-[-0.084px]  text-[#525866] border-[#404040] hover:bg-gray-50 transition-colors"
          >
            {currentCard.status === "Hidden" ? "Unhide" : "Hide"}
          </Button>
          <Button
            onClick={handleAdjustLimit}
            variant="outline"
            className="w-full text-nowrap flex justify-center gap-1.5 h-8 items-center text-sm font-medium leading-5 tracking-[-0.084px]  text-[#525866] border-[#404040] hover:bg-gray-50 transition-colors"
          >
            Adjust Limit
          </Button>
          <Button
            onClick={handleMoreOptions}
            variant="outline"
            className="w-full flex justify-center gap-1.5 h-8 items-center text-sm font-medium leading-5 tracking-[-0.084px]  text-[#525866] border-[#404040] hover:bg-gray-50 transition-colors"
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
          {recentTransactions.map((transaction) => (
            <Link key={transaction.id} href="/transaction" className="block">
              <div className="flex items-center gap-3 h-[56px] p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                <div className="w-10 h-10 bg-white border border-[#E1E4EA] rounded-full flex justify-center items-center group-hover:border-gray-300 transition-colors">
                  {getTransactionIcon(transaction.icon)}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px] group-hover:text-blue-600 transition-colors">
                    {transaction.title}
                  </h4>
                  <p className="text-xs text-[#525866] leading-4 group-hover:text-gray-600 transition-colors">
                    {transaction.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#0E121B] font-medium text-sm leading-5 tracking-[-0.084px] group-hover:text-blue-600 transition-colors">
                    {transaction.type === "credit"
                      ? `+${formatCurrency(transaction.amount)}`
                      : `-${formatCurrency(transaction.amount)}`}
                  </p>
                  <p className="text-xs text-[#525866] leading-4 group-hover:text-gray-600 transition-colors">
                    {formatTransactionDate(transaction.date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* See All Transactions Button */}
      <Link href="/transaction" className="">
        <Button
          variant="outline"
          className="w-full h-[36px] flex gap-1 justify-center items-center "
        >
          <Clock />
          See All Transactions
        </Button>
      </Link>
    </div>
  );
}
