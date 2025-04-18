import Sidebar from "../components/dashboard/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex max-w-[1440px] mx-auto">
      <div className="fixed h-screen w-[280px] bg-primary">
        <Sidebar />
      </div>

      <div className="ml-[280px] flex-100 h-screen text-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;
