"use client";

import { Button } from "@/app/components/ui/button";
import {
  CaretDownIcon,
  CloseModal,
  Pattern,
  PlusIcon,
  RecipientIcon,
  SearchIcon,
} from "@/app/components/ui/jsx/icons";

import Link from "next/link";
import React, { useState } from "react";

const RecipientSelection = ({
  transferData,
  updateTransferData,
  onNext,
  onBack,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  const savedRecipients = [
    {
      id: "A-52112",
      name: "James Brown",
      contact: "james@alignui.com",
      avatar: "/avatar.png",
      hasStar: true,
    },
    {
      id: "A-52132",
      name: "Sophia Williams",
      contact: "+44 01 2345 6789",
      avatar: "/avatar.png",
      hasStar: false,
    },
    {
      id: "A-52184",
      name: "Emma Wright",
      contact: "james@alignui.com",
      avatar: null,
      initials: "EW",
      hasStar: false,
    },
    {
      id: "A-52114",
      name: "Matthew Johnson",
      contact: "+1 (456) 789-0123",
      avatar: null,
      initials: "MJ",
      hasStar: false,
    },
  ];

  const filteredRecipients = savedRecipients.filter(
    (recipient) =>
      recipient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipient.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRecipientSelect = (recipient) => {
    setSelectedRecipient(recipient);
    updateTransferData({ recipient });
    // Automatically move to next step when recipient is selected
    onNext();
  };

  const handleNext = () => {
    if (selectedRecipient) {
      onNext();
    }
  };

  return (
    <div className="h-full flex flex-col  relative">
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
            <RecipientIcon />
          </div>
        </div>
        <h1 className="text-[24px] leading-[32px]  text-[#0E121B] font-[family-name:var(--font-geist)] mt-2 mb-1">
          Recipient Selection
        </h1>
        <p className="text-[#525866] text-base leading-6 tracking-[-0.176px]">
          Select who will receive your money transfer.
        </p>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center relative ">
        <div className="  w-[352px]">
          {/* Search Section */}
          <div className="">
            <label className="block text-sm font-medium leading-5 tracking-[-0.084px] text-[#0E121B] mb-2">
              Choose Recipient
            </label>
            <div className="flex items-center gap-3">
              <div className="w-full h-[40px] border border-[#E1E4EA] rounded-[10px] shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] px-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {" "}
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-full outline-none bg-transparent text-sm text-[#99A0AE] leading-5"
                  />
                </div>
                <div className="h-[20px] px-1.5 bg-white border border-[#E1E4EA] rounded text-sm text-[#99A0AE] ">
                  ⌘1
                </div>
              </div>
            </div>
          </div>

          {/* Saved Recipients */}
          <div className="mt-3 bg-white border border-[#E1E4EA] rounded-[20px] py-3 px-2">
            <h3 className="text-xs font-medium text-[#99A0AE] leading-4 uppercase tracking-[0.48px] px-2 py-1 ">
              Saved Recipients
            </h3>
            <div className="mt-1">
              {filteredRecipients.map((recipient, index) => (
                <div
                  key={recipient.id}
                  onClick={() => handleRecipientSelect(recipient)}
                  className={`h-[56px] flex items-center  justify-between cursor-pointer transition-all py-1 px-2 ${
                    index < filteredRecipients.length - 1
                      ? "border-b border-[#E1E4E4]"
                      : ""
                  } ${
                    selectedRecipient?.id === recipient.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        {recipient.avatar ? (
                          <img
                            src={recipient.avatar}
                            alt={recipient.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-sm">
                              {recipient.initials}
                            </span>
                          </div>
                        )}
                        {recipient.hasStar && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px]">
                          {recipient.name}
                        </div>
                        <div className="text-xs text-[#525866] leading-4 tracking-[-0.176px] mt-1">
                          {recipient.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-5 px-2 bg-[#F2F5F8] rounded-full flex items-center justify-center text-xs text-[#525866] leading-4 tracking-[-0.176px]">
                    {recipient.id}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Recipient Button */}
          <div className="py-2">
            {" "}
            <Button
              variant="outline"
              className="w-full flex justify-center items-center "
            >
              <PlusIcon />
              New Recipient
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientSelection;
