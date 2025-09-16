"use client";

import React from "react";
import {
  SearchIcon,
  FilterIcon,
  SortIcon,
  CaretDownIcon,
} from "../../ui/jsx/icons";

export default function FilterBar({ children }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 font-[family-name:var(--font-inter)]">
      {/* Left side - Card Type Tabs */}
      <div className="flex items-center gap-4">{children}</div>

      {/* Right side - Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="w-full sm:w-[250px] lg:w-[300px] h-[36px] border border-[#E1E4EA] rounded-lg shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] px-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full outline-none bg-transparent text-sm text-[#99A0AE] leading-5"
            />
          </div>
          <div className="hidden sm:block h-[20px] px-1.5 bg-white border border-[#E1E4EA] rounded text-sm text-[#99A0AE]">
            ⌘1
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Filter Button */}
          <button className="flex items-center gap-1 h-[36px] px-2 border border-[#E1E4EA] rounded-lg text-sm text-[#525866] hover:bg-gray-50 transition-colors">
            <FilterIcon />
            <span className="hidden sm:inline">Filter</span>
          </button>

          {/* Sort Dropdown */}
          <button className="flex items-center gap-2 px-2.5 py-2 border border-[#E1E4EA] rounded-lg text-sm text-[#525866] hover:bg-gray-50 transition-colors">
            <SortIcon />
            <span className="text-[#0E121B] px-2 text-sm leading-5 tracking-[-0.084px] hidden sm:inline">Sort by</span>
            <CaretDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
