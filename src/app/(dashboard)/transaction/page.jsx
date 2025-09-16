"use client";
import React, { useState } from "react";
import TransactionFilters from "../../components/dashboard/transaction/TransactionFilters";
import TransactionTable from "../../components/dashboard/transaction/TransactionTable";
import { useDashboard } from "../../contexts/DashboardContext";
import { ExportAs } from "../../components/ui/jsx/icons";
export default function TransactionPage() {
  const { state, actions } = useDashboard();
  const [selectedCard, setSelectedCard] = useState("All Cards");
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const cardTabs = ["All Cards", ...state.cards.virtual.map(card => card.title), ...state.cards.physical.map(card => card.title)];

  const handleExport = () => {
    actions.addNotification({
      id: Date.now(),
      title: "Export Started",
      message: "Your transaction data is being prepared for download",
      type: "info",
      timestamp: new Date().toISOString(),
      read: false
    });
    alert("Export functionality coming soon!");
  };

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-inter)] border-t border-[#E1E4EA] ">
      {/* Page Header Section */}
      <div className="my-4 border-b border-[#E1E4EA]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div>
            <h4 className="text-xl font-medium text-[#0E121B]">All Cards</h4>
            <p className="text-sm text-[#525866] mt-1">
              Monitor and manage transactions across all your cards.
            </p>
          </div>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
          >
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
