"use client";
import React, { useState } from "react";
import {
  BudgetIcon,
  CaretDown,
  Expenses,
  ExpensesCircle,
  Income,
  IncomeCircle,
  Scheduled,
  ScheduledCircle,
} from "../../ui/jsx/icons";
import { Button } from "../../ui/button";
import Dropdown from "../../ui/Dropdown";
import { useDashboard } from "../../../contexts/DashboardContext";
import Image from "next/image";

const BudgetOverview = () => {
  const { state } = useDashboard();
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Last Year");

  // Time period options
  const timePeriodOptions = [
    { value: "Last Week", label: "Last Week" },
    { value: "Last Month", label: "Last Month" },
    { value: "Last Quarter", label: "Last Quarter" },
    { value: "Last Year", label: "Last Year" },
    { value: "All Time", label: "All Time" },
  ];

  // Calculate budget data from global state
  const data = {
    income: {
      amount: state.budget.income,
      change: 5, // This could be calculated from historical data
    },
    expenses: {
      amount: state.budget.expenses,
      change: -3, // This could be calculated from historical data
    },
    scheduled: {
      amount: state.budget.scheduled,
      change: 0,
    },
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const MetricCard = ({ icon, label, amount, change, changeColor }) => (
    <div className="">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-[#E1E4EA] flex items-center justify-center">
            {icon}
          </div>
          <div className="flex gap-1 flex-col min-w-0 flex-1">
            <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide truncate">
              {label}
            </span>
            <div className="flex gap-1 items-center flex-wrap">
              <span className="text-sm sm:text-base text-[#0E121B] font-medium leading-6 tracking-[-0.176px] truncate">
                {formatCurrency(amount)}
              </span>
              {change !== 0 && (
                <span
                  className={`px-1.5 sm:px-2 flex items-center justify-center h-[18px] sm:h-[20px] rounded-full text-xs leading-4 font-medium flex-shrink-0 ${
                    change > 0
                      ? "bg-[#C2F5DA] text-[#0B4627]"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {change > 0 ? "+" : ""}
                  {change}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900"></div>
    </div>
  );

  return (
    <div className="bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] h-full rounded-[12px] sm:rounded-[16px] p-3 sm:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 sm:pb-4 border-b border-[#E1E4EA] gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <BudgetIcon />
          <h5 className="text-base font-medium leading-6 tracking-[-0.176px] text-[#0E121B]">
            Budget Overview
          </h5>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
            <div className="flex gap-1 items-center">
              <IncomeCircle />
              <span className="text-xs leading-4 text-[#0E121B]">Income</span>
            </div>
            <div className="flex gap-1 items-center">
              <ExpensesCircle />
              <span className="text-xs leading-4 text-[#0E121B]">Expenses</span>
            </div>
            <div className="flex gap-1 items-center">
              <ScheduledCircle />
              <span className="text-xs leading-4 text-[#0E121B]">
                Scheduled
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="flex gap-[2px] px-2.5 h-8 items-center text-[#525866] text-sm font-medium leading-5 tracking-[-0.084px] w-fit"
          >
            Last Year
            <CaretDown />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-center pt-4 border-b border-[#E1E4EA]">
        <MetricCard
          icon={<Income />}
          label="Income"
          amount={data.income.amount}
          change={data.income.change}
        />
        <MetricCard
          icon={<Expenses />}
          label="Expenses"
          amount={data.expenses.amount}
          change={data.expenses.change}
        />
        <MetricCard
          icon={<Scheduled />}
          label="Scheduled"
          amount={data.scheduled.amount}
          change={data.scheduled.change}
        />
      </div>
      <div className="py-3 sm:py-4 overflow-hidden">
        <div className="relative w-full h-auto">
          <Image
            src="barchart.svg"
            alt="barchart"
            width={696}
            height={212}
            className="w-full h-auto object-contain"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;
