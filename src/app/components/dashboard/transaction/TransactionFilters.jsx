"use client";
import React from "react";
import {
  CaretDownIcon,
  FilterIcon,
  SearchIcon,
  SortIcon,
} from "../../ui/jsx/icons";

const TransactionFilters = ({
  activeTab,
  setActiveTab,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) => {
  const tabs = ["All", "Income", "Expenses"];

  return (
    <div className="mb-4">
      {/* Tabs and Search/Filter/Sort on same line with justify-between */}
      <div className="flex items-center justify-between">
        {/* Left side - Tabs */}
        <div className="h-[36px] bg-[#F5F7FA] rounded-[10px] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-full text-sm font-medium rounded-md transition-colors w-[93px] text-[#0E121B] leading-5 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#FFF] shadow-[0_6px_10px_0_rgba(14,18,27,0.06),_0_2px_4px_0_rgba(14,18,27,0.03)]"
                  : "text-[#99A0AE]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right side - Search, Filter, Sort */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="w-[300px] h-[36px] border border-[#E1E4EA] rounded-lg shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] px-2.5 flex items-center justify-between">
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

          {/* Filter Button */}
          <button className="flex items-center gap-1 h-[36px] px-2 border border-[#E1E4EA] rounded-lg text-sm text-[#525866] ">
            <FilterIcon />
            <span>Filter</span>
          </button>

          {/* Sort Dropdown */}
          <button className="flex-shrink-0 flex items-center gap-2 px-2.5 py-2 border border-[#E1E4EA] rounded-lg text-sm text-[#525866] hover:bg-gray-50 h-[36px]">
            <SortIcon />
            <span className="text-[#0E121B] text-nowrap  px-2 text-sm leading-5 tracking-[-0.084px]">
              Sort by
            </span>
            <CaretDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;
