"use client";

import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import Modal from "../../components/ui/Modal";
import {
  PlusIcon,
  Search,
  FilterIcon,
  MoneyTransfer,
  Clock,
  CheckIcon,
  AlertIcon,
  BankLine,
  CardIcon,
  MastercardIcon,
  VerveIcon,
  ArrowRight,
  CloseModal,
  Utilities,
  Netflix,
  RentalIcon,
  Grocery,
} from "../../components/ui/jsx/icons";

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock payment data
  const payments = [
    {
      id: 1,
      type: "Bill Payment",
      merchant: "Electricity Company",
      amount: "$125.50",
      date: "Dec 15, 2023",
      status: "Completed",
      category: "Utilities",
      icon: <Utilities />,
      description: "Monthly electricity bill payment",
    },
    {
      id: 2,
      type: "Subscription",
      merchant: "Netflix",
      amount: "$15.99",
      date: "Dec 14, 2023",
      status: "Completed",
      category: "Entertainment",
      icon: <Netflix />,
      description: "Monthly subscription renewal",
    },
    {
      id: 3,
      type: "Transfer",
      merchant: "John Doe",
      amount: "$500.00",
      date: "Dec 13, 2023",
      status: "Pending",
      category: "Personal",
      icon: <MoneyTransfer />,
      description: "Money transfer to friend",
    },
    {
      id: 4,
      type: "Bill Payment",
      merchant: "Internet Provider",
      amount: "$89.99",
      date: "Dec 12, 2023",
      status: "Failed",
      category: "Utilities",
      icon: <Utilities />,
      description: "Monthly internet bill",
    },
    {
      id: 5,
      type: "Subscription",
      merchant: "Spotify",
      amount: "$9.99",
      date: "Dec 11, 2023",
      status: "Completed",
      category: "Entertainment",
      icon: <Netflix />,
      description: "Premium subscription",
    },
    {
      id: 6,
      type: "Bill Payment",
      merchant: "Water Company",
      amount: "$45.20",
      date: "Dec 10, 2023",
      status: "Completed",
      category: "Utilities",
      icon: <Utilities />,
      description: "Quarterly water bill",
    },
  ];

  const categories = [
    "All",
    "Utilities",
    "Entertainment",
    "Personal",
    "Shopping",
  ];
  const statuses = ["All", "Completed", "Pending", "Failed"];

  const filteredPayments = payments.filter((payment) => {
    const matchesTab = activeTab === "All" || payment.category === activeTab;
    const matchesSearch =
      payment.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-[#1FC16B] bg-[#1FC16B]/10";
      case "Pending":
        return "text-[#FF7B1C] bg-[#FF7B1C]/10";
      case "Failed":
        return "text-[#FB3748] bg-[#FB3748]/10";
      default:
        return "text-[#525866] bg-[#525866]/10";
    }
  };

  return (
    <div className="space-y-6 font-[family-name:var(--font-inter)] border-t border-[#E1E4EA]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="p-4 border-b border-[#E1E4EA] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
          <div>
            <h1 className="text-lg sm:text-xl font-medium text-[#0E121B] leading-8 tracking-[-0.36px]">
              Payments
            </h1>
            <p className="text-[#525866] text-sm tracking-[-0.084px] mt-1">
              Manage your payments and recurring bills
            </p>
          </div>

          <Button
            onClick={() => setShowPaymentModal(true)}
            className="w-full sm:w-auto"
          >
            <div className="[&_svg_path]:fill-white">
              <PlusIcon />
            </div>
            New Payment
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white border border-[#E1E4EA] rounded-[16px] p-4 sm:p-6 shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)]">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-[#99A0AE] text-xs font-medium uppercase tracking-[0.48px] leading-4">
                Total Payments
              </p>
              <p className="text-[#0E121B] text-xl sm:text-2xl font-medium leading-8 mt-2">
                {payments.length}
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EBF1FF] rounded-full flex items-center justify-center flex-shrink-0 ml-3">
              <MoneyTransfer />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E1E4EA] rounded-[16px] p-4 sm:p-6 shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)]">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-[#99A0AE] text-xs font-medium uppercase tracking-[0.48px] leading-4">
                This Month
              </p>
              <p className="text-[#0E121B] text-xl sm:text-2xl font-medium leading-8 mt-2">
                $786.68
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1FC16B]/10 rounded-full flex items-center justify-center flex-shrink-0 ml-3">
              <Clock />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E1E4EA] rounded-[16px] p-4 sm:p-6 shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)] sm:col-span-2 md:col-span-1">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-[#99A0AE] text-xs font-medium uppercase tracking-[0.48px] leading-4">
                Pending
              </p>
              <p className="text-[#0E121B] text-xl sm:text-2xl font-medium leading-8 mt-2">
                {payments.filter((p) => p.status === "Pending").length}
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF7B1C]/10 rounded-full flex items-center justify-center flex-shrink-0 ml-3">
              <AlertIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search payments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 h-[40px] border border-[#E1E4EA] rounded-[10px] text-sm text-[#0E121B] placeholder:text-[#99A0AE] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-3 sm:px-4 h-[40px] text-xs sm:text-sm font-medium rounded-[10px] transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === category
                  ? "bg-[#335CFF] text-white"
                  : "bg-white border border-[#E1E4EA] text-[#525866] hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Payments List */}
      <div className="bg-white border border-[#E1E4EA] rounded-[16px] shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)] overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-[#E1E4EA]">
          <h3 className="text-sm font-medium text-[#0E121B] leading-5 tracking-[-0.084px]">
            Recent Payments
          </h3>
        </div>

        <div className="divide-y divide-[#E1E4EA]">
          {filteredPayments.map((payment) => (
            <div
              key={payment.id}
              className="px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-[#E1E4EA] rounded-full flex items-center justify-center flex-shrink-0">
                    {payment.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-[#0E121B] text-sm leading-5 tracking-[-0.084px] truncate">
                      {payment.merchant}
                    </h4>
                    <p className="text-xs text-[#525866] leading-4 mt-1 line-clamp-2 sm:line-clamp-1">
                      {payment.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-xs text-[#99A0AE]">
                        {payment.date}
                      </span>
                      <span className="text-xs text-[#99A0AE] hidden sm:inline">
                        •
                      </span>
                      <span className="text-xs text-[#99A0AE]">
                        {payment.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                  <div className="text-right">
                    <p className="text-[#0E121B] font-medium text-sm leading-5 tracking-[-0.084px]">
                      {payment.amount}
                    </p>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </div>
                  <ArrowRight className="hidden sm:block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="New Payment"
        size="md"
      >
        <div className="space-y-6">
          {!showPaymentForm ? (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#0E121B]">
                Choose Payment Type
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setShowPaymentForm(true)}
                  className="p-6 border border-[#E1E4EA] rounded-[16px] hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="w-12 h-12 bg-[#EBF1FF] rounded-full flex items-center justify-center mb-3">
                    <MoneyTransfer />
                  </div>
                  <h4 className="font-medium text-[#0E121B] text-sm">
                    Bill Payment
                  </h4>
                  <p className="text-xs text-[#525866] mt-1">
                    Pay utility bills and subscriptions
                  </p>
                </button>

                <button
                  onClick={() => setShowPaymentForm(true)}
                  className="p-6 border border-[#E1E4EA] rounded-[16px] hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="w-12 h-12 bg-[#1FC16B]/10 rounded-full flex items-center justify-center mb-3">
                    <BankLine />
                  </div>
                  <h4 className="font-medium text-[#0E121B] text-sm">
                    Transfer
                  </h4>
                  <p className="text-xs text-[#525866] mt-1">
                    Send money to friends or family
                  </p>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setShowPaymentForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowRight className="rotate-180" />
                </button>
                <h3 className="text-lg font-medium text-[#0E121B]">
                  Payment Details
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0E121B] mb-2">
                    Recipient
                  </label>
                  <input
                    type="text"
                    placeholder="Enter recipient name"
                    className="w-full px-4 h-[40px] border border-[#E1E4EA] rounded-[10px] text-sm text-[#0E121B] placeholder:text-[#99A0AE] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0E121B] mb-2">
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder="$ 0.00"
                    className="w-full px-4 h-[40px] border border-[#E1E4EA] rounded-[10px] text-sm text-[#0E121B] placeholder:text-[#99A0AE] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0E121B] mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Payment description (optional)"
                    rows={3}
                    className="w-full px-4 py-3 border border-[#E1E4EA] rounded-[10px] text-sm text-[#0E121B] placeholder:text-[#99A0AE] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20 resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setShowPaymentModal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button className="flex-1">Process Payment</Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
