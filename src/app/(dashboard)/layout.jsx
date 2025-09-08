"use client";
import Header from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
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

  const sidebarWidth = isSidebarExpanded ? 280 : 80;

  return (
    <div className="flex max-w-[1440px] mx-auto">
      <div
        className={`fixed h-screen bg-primary transition-all duration-300`}
        style={{ width: `${sidebarWidth}px` }}
      >
        <Sidebar
          isSidebarExpanded={isSidebarExpanded}
          setIsSidebarExpanded={setIsSidebarExpanded}
        />
      </div>

      <div
        className="flex-1 h-screen text-white transition-all duration-300"
        style={{ marginLeft: `${sidebarWidth}px` }}
      >
        <Header />
        <div className="p-8"> {children}</div>
      </div>
    </div>
  );
};

export default Layout;
