"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDashboard } from "../../../contexts/DashboardContext";
import {
  Search,
  CloseModal,
  Clock,
  CardIcon,
  ExportTransaction,
} from "../../ui/jsx/icons";

const SearchModal = ({ isOpen, onClose }) => {
  const { state } = useDashboard();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const modalRef = useRef(null);

  // Perform search as user types
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const results = performSearch(searchQuery.trim());
      setSearchResults(results);
      setIsSearching(false);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, state]);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const performSearch = (query) => {
    const results = [];
    const lowerQuery = query.toLowerCase();

    // Search transactions
    state.transactions.forEach((transaction) => {
      if (
        transaction.title.toLowerCase().includes(lowerQuery) ||
        transaction.subtitle.toLowerCase().includes(lowerQuery) ||
        transaction.category.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          type: "transaction",
          data: transaction,
          title: transaction.title,
          subtitle: transaction.subtitle,
          amount: transaction.amount,
          date: transaction.date,
        });
      }
    });

    // Search cards
    [...state.cards.virtual, ...state.cards.physical].forEach((card) => {
      if (
        card.title.toLowerCase().includes(lowerQuery) ||
        card.cardNumber.includes(query)
      ) {
        results.push({
          type: "card",
          data: card,
          title: card.title,
          subtitle: `Card ending in ${card.cardNumber}`,
          amount: card.balance,
          date: card.expiryDate,
        });
      }
    });

    return results;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleResultClick = (result) => {
    // Add notification about the search result
    state.actions.addNotification({
      id: Date.now(),
      title: "Search Result Selected",
      message: `Selected ${result.title} from search`,
      type: "info",
      timestamp: new Date().toISOString(),
      read: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed font-[family-name:var(--font-inter)] inset-0 bg-[rgba(2,13,23,0.24)] backdrop-blur-[5px] z-50 flex items-start justify-center pt-20 animate-in fade-in duration-200">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden animate-in slide-in-from-top-4 duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Search />
            <h3 className="text-lg font-semibold text-gray-900">Search</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <CloseModal />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transactions, cards, and more..."
            className="w-full px-4 h-[48px] outline-none  border text-[#525866] border-gray-300 rounded-lg "
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="max-h-64 overflow-y-auto">
          {isSearching ? (
            <div className="p-8 text-center text-gray-500">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              Searching...
            </div>
          ) : searchQuery.trim() ? (
            searchResults.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        {result.type === "transaction" ? (
                          <ExportTransaction />
                        ) : (
                          <CardIcon />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">
                          {result.title}
                        </h4>
                        <p className="text-sm text-gray-500 truncate">
                          {result.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {result.type === "transaction"
                            ? `${
                                result.data.type === "credit" ? "+" : "-"
                              }${formatCurrency(result.amount)}`
                            : formatCurrency(result.amount)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {result.type === "transaction"
                            ? formatDate(result.date)
                            : `Expires ${result.date}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="mx-auto mb-2 opacity-50" />
                <p>No results found for "{searchQuery}"</p>
                <p className="text-sm mt-1">
                  Try searching for transaction names, card titles, or amounts
                </p>
              </div>
            )
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Search className="mx-auto mb-2 opacity-50" />
              <p>Start typing to search...</p>
              <p className="text-sm mt-1">
                Search through transactions, cards, and more
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Press Esc to close</span>
            <span>{searchResults.length} results</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
