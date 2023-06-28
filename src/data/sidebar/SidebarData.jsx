/* eslint-disable */
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const SidebarData = [
  {
    dashboard: [
      {
        path: "/",
        title: "Dashboard",
        icon: <DashboardIcon />,
      },
    ],
    system: [
      {
        path: "/members",
        title: "Members",
        icon: <GroupsIcon />,
      },
      {
        title: "Store",
        icon: <StoreIcon />,
        submenus: [
          {
            path: "/store/categories",
            title: "Categories",
            icon: <StoreIcon />,
          },
          {
            path: "/store/products",
            title: "Products",
            icon: <StoreIcon />,
          },
        ],
      },
      {
        path: "/orders",
        title: "Orders",
        icon: <ShoppingCartIcon />,
      },
      {
        path: "/report",
        title: "Report",
        icon: <SummarizeIcon />,
      },
    ],
    content: [
      {
        path: "/posts",
        title: "Posts",
        icon: <MenuBookIcon />,
      },
      {
        path: "/pages",
        title: "Pages",
        icon: <MenuBookIcon />,
      },
    ],
  },
];
