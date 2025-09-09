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

const Sidebar = ({
  isSidebarExpanded,
  setIsSidebarExpanded,
  isMobile,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsSidebarExpanded(!isSidebarExpanded);
    }
  };

  return (
    <aside className="flex h-full flex-col justify-between border-r border-[#E1E4EA] relative transition-all duration-300 font-[family-name:var(--font-inter)] w-full bg-white">
      <div className="relative">
        {/* Desktop toggle button */}
        {!isMobile && (
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
        )}

        {/* Mobile close button */}
        {isMobile && (
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="w-full  ">
          <div className="p-3">
            <div className="flex justify-between items-center p-3">
              <div className="flex gap-3 items-center">
                <Image src={finance} alt="logo" />
                <AnimatePresence>
                  {(isSidebarExpanded || isMobile) && (
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
                {(isSidebarExpanded || isMobile) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Image src={compact} alt="compact" />
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
              isSidebarExpanded || isMobile
                ? "px-5"
                : "px-3 flex flex-col items-center justify-center"
            }`}
          >
            {isSidebarExpanded || isMobile ? (
              <motion.h5
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xs text-[#99A0AE] p-1"
              >
                MAIN
              </motion.h5>
            ) : (
              <h5 className="text-xs text-[#99A0AE] p-1 text-center">MAIN</h5>
            )}
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
                      isMobile={isMobile}
                      setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
                  ))}
              </li>
            </ul>
          </nav>
          <nav
            className={`  ${
              isSidebarExpanded || isMobile
                ? "px-5"
                : "px-3 flex flex-col items-center justify-center"
            }`}
          >
            {isSidebarExpanded || isMobile ? (
              <motion.h5
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xs text-[#99A0AE] p-1"
              >
                OTHERS
              </motion.h5>
            ) : (
              <h5 className="text-xs text-[#99A0AE] p-1 text-center">OTHERS</h5>
            )}
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
                      isMobile={isMobile}
                      setIsMobileMenuOpen={setIsMobileMenuOpen}
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

export const PlatinumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="26"
    viewBox="0 0 34 26"
    fill="none"
  >
    <g filter="url(#filter0_ii_13942_1830)">
      <path
        d="M1 4C1 2.34315 2.34315 1 4 1H30C31.6569 1 33 2.34315 33 4V22C33 23.6569 31.6569 25 30 25H4C2.34315 25 1 23.6569 1 22V4Z"
        fill="#FFD5C0"
      />
      <path d="M14 10H20V16H14V10Z" fill="#FFD5C0" />
    </g>
    <path
      d="M14 10H20M14 10V16M14 10L12.0204 7.56304C11.4508 6.86175 10.5954 6.45455 9.69188 6.45455H1M20 10V16M20 10L22.2241 7.47266C22.7936 6.82545 23.6141 6.45455 24.4762 6.45455H33M20 16H14M20 16L22.2241 18.5273C22.7936 19.1746 23.6141 19.5455 24.4762 19.5455H33M14 16L12.0204 18.437C11.4508 19.1383 10.5954 19.5455 9.69187 19.5455H1M17.25 1V7M17.25 19V25M33 13.2727H23M11 13.2727H1M4 25H30C31.6569 25 33 23.6569 33 22V4C33 2.34315 31.6569 1 30 1H4C2.34315 1 1 2.34315 1 4V22C1 23.6569 2.34315 25 4 25Z"
      stroke="#0E121B"
    />
    <defs>
      <filter
        id="filter0_ii_13942_1830"
        x="0.5"
        y="-1.5"
        width="33"
        height="29"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="overlay"
          in2="shape"
          result="effect1_innerShadow_13942_1830"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.48 0"
        />
        <feBlend
          mode="overlay"
          in2="effect1_innerShadow_13942_1830"
          result="effect2_innerShadow_13942_1830"
        />
      </filter>
    </defs>
  </svg>
);
