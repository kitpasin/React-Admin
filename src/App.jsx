/* eslint-disable */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Topbar from "./layouts/Topbar";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Members from "./pages/members/Members";
import Categories from "./pages/store/categories/Categories";
import Products from "./pages/store/Products";
import Orders from "./pages/orders/Orders";
import Report from "./pages/report/Report";

function App() {
  const [sidebar, setSidebar] = useState("open");

  return (
    <>
      <div className="flex items-start w-full h-screen">
        <div
          className={`bg-gradient-to-b from-gray-500 to-gray-900 w-full h-screen ${
            sidebar === "close" ? "max-w-[70px]" : "max-w-[300px]"
          } transition-all ease-in-out duration-300`}
        >
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className="flex flex-col w-full h-screen overflow-hidden">
          <div className="w-full h-full max-h-[70px] z-50 shadow-md">
            <Topbar sidebar={sidebar} setSidebar={setSidebar} />
          </div>
          <div className="p-4 h-full overflow-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/store/categories" element={<Categories />} />
              <Route path="/store/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
