"use client";
import Image from "next/image";
import MenuLink from "./menuLinks/menuLink";
import { motion, AnimatePresence } from "framer-motion";
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
        path: "/dashboard",
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
        title: "Payments",
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

const Sidebar = ({ isSidebarExpanded, setIsSidebarExpanded }) => {
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <aside className="flex h-full flex-col justify-between border-r border-[#E1E4EA] relative transition-all duration-300 font-[family-name:var(--font-inter)] w-full">
      <div className="relative">
        <div className="top-[29.5%] right-[12px] absolute">
          <motion.button
            type="button"
            className="absolute flex h-6 w-6 items-center justify-center border border-[#000000] rounded-full"
            onClick={toggleSidebar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              key={isSidebarExpanded ? "left" : "right"}
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isSidebarExpanded ? <FaAngleLeft /> : <FaAngleRight />}
            </motion.div>
          </motion.button>
        </div>
        <div className="w-full  ">
          <div className="p-3">
            <div className="flex justify-between items-center p-3">
              <div className="flex gap-3 items-center">
                <Image src={finance} alt="logo" />
                <AnimatePresence>
                  {isSidebarExpanded && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex flex-col gap-1 overflow-hidden"
                    >
                      <h5 className="text-[#0E121B] text-sm font-medium leading-5 whitespace-nowrap">
                        Apex
                      </h5>
                      <p className="text-xs text-[#525866] leading-[16px] whitespace-nowrap">
                        Finance & Banking
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {isSidebarExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Image
                      src={compact}
                      alt="compact"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
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
            <AnimatePresence>
              {isSidebarExpanded && (
                <motion.h5 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-xs text-[#99A0AE] p-1"
                >
                  MAIN
                </motion.h5>
              )}
            </AnimatePresence>
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
            <AnimatePresence>
              {isSidebarExpanded && (
                <motion.h5 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-xs text-[#99A0AE] p-1"
                >
                  OTHERS
                </motion.h5>
              )}
            </AnimatePresence>
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
