/* eslint-disable */
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar({ sidebar, setSidebar }) {
  const [storeSubmenu, setStoreSubmenu] = useState("close");

  function toggleStoreSubmenu() {
    {
      storeSubmenu === "open" ? setStoreSubmenu("close") : setStoreSubmenu("open");
    }
  }

  const menus = [
    {
      title: "Dashboard",
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "System Management",
      path: "/store",
      name: "Store",
      icon: <StoreIcon />,
      submenus: [
        {
          path: "/store/category",
          name: "Category",
          icon: <StoreIcon />,
        },
        {
          path: "/store/product",
          name: "Product",
          icon: <StoreIcon />,
        },
      ],
    },
    {
      path: "/order",
      name: "Order",
      icon: <ShoppingCartIcon />,
    },
    {
      path: "/report",
      name: "Report",
      icon: <SummarizeIcon />,
    },
  ];
  return (
    <div className="w-full h-full text-white font-bold">
      <div className="flex justify-between items-center text-center w-full p-4">
        <figure className="w-full">
          <img src="/images/pikachu.png" alt="Pikachu" />
        </figure>
        {sidebar === "open" && <p className="w-full">React Admin</p>}
      </div>
      <hr
        className={`${
          sidebar === "open" ? "w-[268px]" : "w-[45px]"
        } m-auto transition-all ease-in-out duration-300`}
      />
      <div className="flex flex-col p-3 gap-2">
        {menus.map((menu) => (
          <div key={menu.path}>
            {menu.submenus ? (
              <>
                {sidebar === "open" && <div className="py-2">{menu.title}</div>}
                <div
                  onClick={toggleStoreSubmenu}
                  className={`flex ${
                    sidebar === "close" ? "justify-center gap-0" : "justify-between"
                  } items-center gap-2 p-2 rounded-md transition-all ease-in-out duration-300 cursor-pointer hover:bg-gray-900`}
                >
                  <div className="flex gap-2">
                    {menu.icon}
                    {sidebar === "open" && menu.name}
                  </div>
                  <div
                    className={`${
                      storeSubmenu === "open" && "transform scale-y-[-1]"
                    } transition-all ease-in-out duration-300`}
                  >
                    {sidebar === "open" && <KeyboardArrowUpIcon />}
                  </div>
                </div>
                {menu.submenus?.map((submenu) => (
                  <div
                    key={submenu.path}
                    className={`${
                      storeSubmenu === "open" ? "h-10" : "h-0"
                    } overflow-hidden transition-all ease-in-out duration-300`}
                  >
                    <Link
                      to={submenu.path}
                      className={`flex ${
                        sidebar === "close" && "justify-center pl-0"
                      } items-center gap-2 pl-8 py-2 rounded-md transition-all ease-in-out duration-300 hover:bg-gray-900`}
                    >
                      {submenu.icon}
                      {sidebar === "open" && submenu.name}
                    </Link>
                  </div>
                ))}
              </>
            ) : (
              <>
                {sidebar === "open" && menu.title && <div className="py-2">{menu.title}</div>}
                <Link
                  to={menu.path}
                  className={`flex ${
                    sidebar === "close" && "justify-center"
                  } items-center gap-2 p-2 rounded-md transition-all ease-in-out duration-300 hover:bg-gray-900`}
                >
                  {menu.icon}
                  {sidebar === "open" && menu.name}
                </Link>
              </>
            )}
          </div>
        ))}
      </div>
      <hr
        className={`${
          sidebar === "open" ? "w-[268px]" : "w-[45px]"
        } m-auto transition-all ease-in-out duration-300`}
      />
    </div>
  );
}

export default Sidebar;
