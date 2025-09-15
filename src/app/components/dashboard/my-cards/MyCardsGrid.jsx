"use client";

import React, { useState } from "react";
import VirtualCard from "./VirtualCard";
import PhysicalCard from "./PhysicalCard";
import FilterBar from "./FilterBar";

export default function MyCardsGrid() {
  const [activeTab, setActiveTab] = useState("All");
  // Sample card data
  const virtualCards = [
    {
      type: "Savings Card",
      balance: "$16,058.94",
      cardNumber: "•••• 1234",
      expiryDate: "06/27",
      status: "Active",
    },
    {
      type: "Traveling Card",
      balance: "$16,058.94",
      cardNumber: "•••• 2345",
      expiryDate: "04/23",
      status: "Expired",
    },
  ];

  const physicalCards = [
    {
      cardholderName: "Arthur Taylor",
      cardNumber: "•••• 3456",
      expiryDate: "08/28",
    },
  ];

  return (
    <div className="mt-6">
      <FilterBar>
        <div className="h-[36px] bg-[#F5F7FA] rounded-[10px] p-1 ">
          <button
            onClick={() => setActiveTab("All")}
            className={`h-full text-sm font-medium rounded-md transition-colors w-[74px] text-[#0E121B] leading-5 cursor-pointer ${
              activeTab === "All"
                ? "bg-[#FFF] shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] "
                : "text-[#99A0AE]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("Virtual")}
            className={`h-full text-sm font-medium rounded-md transition-colors w-[74px] text-[#0E121B] leading-5 cursor-pointer ${
              activeTab === "Virtual"
                ? "bg-[#FFF] shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] "
                : "text-[#99A0AE]"
            }`}
          >
            Virtual
          </button>
          <button
            onClick={() => setActiveTab("Physical")}
            className={`h-full text-sm font-medium rounded-md transition-colors w-[74px] text-[#0E121B] leading-5 cursor-pointer ${
              activeTab === "Physical"
                ? "bg-[#FFF] shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)] "
                : "text-[#99A0AE]"
            }`}
          >
            Physical
          </button>
        </div>
      </FilterBar>

      {/* Card Content based on active tab */}
      <div className="mt-6">
        {" "}
        {activeTab === "All" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {virtualCards.map((card, index) => (
              <VirtualCard key={`virtual-${index}`} card={card} />
            ))}
            {physicalCards.map((card, index) => (
              <PhysicalCard key={`physical-${index}`} card={card} />
            ))}
          </div>
        )}
        {activeTab === "Virtual" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {virtualCards.map((card, index) => (
              <VirtualCard key={`virtual-${index}`} card={card} />
            ))}
          </div>
        )}
        {activeTab === "Physical" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicalCards.map((card, index) => (
              <PhysicalCard key={`physical-${index}`} card={card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
