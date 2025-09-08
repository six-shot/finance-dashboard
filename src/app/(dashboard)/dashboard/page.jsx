import { Button } from "@/app/components/ui/button";
import { PlusIcon, WalletIcon } from "@/app/components/ui/jsx/icons";
import React from "react";
import MyCardsPage from "../my-cards/page";
import BudgetOverview from "@/app/components/dashboard/budget-overview";
import SpendingSummary from "@/app/components/dashboard/spending-summary";
import Exchange from "@/app/components/dashboard/exchange";

export default function Dashboard() {
  return (
    <div className="space-y-6 font-[family-name:var(--font-inter)]">
      <div className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-1">
          <MyCardsPage />
        </div>
        <div className="col-span-2">
          <BudgetOverview />
          <div className="grid grid-cols-2 gap-6 mt-6">
            <SpendingSummary />
            <Exchange />
          </div>
        </div>
      </div>
    </div>
  );
}
