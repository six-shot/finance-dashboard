"use client";
import React, { useState } from "react";
import TransactionFilters from "../../components/dashboard/transaction/TransactionFilters";
import TransactionTable from "../../components/dashboard/transaction/TransactionTable";
import { ExportAs } from "@/app/components/ui/jsx/icons";
export default function TransactionPage() {
  const [selectedCard, setSelectedCard] = useState("All Cards");
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const cardTabs = ["All Cards", "Primary Card", "Business Card"];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-inter)] border-t border-[#E1E4EA] ">
      {/* Page Header Section */}
      <div className="my-4 border-b border-[#E1E4EA]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-xl font-medium text-[#0E121B]">All Cards</h4>
            <p className="text-sm text-[#525866] mt-1">
              Monitor and manage transactions across all your cards.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <ExportAs />
            Export As
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <TransactionFilters
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Transaction Table */}
      <TransactionTable
        searchTerm={searchTerm}
        activeTab={activeTab}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
}
