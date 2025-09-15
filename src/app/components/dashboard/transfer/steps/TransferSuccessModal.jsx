"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import { CloseModal, Pattern } from "@/app/components/ui/jsx/icons";
import Link from "next/link";

const TransferSuccessModal = ({ transferData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(2,13,23,0.24)] backdrop-blur-[5px] flex items-center justify-center z-50 p-4">
      <div className="h-full flex flex-col relative max-w-md w-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <Pattern />
        </div>

        {/* Close Button */}
        <Link href="/dashboard" className="absolute top-6 right-8">
          <CloseModal />
        </Link>

        {/* Content */}
        <div className="flex justify-center items-center relative flex-1">
          <div className="w-[352px]">
            <div className="my-2 bg-white border border-[#E1E4EA] rounded-[20px] py-8">
              {/* Success Icon */}
              <div className="text-center mb-6">
                <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto mb-4 bg-green-50">
                  <div className="w-[64px] h-[64px] bg-green-500 rounded-full flex justify-center items-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h1 className="text-[24px] leading-[32px] text-[#0E121B] font-[family-name:var(--font-geist)] mt-2 mb-1">
                  Transfer Successful!
                </h1>
                <p className="text-[#525866] text-base leading-6 tracking-[-0.176px]">
                  Your money has been sent successfully.
                </p>
              </div>

              {/* Transfer Details */}
              <div className="px-4 mb-6">
                <div className="bg-[#F5F7FA] rounded-[10px] p-4">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[#0E121B] mb-1">
                      ${transferData.amount || "0.00"}
                    </div>
                    <div className="text-sm text-[#525866]">
                      Sent to {transferData.recipient?.name || "Recipient"}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#525866]">Transaction ID:</span>
                      <span className="text-[#0E121B] font-medium">
                        #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#525866]">Date:</span>
                      <span className="text-[#0E121B] font-medium">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#525866]">Time:</span>
                      <span className="text-[#0E121B] font-medium">
                        {new Date().toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-4 flex gap-3">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="flex-1 h-[40px] flex justify-center items-center"
                >
                  View Details
                </Button>
                <Link href="/dashboard" className="flex-1">
                  <Button
                    variant="default"
                    className="w-full h-[40px] flex justify-center items-center"
                  >
                    Done
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSuccessModal;
