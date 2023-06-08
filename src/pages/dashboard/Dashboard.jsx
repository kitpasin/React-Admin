/* eslint-disable */
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Card } from "@mui/material";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-xl font-bold text-gray-700">
        <DashboardIcon style={{ fontSize: "28px" }} />
        <p>Dashboard</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-gray-700 font-bold">Revenue</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700 text-xl font-bold">$100,000.00</p>
            <p className="text-green-700 font-bold">+11.1%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 font-bold">Vs 3 month prior to</p>
            <p className="text-gray-500 font-bold">01 June 2023</p>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-gray-700 font-bold">Order</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700 text-xl font-bold">1,234</p>
            <p className="text-red-700 font-bold">-3.3%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 font-bold">Vs 3 month prior to</p>
            <p className="text-gray-500 font-bold">01 June 2023</p>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-gray-700 font-bold">Purchase</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700 text-xl font-bold">$555,555.55</p>
            <p className="text-green-700 font-bold">+5.5%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 font-bold">Vs 3 month prior to</p>
            <p className="text-gray-500 font-bold">01 June 2023</p>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2 p-4">
          <p>Graph 1</p>
        </Card>
        <Card className="p-4">
          <p>Graph 2</p>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
