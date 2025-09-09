"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Notification, Search } from "../../ui/jsx/icons";
import { Button } from "../../ui/button";
import Image from "next/image";

export default function Header({
  isMobile,
  onMobileMenuToggle,
  isMobileMenuOpen,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

            <div className="w-8 h-8 sm:w-[48px] sm:h-[48px] bg-[#C0D5FF] rounded-full flex-shrink-0">
              <Image
                src="/avatarr.png"
                width={48}
                height={48}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col font-[family-name:var(--font-inter)] min-w-0 flex-1">
              <h4 className="text-sm sm:text-[18px] text-[#0E121B] leading-5 sm:leading-6 tracking-[-0.27px] font-medium truncate">
                Arthur Taylor
              </h4>
              <p className="text-xs sm:text-sm text-[#525866] leading-4 sm:leading-5 tracking-[-0.084px] truncate">
                Welcome back to Apex 👋🏻
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center">
              <Search />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center">
              <div className="relative">
                <Notification />
                <div className="absolute top-[1px] right-[4px] w-[5px] h-[5px] bg-[#FB3748] rounded-full drop-shadow-[0_1px_2px_rgba(10,_13,_20,_0.03)]"></div>
              </div>
            </div>
            <Button className="hidden md:flex text-xs sm:text-sm">
              Move Money <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
