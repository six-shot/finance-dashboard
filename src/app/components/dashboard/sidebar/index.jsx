"use client";
import Image from "next/image";
import MenuLink from "./menuLinks/menuLink";
import {
  EmptyWalletIcon,
  Group11Icon,
  Home2Icon,
  Setting2Icon,
  CupIcon,
  SearchNormalIcon,
} from "@gomah/vuesax-icons-react/linear";
import finance from "../../../../../public/svgs/finance.svg";
import { Button } from "../../ui/button";
import DashboardIcon from "../../ui/jsx/icons/dashboard";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import CardIcon from "../../ui/jsx/icons/cardIcon";
import TransferIcon from "../../ui/jsx/icons/transfericon";
import TransactionIcon from "../../ui/jsx/icons/transactionIcon";
import PaymentIcon from "../../ui/jsx/icons/paymentIcon";
import ExchangeIcon from "../../ui/jsx/icons/exchangeicon";
import compact from "../../../../../public/svgs/compact.svg";
import SupportIcon from "../../ui/jsx/icons/supportIcon";
import SettingsIcon from "../../ui/jsx/icons/settingsIcon";

const menuItems = [
  {
    title: "Main",
    list: [
      {
        title: "Dashboard",
        path: "/home",
        icon: <DashboardIcon />,
      },
      {
        title: "My Cards",
        path: "/my-cards",
        icon: <CardIcon />,
      },
      {
        title: "Transfer",
        path: "/transfer",
        icon: <TransferIcon />,
      },
      {
        title: "Transaction",
        path: "/transaction",
        icon: <TransactionIcon />,
      },
      {
        title: "payments",
        path: "/payments",
        icon: <PaymentIcon />,
      },
      {
        title: "Exchange",
        path: "/exchange",
        icon: <ExchangeIcon />,
      },
    ],
  },
  {
    title: "Others",
    list: [
      {
        title: "Settings",
        path: "/settings",
        icon: <SettingsIcon />,
      },
      {
        title: "Support",
        path: "/support",
        icon: <SupportIcon />,
      },
    ],
  },
];

const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("sidebarExpanded");
      if (saved === null) {
        return true;
      }
      return JSON.parse(saved);
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "sidebarExpanded",
        JSON.stringify(isSidebarExpanded)
      );
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <aside
      className={`flex h-full flex-col justify-between border-r border-[#E1E4EA] relative transition-all duration-300  font-[family-name:var(--font-inter)] ${
        isSidebarExpanded ? "w-auto flex-1 " : "w-[80px]"
      }`}
    >
      <div className="relative">
        <div className="top-[29.5%] right-[12px] absolute">
          <button
            type="button"
            className="absolute flex h-6 w-6 items-center justify-center border border-[#000000] rounded-full"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? <FaAngleLeft /> : <FaAngleRight />}
          </button>
        </div>
        <div className="w-full  ">
          <div className="p-3">
            <div className="flex justify-between items-center p-3">
              <div className="flex gap-3 items-center">
                <Image src={finance} alt="logo" />
                <div
                  className={`flex flex-col gap-1 ${
                    !isSidebarExpanded ? "hidden" : ""
                  }`}
                >
                  <h5 className="text-[#0E121B] text-sm font-medium leading-5">
                    Apex
                  </h5>
                  <p className="text-xs text-[#525866] leading-[16px]">
                    Finance & Banking
                  </p>
                </div>
              </div>
              <Image
                className={`${!isSidebarExpanded ? "hidden" : ""}`}
                src={compact}
                alt="compact"
              />
            </div>
          </div>
          <div className="px-5">
            <div className="border-b border-[#E1E4EA]" />
          </div>

          <nav
            className={`py-5  ${
              isSidebarExpanded
                ? "px-5"
                : "px-3 flex flex-col items-center justify-center"
            }`}
          >
            <h5 className="text-xs text-[#99A0AE] p-1">MAIN</h5>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-1 flex-col">
                {menuItems
                  .find((menu) => menu.title === "Main")
                  ?.list.map((item) => (
                    <MenuLink
                      key={item.title}
                      label={item.title}
                      icon={item.icon}
                      path={item.path}
                      isSidebarExpanded={isSidebarExpanded}
                    />
                  ))}
              </li>
            </ul>
          </nav>
          <nav
            className={`  ${
              isSidebarExpanded
                ? "px-5"
                : "px-3 flex flex-col items-center justify-center"
            }`}
          >
            <h5 className="text-xs text-[#99A0AE] p-1">OTHERS</h5>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-1 flex-col">
                {menuItems
                  .find((menu) => menu.title === "Others")
                  ?.list.map((item) => (
                    <MenuLink
                      key={item.title}
                      label={item.title}
                      icon={item.icon}
                      path={item.path}
                      isSidebarExpanded={isSidebarExpanded}
                    />
                  ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

export function CreatePostButton() {
  return (
    <Button type="submit" className=" w-full ">
      Create post
    </Button>
  );
}
