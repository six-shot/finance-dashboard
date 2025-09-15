"use client";

import { Button } from "@/app/components/ui/button";
import {
  AlertIcon,
  Bank,
  CaretDown,
  CloseModal,
  Pattern,
} from "@/app/components/ui/jsx/icons";

import Link from "next/link";
import React, { useState } from "react";

const MethodDetails = ({
  transferData,
  updateTransferData,
  onNext,
  onBack,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("Wire");
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);

  const paymentMethods = [
    { id: "wire", name: "Wire", description: "Same-day transfer, no fees." },
    { id: "ach", name: "ACH", description: "1-3 business days, no fees." },
    {
      id: "instant",
      name: "Instant",
      description: "Immediate transfer, $5 fee.",
    },
  ];

  const bankDetails = {
    name: "Summit Finance International",
    account: "••9876",
    routing: "••5432",
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method.name);
    setShowPaymentDropdown(false);
    updateTransferData({ paymentMethod: method });
  };

  const handleNext = () => {
    onNext();
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
            <Bank />
          </div>
        </div>
        <h1 className="text-[24px] leading-[32px]  text-[#0E121B] font-[family-name:var(--font-geist)] mt-2 mb-1">
          Method & Details
        </h1>
        <p className="text-[#525866] text-base leading-6 tracking-[-0.176px]">
          Select a payment method and see recipient bank details.
        </p>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center relative ">
        <div className="  w-[352px]">
          <div className="my-2 bg-white border border-[#E1E4EA] rounded-[20px] py-3 ">
            {/* Recipient Information */}
            {transferData.recipient && (
              <div className="mb-8 px-4">
                <div className="bg-white rounded-lg  ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-[14px]">
                      <div className="w-10 h-10 bg-[#E1E4EA] rounded-full flex items-center justify-center"></div>
                      <div>
                        <div className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px]">
                          {transferData.recipient.name}
                        </div>
                        <div className="text-xs text-[#525866] leading-4 tracking-[-0.176px] mt-1">
                          {transferData.recipient.contact}
                        </div>
                      </div>
                    </div>
                    <button className="text-[#335CFF] hover:text-[#335CFF] text-sm font-medium">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Method Section */}
            <div className="">
              <h3 className=" bg-[#F5F7FA] px-4 flex items-center text-sm font-medium text-gray-500 uppercase tracking-wide  h-[28px]">
                Payment Method
              </h3>
              <div className="flex items-center space-x-[5px] mt-5 px-5">
                {" "}
                <p className="text-sm text-[#0E121B]  leading-5 tracking-[-0.084px]  ">
                  Select Payment Method
                </p>
                <AlertIcon />
              </div>
              <div className="relative px-4 mt-1">
                <button
                  onClick={() => setShowPaymentDropdown(!showPaymentDropdown)}
                  className="w-full h-[40px] bg-white border border-gray-300 rounded-[10px] px-3  flex items-center justify-between text-left hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[#0E121B] text-sm leading-5 tracking-[-0.084px]">
                      {paymentMethod}
                    </span>
                  </div>
                  <CaretDown />
                </button>
                <div className="px-4">
                  {showPaymentDropdown && (
                    <div className="absolute top-full left-4 right-4 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => handlePaymentMethodSelect(method)}
                          className="w-full px-4 h-[56px] text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                        >
                          <div className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px]">
                            {method.name}
                          </div>
                          <div className="text-xs text-[#525866] leading-4 tracking-[-0.176px]">
                            {method.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <p className="mb-4 mt-1 text-xs text-[#525866] leading-4 tracking-[-0.176px]">
                  Same-day transfer, no fees.
                </p>
              </div>
            </div>

            {/* Recipient's Bank Details */}
            <div className="mb-4">
              <h3 className=" bg-[#F5F7FA] px-4 flex items-center text-sm font-medium text-gray-500 uppercase tracking-wide  h-[28px]">
                Recipient's Bank Details
              </h3>
              <div className="bg-white  px-4">
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#E1E4EA] rounded-full flex items-center justify-center"></div>
                    <div>
                      <div className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px]">
                        {bankDetails.name}
                      </div>
                      <div className="text-xs text-[#525866] leading-4 tracking-[-0.176px]">
                        Account {bankDetails.account} • Routing{" "}
                        {bankDetails.routing}
                      </div>
                    </div>
                  </div>
                  <button className="text-[#335CFF] hover:text-[#335CFF] text-sm font-medium">
                    Edit
                  </button>
                </div>
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

export default MethodDetails;
