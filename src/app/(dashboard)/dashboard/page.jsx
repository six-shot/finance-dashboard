import { Button } from "@/app/components/ui/button";
import { PlusIcon, WalletIcon } from "@/app/components/ui/jsx/icons";
import React from "react";
import MyCardsPage from "../my-cards/page";
import BudgetOverview from "@/app/components/dashboard/budget-overview";
import SpendingSummary from "@/app/components/dashboard/spending-summary";
import Exchange from "@/app/components/dashboard/exchange";

export default function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6 font-[family-name:var(--font-inter)]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 sm:gap-6">
        <div className="lg:col-span-1 order-1">
          <MyCardsPage />
        </div>
        <div className="lg:col-span-2 order-2">
          <div>
            <BudgetOverview />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <SpendingSummary />
              <Exchange />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
