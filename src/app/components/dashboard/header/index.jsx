"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Notification,
  Search,
  CardHeaderIcon,
  ExportTransaction,
  PlusIcon,
} from "../../ui/jsx/icons";
import { Button } from "../../ui/button";
import { useDashboard } from "../../../contexts/DashboardContext";
import SearchModal from "../search/SearchModal";
import Image from "next/image";

export default function Header({
  isMobile,
  onMobileMenuToggle,
  isMobileMenuOpen,
  title = "Arthur Taylor",
  description = "Welcome back to Apex 👋🏻",
  showCardIcon = false,
  imageSrc = "/avatarr.png",
  imageAlt = "avatar",
  isTransactionPage = false,
}) {
  const { state, actions } = useDashboard();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const notificationRef = useRef(null);

  // Get unread notification count
  const unreadCount = state.notifications.filter((n) => !n.read).length;

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleMarkAsRead = (notificationId) => {
    actions.markNotificationRead(notificationId);
  };

  const handleMoveMoney = () => {
    actions.addNotification({
      id: Date.now(),
      title: "Transfer Initiated",
      message: "Transfer feature coming soon!",
      type: "info",
      timestamp: new Date().toISOString(),
      read: false,
    });
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ctrl/Cmd + K to open search
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setShowSearch(true);
      }
      // Escape to close search
      if (event.key === "Escape" && showSearch) {
        setShowSearch(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showSearch]);

  // Handle click outside notifications dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <div className={`w-full relative ${isScrolled ? "header-mask" : ""}`}>
      {/* Background blur effect */}
      <div className="w-full h-[88px] blur-bg absolute top-0 left-0 z-10"></div>

      {/* Header content */}
      <div className="relative z-20 h-[88px]">
        <div className="flex justify-between items-center p-2 sm:p-3 h-full">
          <div className="flex gap-2 sm:gap-3.5 items-center flex-1 min-w-0">
            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={onMobileMenuToggle}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            )}

            <div className="w-8 h-8 sm:w-[48px] sm:h-[48px] bg-[#EBF1FF] rounded-full flex-shrink-0 flex items-center justify-center">
              {showCardIcon ? (
                <CardHeaderIcon />
              ) : (
                <Image
                  src={state.user.avatar}
                  width={48}
                  height={48}
                  alt={state.user.name}
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <div className="flex flex-col font-[family-name:var(--font-inter)] min-w-0 flex-1">
              <h4 className="text-sm sm:text-[18px] text-[#0E121B] leading-5 sm:leading-6 tracking-[-0.27px] font-medium truncate">
                {state.user.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#525866] leading-4 sm:leading-5 tracking-[-0.084px] truncate">
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center relative group">
              <button
                onClick={handleSearchClick}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Search (Ctrl+K)"
              >
                <Search />
              </button>
              {/* Keyboard shortcut hint */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Ctrl+K
              </div>
            </div>
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center relative"
              ref={notificationRef}
            >
              <button
                onClick={handleNotificationClick}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <Notification />
                {unreadCount > 0 && (
                  <div className="absolute top-[1px] right-[4px] w-[5px] h-[5px] bg-[#FB3748] rounded-full drop-shadow-[0_1px_2px_rgba(10,_13,_20,_0.03)] animate-pulse"></div>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute top-12 font-[family-name:var(--font-inter)] right-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto overflow-x-hidden">
                    {state.notifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        No notifications
                      </div>
                    ) : (
                      state.notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:shadow-sm hover:border-l-2 hover:border-blue-500 ${
                            !notification.read ? "bg-blue-50" : ""
                          }`}
                          onClick={() => handleMarkAsRead(notification.id)}
                        >
                          <div className="flex justify-between items-start gap-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm text-gray-900 truncate">
                                {notification.title}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1 break-words">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                {new Date(
                                  notification.timestamp
                                ).toLocaleString()}
                              </p>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            {isTransactionPage ? (
              <>
                <Button variant="outline" className="hidden md:flex  ">
                  <ExportTransaction /> Export
                </Button>
                <Button className="hidden md:flex ">
                  <div className="[&_svg_path]:fill-white">
                    <PlusIcon />
                  </div>
                  Add Team Member
                </Button>
              </>
            ) : (
              <Button
                onClick={handleMoveMoney}
                className="hidden md:flex text-xs sm:text-sm  transition-colors"
              >
                Move Money <ArrowRight />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={handleSearchClose} />
    </div>
  );
}
