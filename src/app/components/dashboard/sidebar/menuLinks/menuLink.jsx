"use client";
import { CaretLeft } from "@/app/components/ui/jsx/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import React from "react";

const MenuLink = ({ label, icon, path, active, isSidebarExpanded }) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={` h-[36px] px-3 text-[13px]  rounded-lg transition-colors duration-300 ease-in-out font-[family-name:var(--font-inter)] relative ${
            pathname === path
              ? "text-[#0E121B] bg-[#F5F7FA]   "
              : "text-[#525866] hover:bg-[#F5F7FA14]"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`
          absolute -left-5 top-2 w-1 h-5 bg-[#335CFF] rounded-r
          transition-all duration-300
          ${
            pathname === path || isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          }
        `}
          />
          <div className="flex justify-between items-center h-full">
            <div className="flex gap-2 items-center">
              {" "}
              <div
                className={`w-5 h-5 ${
                  pathname === path
                    ? "text-[#335CFF] hover:text-[#335CFF]"
                    : "text-[#D0D5DD] hover:text-[#335CFF]"
                }`}
              >
                {React.cloneElement(icon, {
                  fill: pathname === path ? "#335CFF" : "#525866",
                })}
              </div>
              <h5 className="text-sm whitespace-nowrap font-medium">{label}</h5>
            </div>
            <div
              className={`${
                pathname === path || isHovered ? "block" : "hidden"
              }`}
            >
              <CaretLeft />
            </div>
          </div>
        </Link>
      ) : (
        <div>
          <div>
            <div>
              <Link
                href={path}
                className={` relative flex  items-center whitespace-nowrap rounded-md ${
                  active
                    ? "font-base text-sm bg-[#F5F7FA] text-neutral-700  "
                    : "hover:bg-[#F5F7FA]"
                }`}
              >
                <div className="relative font-base w-[36px] h-[36px] py-[2px] flex justify-center items-center rounded-[8px] duration-100">
                  {React.cloneElement(icon, {
                    fill: pathname === path ? "#335CFF" : "#525866",
                  })}
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuLink;
