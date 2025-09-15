"use client";

import React, { useState } from "react";
import Modal from "@/app/components/ui/Modal";
import { Button } from "@/app/components/ui/button";
import {
  CardIcon,
  CheckIcon,
  Line1,
  Line2,
  MastercardIcon,
  VerveIcon,
  CardIconn,
  ExpiredIcon,
  PlusIcon,
  Netflix,
  RentalIcon,
  Grocery,
  Clock,
} from "@/app/components/ui/jsx/icons";
import { PlatinumIcon } from "../sidebar";

const CardDetailsModal = ({ isOpen, onClose, card, cardType = "virtual" }) => {
  const {
    type,
    balance,
    cardNumber,
    expiryDate,
    status,
    spendingLimit,
    cardholderName,
  } = card;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      icon: <Netflix />,
      title: "Netflix Cashback",
      subtitle: "Cashback of September, 2023",
      amount: "$36.24",
      date: "Sep 18",
      type: "credit",
    },
    {
      id: 2,
      icon: <RentalIcon />,
      title: "Rental Income",
      subtitle: "Rental payment from Mr. Dudley.",
      amount: "$800.00",
      date: "Sep 17",
      type: "credit",
    },
    {
      id: 3,
      icon: <Grocery />,
      title: "Grocery Shopping",
      subtitle: "Purchase of monthly groceries.",
      amount: "$84.14",
      date: "Sep 16",
      type: "debit",
    },
    {
      id: 4,
      icon: <Netflix />,
      title: "Netflix Cashback",
      subtitle: "Cashback of September, 2023",
      amount: "$36.24",
      date: "Sep 18",
      type: "credit",
    },
    {
      id: 5,
      icon: <RentalIcon />,
      title: "Rental Income",
      subtitle: "Rental payment from Mr. Dudley.",
      amount: "$800.00",
      date: "Sep 17",
      type: "credit",
    },
    {
      id: 6,
      icon: <Grocery />,
      title: "Grocery Shopping",
      subtitle: "Purchase of monthly groceries.",
      amount: "$84.14",
      date: "Sep 16",
      type: "debit",
    },
  ];

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % 3); // Assuming 3 cards max
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={cardType === "virtual" ? "Virtual Card" : "Physical Card"}
      fullHeight={true}
      size="sm"
    >
      <div className="space-y-6 h-full font-[family-name:var(--font-inter)] ">
        {/* Card Display Section */}
        <div
          className={`border rounded-[16px] p-5 shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] h-[200px] flex justify-between flex-col relative ${
            cardType === "virtual"
              ? "bg-white border-[#E1E4EA]"
              : "bg-black border-[#2A2A2A]"
          }`}
        >
          <div className="absolute top-0 right-0">
            <Line1 />
          </div>
          <div className="absolute -top-[4px] right-0">
            <Line2 />
          </div>

          {/* Card Header */}
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                {cardType === "virtual" ? <CardIcon /> : <PlatinumIcon />}
                <VerveIcon />
              </div>
              {cardType === "virtual" && (
                <div className="pl-1 pr-2 h-[24px] flex gap-1 items-center border border-[#E1E4EA] rounded-[6px]">
                  {status === "Active" ? <CheckIcon /> : <ExpiredIcon />}
                  <h6 className="text-xs font-medium text-[#525866]">
                    {status}
                  </h6>
                </div>
              )}
            </div>
            <MastercardIcon />
          </div>

          {/* Card Content */}
          <div className="relative z-10">
            <h3
              className={`text-sm leading-5 tracking-[-0.084px] mb-1 ${
                cardType === "virtual" ? "text-[#525866]" : "text-white"
              }`}
            >
              {cardType === "virtual" ? type : "Cardholder Name"}
            </h3>
            <div className="flex items-end justify-between">
              <h2
                className={`text-[32px] font-medium -mb-[2px] font-[family-name:var(--font-geist)] ${
                  cardType === "virtual" ? "text-[#0E121B]" : "text-white"
                }`}
              >
                {cardType === "virtual"
                  ? balance
                  : cardholderName || "Arthur Taylor"}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={prevCard}
                  className="w-6 h-6 rounded-[6px] border border-[#E1E4EA] flex items-center justify-center hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextCard}
                  className="w-6 h-6 rounded-[6px] border border-[#E1E4EA] flex items-center justify-center hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Information */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm text-[#525866]">
            <span>Card Number</span>
            <span className="text-[#0E121B] font-medium">{cardNumber}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-[#525866]">
            <span>Expiry Date</span>
            <span className="text-[#0E121B] font-medium">{expiryDate}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-[#525866]">
            <span>CVC</span>
            <span className="text-[#0E121B] font-medium">• • •</span>
          </div>
          <div className="flex justify-between items-center text-sm text-[#525866]">
            <span>Spending Limit (Monthly)</span>
            <span className="text-[#0E121B] font-medium">
              {spendingLimit || "$12,000.00"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="flex-shrink-0 text bg-blue-600 hover:bg-blue-700 text-white">
            <div className="[&_svg_path]:fill-white">
              <PlusIcon />
            </div>
            Fund card
          </Button>
          <Button variant="outline" className="w-full text-nowrap">
            Freeze card
          </Button>
          <Button
            variant="outline"
            className="w-full flex justify-center items-center"
          >
            More
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="pb-4">
          <h3 className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px] leading-4 mb-2">
            RECENT TRANSACTIONS
          </h3>
          <div className="space-y-2">
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
          <div className="mt-4">
            <Button
              variant="outline"
              className="w-full h-[36px] flex gap-1 justify-center items-center "
            >
              <Clock />
              See All Transactions
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetailsModal;
