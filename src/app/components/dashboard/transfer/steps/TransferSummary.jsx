"use client";

import { Button } from "@/app/components/ui/button";
import {
  CloseModal,
  Pattern,
  SourceAmountIcon,
} from "@/app/components/ui/jsx/icons";

import Link from "next/link";
import React, { useState } from "react";
import TransferSuccessModal from "./TransferSuccessModal";

const TransferSummary = ({
  transferData,
  updateTransferData,
  onNext,
  onBack,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSendMoney = () => {
    // Here you would typically send the transfer data to your backend
    console.log("Sending transfer:", transferData);
    // Show success modal instead of alert
    setShowSuccessModal(true);
  };

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard this transfer?")) {
      // Reset all data and go back to step 1
      updateTransferData({
        recipient: null,
        paymentMethod: null,
        bankDetails: null,
        fundingSource: null,
        amount: "",
        description: "",
        isRecurring: false,
      });
      onBack(); // This will go back to previous step
    }
  };

  return (
    <div className="h-full flex flex-col relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Pattern />
      </div>
      {/* Close Button */}
      <Link href="/dashboard" className="absolute top-6 right-8">
        <CloseModal />
      </Link>

      {/* Header */}
      <div className="text-center pt-[48px] pb-6">
        <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto mb-4 bg-gray">
          <div className="w-[64px] h-[64px] bg-white border border-[#E1E4EA] shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)] rounded-full flex justify-center items-center">
            <SourceAmountIcon />
          </div>
        </div>
        <h1 className="text-[24px] leading-[32px]  text-[#0E121B] font-[family-name:var(--font-geist)] mt-2 mb-1">
          Transfer Summary
        </h1>
        <p className="text-[#525866] text-base leading-6 tracking-[-0.176px]">
          Review summary and confirm it before finalizing your transfer.
        </p>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center relative ">
        <div className="  w-[352px]">
          <div className="my-2 bg-white border border-[#E1E4EA] rounded-[20px] pt-4 ">
            {/* Transfer Header */}
            <div className="text-center p-4">
              <div className="text-xs leading-4 tracking-[-0.176px] text-[#0E121B] mb-2">
                Wire to {transferData.recipient?.name || "Recipient"}
              </div>
              <div className="text-[32px] font-[family-name:var(--font-geist)] leading-10 tracking-[-0.16px] font-bold text-[#0E121B] mt-1">
                ${transferData.amount || "0.00"}
              </div>
            </div>

            {/* Recipient Details */}
            <div className="">
              <h3 className=" bg-[#F5F7FA] px-4 flex items-center text-sm font-medium text-gray-500 uppercase tracking-wide  h-[28px]">
                Recipient Receives
              </h3>
              <div className=" flex flex-col gap-2 p-4">
                <div className="flex justify-between">
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#525866]">
                    Recipient:
                  </span>
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#0E121B] font-medium">
                    {transferData.recipient?.name || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#525866]">
                    Bank:
                  </span>
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#0E121B] font-medium">
                    Summit Finance Intl.
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#525866]">
                    Account Number:
                  </span>
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#0E121B] font-medium">
                    123450123
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#525866]">
                    Routing Number:
                  </span>
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#0E121B] font-medium">
                    98765432
                  </span>
                </div>
              </div>
            </div>

            {/* Funding Source */}
            <div className="">
              <h3 className=" bg-[#F5F7FA] px-4 flex items-center text-sm font-medium text-gray-500 uppercase tracking-wide  h-[28px]">
                Funding Source
              </h3>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#525866]">
                    From:
                  </span>
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#0E121B] font-medium">
                    Apex Financial, Inc.
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#525866]">
                    Account:
                  </span>
                  <span className="text-sm leading-5 tracking-[-0.084px] text-[#0E121B] font-medium">
                    Checking ••0123
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            {transferData.description && (
              <div className="">
                <h3 className=" bg-[#F5F7FA] px-4 flex items-center text-sm font-medium text-gray-500 uppercase tracking-wide  h-[28px]">
                  Description
                </h3>
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="text-sm leading-5 tracking-[-0.084px] text-[#525866]">
                      Sender's Note:
                    </span>
                    <span className="text-sm leading-5 tracking-[-0.084px] text-[#0E121B] font-medium">
                      {transferData.description}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Recurring Payment */}
            {transferData.isRecurring && (
              <div className="">
                <div className="flex items-center space-x-2 text-sm text-gray-600 p-4">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>This is a recurring payment</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4 p-4 w-full gap-4 justify-between items-center border-t border-[#E1E4EA]">
              <Button
                onClick={handleDiscard}
                variant="outline"
                className="w-full h-[40px] flex justify-center items-center"
              >
                Discard
              </Button>
              <Button
                onClick={handleSendMoney}
                variant="default"
                className="w-full h-[40px] flex justify-center items-center"
              >
                Send Money
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-[#99A0AE] text-center px-4 pb-4 ">
              By clicking Send Money, I grant Apex permission to proceed with
              the detailed transaction.
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <TransferSuccessModal
          transferData={transferData}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default TransferSummary;
