/* eslint-disable */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import axios from "axios";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/store/Category";
import Product from "./pages/store/product";
import Order from "./pages/order/Order";
import Report from "./pages/report/Report";

function App() {
  const [users, setUsers] = useState([]);
  const [sidebar, setSidebar] = useState("open");

  async function getUsers() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <div className="flex items-start w-full h-full min-h-screen">
        <div
          className={`bg-gradient-to-b from-gray-500 to-gray-900 w-full ${
            sidebar === "close" ? "max-w-[70px]" : "max-w-[300px]"
          } h-full min-h-screen transition-all ease-in-out duration-300`}
        >
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full h-[55px] shadow-md">
            <Topbar sidebar={sidebar} setSidebar={setSidebar} />
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/store/category" element={<Category />} />
              <Route path="/store/product" element={<Product />} />
              <Route path="/order" element={<Order />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
