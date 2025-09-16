"use client";
import React, { useState, useRef, useEffect } from "react";
import { CaretDown } from "./jsx/icons";

const Dropdown = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "Select...", 
  className = "",
  disabled = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`flex items-center justify-between w-full px-2.5 h-8 text-sm font-medium leading-5 tracking-[-0.084px] text-[#525866] border border-[#E1E4EA] rounded-md bg-white hover:bg-gray-50 transition-colors ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <CaretDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E1E4EA] rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={option.value || index}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                option.value === value ? "bg-blue-50 text-blue-700" : "text-gray-700"
              } ${option.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
