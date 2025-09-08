"use client";
import Header from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.div
        className="fixed h-screen bg-primary"
        animate={{ width: sidebarWidth }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Sidebar
          isSidebarExpanded={isSidebarExpanded}
          setIsSidebarExpanded={setIsSidebarExpanded}
        />
      </motion.div>

      <motion.div
        className="flex-1 h-screen text-white"
        animate={{ marginLeft: sidebarWidth }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Header />
        <div className="p-8"> {children}</div>
      </motion.div>
    </div>
  );
};

export default Layout;
