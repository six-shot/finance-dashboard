"use client";
import Header from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import { DashboardProvider } from "../contexts/DashboardContext";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Get header content based on current page
  const getHeaderContent = () => {
    switch (pathname) {
      case "/my-cards":
        return {
          title: "My Cards",
          description: "Organize and access your payment cards.",
          showCardIcon: true,
        };
      case "/transaction":
        return {
          title: "Transactions",
          description:
            "Track your financial transactions to stay in control of your income and expenses.",
          showCardIcon: true,
          isTransactionPage: true,
        };
      case "/payments":
        return {
          title: "Payments",
          description: "Manage your payments and recurring bills",
          showCardIcon: true,
        };
      case "/exchange":
        return {
          title: "Currency Exchange",
          description: "Convert currencies at competitive rates",
          showCardIcon: true,
        };
      case "/dashboard":
        return {
          title: "Arthur Taylor",
          description: "Welcome back to Apex 👋🏻",
          showCardIcon: false,
          imageSrc: "/avatarr.png",
          imageAlt: "avatar",
        };
      default:
        return {
          title: "Arthur Taylor",
          description: "Welcome back to Apex 👋🏻",
          showCardIcon: false,
          imageSrc: "/avatarr.png",
          imageAlt: "avatar",
        };
    }
  };

  const headerContent = getHeaderContent();

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth < 1024) {
        setIsSidebarExpanded(false);
        setIsMobileMenuOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const sidebarWidth = isSidebarExpanded ? 280 : 80;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <DashboardProvider>
      <div className="flex max-w-[1440px] mx-auto relative">
        {/* Mobile Overlay */}
        {isMobile && isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-[rgba(2,13,23,0.24)] backdrop-blur-[5px] z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
          fixed h-screen bg-white z-50 transition-transform duration-300 ease-in-out
          ${
            isMobile
              ? `transform ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                } w-80`
              : "translate-x-0"
          }
        `}
          style={{ width: isMobile ? 320 : sidebarWidth }}
        >
          <Sidebar
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
            isMobile={isMobile}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>

        {/* Main Content */}
        <div
          className={`
          flex-1 h-screen text-white w-full relative transition-all duration-300
          ${isMobile ? "ml-0" : ""}
        `}
          style={{ marginLeft: isMobile ? 0 : sidebarWidth }}
        >
          <div className="sticky top-0 z-50 bg-white w-full">
            <div className=" sm:px-6 lg:px-8">
              <Header
                isMobile={isMobile}
                onMobileMenuToggle={toggleMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
                title={headerContent.title}
                description={headerContent.description}
                showCardIcon={headerContent.showCardIcon}
                imageSrc={headerContent.imageSrc}
                imageAlt={headerContent.imageAlt}
                isTransactionPage={headerContent.isTransactionPage}
              />
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 pb-8"> {children}</div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Layout;
