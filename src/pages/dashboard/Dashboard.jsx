/* eslint-disable */
import { Card } from "@mui/material";
import Summaries from "./components/Summaries";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LatestOrdersTable from "./components/LatestOrdersTable";
import TopSellingTable from "./components/TopSellingTable";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold text-gray-700">Dashboard</p>
      <div className="grid grid-cols-3 gap-4">
        <Summaries />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2 p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">Sales Report</p>
            <button className="text-blue-500 font-bold hover:text-blue-700 hover:underline">
              View Report
            </button>
          </div>
          <BarChart />
        </Card>
        <Card className="p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">Categories</p>
            <button className="text-blue-500 font-bold hover:text-blue-700 hover:underline">
              View Categories
            </button>
          </div>
          <DoughnutChart />
        </Card>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2 p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">Latest Orders</p>
            <button className="text-blue-500 font-bold hover:text-blue-700 hover:underline">
              View Orders
            </button>
          </div>
          <LatestOrdersTable />
        </Card>
        <Card className="p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">Top Selling</p>
            <button className="text-blue-500 font-bold hover:text-blue-700 hover:underline">
              View Products
            </button>
          </div>
          <TopSellingTable />
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
