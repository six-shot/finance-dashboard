"use client";

import React from "react";
import Modal from "@/app/components/ui/Modal";
import { Button } from "@/app/components/ui/button";
import {
  MoneyTransfer,
  WireIcon,
  ACHIcon,
  InvestmentIcon,
} from "@/app/components/ui/jsx/icons";

const TransactionDetailsModal = ({ isOpen, onClose, transaction }) => {
  if (!transaction) return null;

  const {
    id,
    name,
    amount,
    account,
    date,
    paymentMethod,
    paymentIcon,
    type,
    avatar,
  } = transaction;

  // Generate transaction ID
  const transactionId = `APX${Math.random().toString().substr(2, 7)}`;

  // Generate fee (2% of amount for expenses, 0 for income)
  const fee =
    type === "expense" ? (Math.abs(amount) * 0.02).toFixed(2) : "0.00";

  // Format date and time
  const formattedDateTime = `${date} at ${
    Math.floor(Math.random() * 12) + 1
  }:${Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, "0")}`;

  // Generate bank description
  const bankDescription = `APEXLLC_V84G2H16D • REF #${
    Math.floor(Math.random() * 90000) + 10000
  }`;

  const getPaymentIcon = () => {
    if (paymentIcon === InvestmentIcon) return <InvestmentIcon />;
    if (paymentMethod === "Wire") return <WireIcon />;
    if (paymentMethod === "Money Transfer") return <MoneyTransfer />;
    if (paymentMethod === "ACH") return <ACHIcon />;
    return <MoneyTransfer />;
  };

  const getAvatarColor = () => {
    if (avatar === "J") return "bg-gray-400";
    if (avatar === "S") return "bg-yellow-400";
    if (avatar === "E") return "bg-gray-400";
    if (avatar === "M") return "bg-purple-400";
    return "bg-blue-400";
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Transaction Details"
      size="sm"
      className="right-0 top-0 h-full transform translate-x-0"
    >
      <div className="space-y-6 h-full font-[family-name:var(--font-inter)]">
        {/* AMOUNT & ACCOUNT Section */}
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px] leading-4">
            AMOUNT & ACCOUNT
          </h3>
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-[#0E121B]">
              {amount < 0 ? "-" : ""}${Math.abs(amount).toFixed(2)}
            </p>
            <p className="text-sm text-[#0E121B]">
              {account} •• {Math.floor(Math.random() * 9000) + 1000}
            </p>
          </div>
        </div>

        <div className="border-t border-[#E1E4EA]"></div>

        {/* TO Section */}
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px] leading-4">
            TO
          </h3>
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${getAvatarColor()}`}
            >
              {avatar || name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-[#0E121B] text-sm">{name}</p>
              <p className="text-xs text-[#525866]">
                A-{Math.floor(Math.random() * 9000000) + 1000000}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E1E4EA]"></div>

        {/* DETAILS Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px] leading-4">
            DETAILS
          </h3>
          <div className="space-y-3">
            {/* Payment Method */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px]">
                PAYMENT METHOD
              </span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border border-[#E1E4EA] bg-white shadow-sm rounded-full flex items-center justify-center">
                  {getPaymentIcon()}
                </div>
                <span className="text-sm text-[#0E121B]">{paymentMethod}</span>
              </div>
            </div>

            {/* Transaction ID */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px]">
                TRANSACTION ID
              </span>
              <span className="text-sm text-[#0E121B]">{transactionId}</span>
            </div>

            {/* Date & Time */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px]">
                DATE & TIME
              </span>
              <span className="text-sm text-[#0E121B]">
                {formattedDateTime}
              </span>
            </div>

            {/* Fee */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px]">
                FEE
              </span>
              <span className="text-sm text-[#0E121B]">${fee}</span>
            </div>

            {/* Bank Description */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-[#99A0AE] uppercase tracking-[0.48px]">
                BANK DESCRIPTION
              </span>
              <span className="text-sm text-[#0E121B] text-right max-w-[200px]">
                {bankDescription}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E1E4EA]"></div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            className="flex-1 flex items-center gap-2 justify-center h-10"
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Repeat</span>
          </Button>
          <Button
            variant="outline"
            className="flex-1 flex items-center gap-2 justify-center h-10"
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
            <span>Share</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionDetailsModal;
