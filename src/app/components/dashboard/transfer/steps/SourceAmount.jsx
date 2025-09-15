"use client";

import { Button } from "@/app/components/ui/button";
import {
  AlertIcon,
  BankLine,
  CaretDown,
  CaretDownIcon,
  CloseModal,
  Pattern,
  SourceAmountIcon,
} from "@/app/components/ui/jsx/icons";
import Link from "next/link";
import React, { useState } from "react";

const SourceAmount = ({ transferData, updateTransferData, onNext, onBack }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [showFundingDropdown, setShowFundingDropdown] = useState(false);

  const fundingSources = [
    {
      id: "checking",
      name: "Checking",
      account: "••0123",
      available: "$15,000.00",
      icon: "bank",
    },
    {
      id: "savings",
      name: "Savings",
      account: "••0456",
      available: "$25,000.00",
      icon: "bank",
    },
  ];

  const selectedSource = fundingSources[0]; // Default to first source

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(value);
    updateTransferData({ amount: value });
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setDescription(value);
      updateTransferData({ description: value });
    }
  };

  const handleRecurringToggle = () => {
    setIsRecurring(!isRecurring);
    updateTransferData({ isRecurring: !isRecurring });
  };

  const handleNext = () => {
    if (amount && parseFloat(amount) > 0) {
      onNext();
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
          Source & Amount
        </h1>
        <p className="text-[#525866] text-base leading-6 tracking-[-0.176px]">
          Select a payment method and see recipient bank details.
        </p>
      </div>

      <div className="flex justify-center items-center relative ">
        <div className="  w-[352px]">
          <div className="my-2 bg-white border border-[#E1E4EA] rounded-[20px] pt-4 ">
            <div className="mb-4">
              <div className="relative">
                <button
                  onClick={() => setShowFundingDropdown(!showFundingDropdown)}
                  className="flex justify-between items-center w-full px-5"
                >
                  <div className="flex items-center space-x-[14px]">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <BankLine />
                    </div>
                    <div>
                      <div className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px]">
                        {selectedSource.name} {selectedSource.account}
                      </div>
                      <div className="text-xs text-[#525866] leading-4 tracking-[-0.176px] mt-1">
                        Available: {selectedSource.available}
                      </div>
                    </div>
                  </div>
                  <div className="w- h-5 rounded-[6px] flex justify-center items-center bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)]">
                    <CaretDownIcon />
                  </div>
                </button>

                {showFundingDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {fundingSources.map((source) => (
                      <button
                        key={source.id}
                        onClick={() => setShowFundingDropdown(false)}
                        className="w-full px-4 py-4 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center space-x-3"
                      >
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {source.name} {source.account}
                          </div>
                          <div className="text-sm text-gray-500">
                            Available: {source.available}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Amount Section */}
            <div className="">
              <div className="">
                <h3 className=" bg-[#F5F7FA] px-4 flex items-center text-sm font-medium text-gray-500 uppercase tracking-wide  h-[28px]">
                  Recipient Receives
                </h3>
                <div className="px-4 mt-4">
                  {" "}
                  <div className="flex items-center space-x-[1px] mb-1">
                    <label className="text-sm font-medium text-[#0E121B]">
                      Enter Amount
                    </label>
                    <AlertIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="$ 0.00"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full px-3 h-[40px] border border-gray-300 text-[#99A0AE] text-sm outline-none rounded-[10px] "
                  />
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="px-4 mt-3 pb-4 border-b border-[#E1E4EA]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description* (Optional)
              </label>
              <div className="relative">
                <input
                  value={description}
                  onChange={handleDescriptionChange}
                  type="text"
                  className="w-full px-4 h-[98px] border border-gray-300 rounded-[10px] outline-none resize-none"
                />
                <div className="absolute bottom-2 right-2 flex items-center space-x-1.5 text-xs text-[#99A0AE]">
                  <span>{description.length}/200</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M9.11111 2L2 9.11111M10 6.44444L6.44444 10"
                      stroke="#99A0AE"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Recurring Payment Toggle */}
            <div className="px-4 h-[52px] flex items-center">
              <div className="flex w-full items-center gap-2.5">
                <button
                  onClick={handleRecurringToggle}
                  className={`relative inline-flex h-[16px] w-[28px] items-center rounded-full transition-colors ${
                    isRecurring ? "bg-[#335CFF]" : "bg-[#E1E4EA]"
                  }`}
                >
                  <span
                    className={` h-3 w-3 transform rounded-full bg-white transition-transform flex items-center justify-center ${
                      isRecurring ? "translate-x-[14px]" : "translate-x-[2px]"
                    }`}
                  >
                    <div className="w-1 h-1 bg-[#E1E4EA] rounded-full"></div>
                  </span>
                </button>
                <span className="text-sm font-medium text-[#0E121B] leading-5 tracking-[-0.084px]">
                  Recurring payment
                </span>
              </div>
            </div>
            <div className="p-4 flex justify-between gap-4 border-t border-[#E1E4EA]">
              <Button
                onClick={onBack}
                variant="outline"
                className="w-full h-[40px] flex justify-center items-center"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                variant="default"
                className="w-full h-[40px] flex justify-center items-center"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceAmount;
