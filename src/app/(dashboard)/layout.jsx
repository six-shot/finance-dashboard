"use client";
import Header from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const sidebarWidth = isSidebarExpanded ? 280 : 80;

  return (
    <div className="flex max-w-[1440px] mx-auto">
      <div
        className="fixed h-screen bg-primary"
        style={{ width: sidebarWidth }}
      >
        <Sidebar
          isSidebarExpanded={isSidebarExpanded}
          setIsSidebarExpanded={setIsSidebarExpanded}
        />
      </div>

      <div
        className="flex-1 h-screen text-white"
        style={{ marginLeft: sidebarWidth }}
      >
        <Header />
        <div className="p-8"> {children}</div>
      </div>
    </div>
  );
};

export default Layout;
