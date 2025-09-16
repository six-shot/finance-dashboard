"use client";
import React, { useState } from "react";
import {
  ACHIcon,
  DoubleNextArrow,
  DoublePrevArrow,
  InvestmentIcon,
  MoneyTransfer,
  NextArrow,
  PrevArrow,
  ThreeDot,
  UpDownIcon,
  WireIcon,
} from "../../ui/jsx/icons";
import TransactionDetailsModal from "./TransactionDetailsModal";

const TransactionTable = ({ searchTerm, activeTab, sortBy, sortOrder }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  // Transaction data from the image
  const transactions = [
    {
      id: 1,
      icon: "chart",
      name: "Investment Return",
      amount: 560.0,
      type: "income",
      account: "Checking",
      date: "12 September",
      paymentMethod: "Wire",
      paymentIcon: InvestmentIcon,
    },
    {
      id: 2,
      icon: "avatar",
      name: "James Brown",
      amount: -35.2,
      type: "expense",
      account: "Ops Payroll",
      date: "12 September",
      paymentMethod: "Money Transfer",
      paymentIcon: "transfer",
      avatar: "J",
    },
    {
      id: 3,
      icon: "clock",
      name: "Stock Dividend",
      amount: 1250.0,
      type: "income",
      account: "AP",
      date: "12 September",
      paymentMethod: "ACH",
      paymentIcon: "bank",
    },
    {
      id: 4,
      icon: "avatar",
      name: "Sophia Williams",
      amount: 150.0,
      type: "income",
      account: "Checking",
      date: "12 September",
      paymentMethod: "Money Transfer",
      paymentIcon: "transfer",
      avatar: "S",
    },
    {
      id: 5,
      icon: "monitor",
      name: "Freelance Income",
      amount: 250.0,
      type: "income",
      account: "Checking",
      date: "12 September",
      paymentMethod: "ACH",
      paymentIcon: "bank",
    },
    {
      id: 6,
      icon: "avatar",
      name: "Emma Wright",
      amount: -21.8,
      type: "expense",
      account: "AP",
      date: "12 September",
      paymentMethod: "Wire",
      paymentIcon: "globe",
      avatar: "E",
    },
    {
      id: 7,
      icon: "lightning",
      name: "Utilities Payment",
      amount: -63.75,
      type: "expense",
      account: "Ops Payroll",
      date: "12 September",
      paymentMethod: "ACH",
      paymentIcon: "bank",
    },
    {
      id: 8,
      icon: "avatar",
      name: "Matthew Johnson",
      amount: -45.0,
      type: "expense",
      account: "Checking",
      date: "12 September",
      paymentMethod: "Money Transfer",
      paymentIcon: "transfer",
      avatar: "M",
    },
  ];

  // Filter transactions based on active tab
  const filteredTransactions = transactions.filter((transaction) => {
    if (activeTab === "All") return true;
    if (activeTab === "Income") return transaction.type === "income";
    if (activeTab === "Expenses") return transaction.type === "expense";
    return true;
  });

  // Filter by search term
  const searchFilteredTransactions = filteredTransactions.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderIcon = (transaction) => {
    if (transaction.icon === "avatar") {
      return (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
            transaction.avatar === "J"
              ? "bg-gray-400"
              : transaction.avatar === "S"
              ? "bg-yellow-400"
              : transaction.avatar === "E"
              ? "bg-gray-400"
              : "bg-purple-400"
          }`}
        >
          {transaction.avatar}
        </div>
      );
    }

    if (transaction.icon === "chart") {
      return (
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
      );
    }

    if (transaction.icon === "clock") {
      return (
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      );
    }

    if (transaction.icon === "monitor") {
      return (
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      );
    }

    if (transaction.icon === "lightning") {
      return (
        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      );
    }
  };

  const renderPaymentIcon = (paymentIcon) => {
    if (paymentIcon === InvestmentIcon) {
      return <InvestmentIcon />;
    }

    if (paymentIcon === "globe") {
      return (
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      );
    }

    if (paymentIcon === "transfer") {
      return (
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      );
    }

    if (paymentIcon === "bank") {
      return (
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Desktop Table Header - Hidden on mobile */}
      <div className="hidden lg:block">
        <div className="flex items-center text-sm font-medium">
          <div className="flex items-center gap-2.5 h-[36px] bg-[#F5F7FA] w-[328px] px-3 rounded-l-[8px]">
            <div className="p-[3.5px]">
              <div className="bg-[#E1E4EA] p-[2px] rounded-[4px]">
                <div className="w-[13px] h-[13px] bg-white shadow-[0_2px_2px_0_rgba(27,28,29,0.12)] rounded-[4px]" />
              </div>
            </div>
            <span className="text-[#525866] text-sm leading-5 tracking-[-0.084px]">
              To / From
            </span>
            <div className="mr-[2px]">
              <UpDownIcon />
            </div>
          </div>
          <div
            className="flex items-center gap-2.5 h-[36px] bg-[#F5F7FA] px-3"
            style={{ width: "148px" }}
          >
            <span className="text-[#525866] text-sm leading-5 tracking-[-0.084px]">
              Amount
            </span>
            <div className="mr-[2px]">
              <UpDownIcon />
            </div>
          </div>
          <div
            className="flex items-center gap-2.5 h-[36px] bg-[#F5F7FA] px-3"
            style={{ width: "188px" }}
          >
            <span className="text-[#525866] text-sm leading-5 tracking-[-0.084px]">
              Account
            </span>
            <div className="mr-[2px]">
              <UpDownIcon />
            </div>
          </div>
          <div
            className="flex items-center gap-2.5 h-[36px] bg-[#F5F7FA] px-3"
            style={{ width: "188px" }}
          >
            <span className="text-[#525866] text-sm leading-5 tracking-[-0.084px]">
              Date & Time
            </span>
            <div className="mr-[2px]">
              <UpDownIcon />
            </div>
          </div>
          <div
            className="flex items-center gap-2.5 h-[36px] bg-[#F5F7FA] px-3 "
            style={{ width: "188px" }}
          >
            <span className="text-[#525866] text-sm leading-5 tracking-[-0.084px]">
              Payment Method
            </span>
            <div className="mr-[2px]">
              <UpDownIcon />
            </div>
          </div>
          <div className="w-[72px] bg-[#F5F7FA] h-[36px] rounded-r-[10px]"></div>
        </div>
      </div>

      {/* Desktop Table Body - Hidden on mobile */}
      <div className="hidden lg:block mt-2 gap-[1.5px]">
        {searchFilteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="px-3 h-[48px] flex items-center border-b border-[#E1E4EA] cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleTransactionClick(transaction)}
          >
            <div className="flex items-center">
              <div className="flex gap-3 items-center w-[328px]">
                <div className="p-[3.5px]">
                  <div className="bg-[#E1E4EA] p-[2px] rounded-[4px]">
                    <div className="w-[13px] h-[13px] bg-white shadow-[0_2px_2px_0_rgba(27,28,29,0.12)] rounded-[4px]" />
                  </div>
                </div>
                <div className="w-[32px] h-[32px] flex items-center justify-center border border-[#E1E4EA] rounded-full flex-shrink-0">
                  {renderIcon(transaction)}
                </div>
                <h4 className="text-[#0E121B] text-sm leading-5 trackin-[-0.084px]">
                  {transaction.name}
                </h4>
              </div>
              <div
                className="text-sm text-[#525866] leading-5 tracking-[-0.084px]"
                style={{ width: "148px" }}
              >
                {transaction.amount < 0 ? "-" : ""}$
                {Math.abs(transaction.amount).toFixed(2)}
              </div>
              <div
                className="text-sm text-[#525866] leading-5 tracking-[-0.084px]"
                style={{ width: "188px" }}
              >
                {transaction.account}
              </div>
              <div
                className="text-sm text-[#525866] leading-5 tracking-[-0.084px]"
                style={{ width: "188px" }}
              >
                {transaction.date}
              </div>
              <div
                className="flex items-center gap-3"
                style={{ width: "188px" }}
              >
                <span className="w-[32px] h-[32px] border border-[#E1E4EA] bg-white shadow-[0 1px 2px 0 rgba(10, 13, 20, 0.03)] rounded-full flex items-center justify-center">
                  {transaction.paymentMethod === "Wire" ? (
                    <WireIcon />
                  ) : transaction.paymentMethod === "Money Transfer" ? (
                    <MoneyTransfer />
                  ) : transaction.paymentMethod === "ACH" ? (
                    <ACHIcon />
                  ) : transaction.paymentIcon === InvestmentIcon ? (
                    <InvestmentIcon />
                  ) : null}
                </span>
                <span className="text-[#525866] text-sm leading-5 tracking-[-0.084px]">
                  {transaction.paymentMethod}
                </span>
              </div>
              <div className="flex justify-end w-12">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ThreeDot />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card Layout - Visible only on mobile */}
      <div className="lg:hidden space-y-3 p-4">
        {searchFilteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white border border-[#E1E4EA] rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleTransactionClick(transaction)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-[32px] h-[32px] flex items-center justify-center border border-[#E1E4EA] rounded-full flex-shrink-0">
                  {renderIcon(transaction)}
                </div>
                <div>
                  <h4 className="text-[#0E121B] text-sm font-medium leading-5">
                    {transaction.name}
                  </h4>
                  <p className="text-[#525866] text-xs mt-1">
                    {transaction.account}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-sm font-medium ${
                    transaction.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {transaction.amount < 0 ? "-" : "+"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </div>
                <button className="p-1 hover:bg-gray-100 rounded mt-1">
                  <ThreeDot />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#525866]">
              <div className="flex items-center gap-2">
                <span className="w-[20px] h-[20px] border border-[#E1E4EA] bg-white shadow-[0 1px 2px 0 rgba(10, 13, 20, 0.03)] rounded-full flex items-center justify-center">
                  {transaction.paymentMethod === "Wire" ? (
                    <WireIcon />
                  ) : transaction.paymentMethod === "Money Transfer" ? (
                    <MoneyTransfer />
                  ) : transaction.paymentMethod === "ACH" ? (
                    <ACHIcon />
                  ) : transaction.paymentIcon === InvestmentIcon ? (
                    <InvestmentIcon />
                  ) : null}
                </span>
                <span>{transaction.paymentMethod}</span>
              </div>
              <span>{transaction.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="px-4 lg:px-6 py-4 mt-8 lg:mt-[88px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#525866]">Page {currentPage} of 16</div>

          {/* Desktop Pagination - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 flex justify-center items-center">
              <DoublePrevArrow />
            </div>
            <div className="w-8 h-8 flex justify-center items-center">
              <PrevArrow />
            </div>

            <div className="flex items-center gap-2 ml-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 text-sm rounded ${
                    page === currentPage
                      ? "bg-[#F5F7FA] text-[#525866]"
                      : "text-[#525866] hover:bg-[#F5F7FA] border border-[#E1E4EA]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="w-8 h-8 rounded flex justify-center items-center border border-[#E1E4EA] text-[#525866]">
                ...
              </span>
              <button className="w-8 h-8 text-sm border border-[#E1E4EA] text-[#525866] rounded">
                16
              </button>
            </div>

            <div className="w-8 h-8 flex justify-center items-center ml-2">
              <DoubleNextArrow />
            </div>
            <div className="w-8 h-8 flex justify-center items-center">
              <NextArrow />
            </div>
            <button className="p-2 hover:bg-gray-200 rounded">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Pagination - Simple prev/next */}
          <div className="flex sm:hidden items-center gap-4">
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-[#525866] border border-[#E1E4EA] rounded-lg hover:bg-gray-50">
              <PrevArrow />
              <span>Previous</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-[#525866] border border-[#E1E4EA] rounded-lg hover:bg-gray-50">
              <span>Next</span>
              <NextArrow />
            </button>
          </div>

          <div className="flex items-center gap-[2px] h-8 border border-[#E1E4EA] text-[#525866] rounded-[8px] px-2.5">
            <span className="text-sm">{itemsPerPage} / page</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Transaction Details Modal */}
      <TransactionDetailsModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTransaction(null);
        }}
        transaction={selectedTransaction}
      />
    </div>
  );
};

export default TransactionTable;
