/* eslint-disable */
import { Link } from "react-router-dom";
import { TablesData } from "../../../data/dashboard/TablesData";

function LatestOrdersTable() {
  function statusColor(status) {
    if (status === "Paid") return "text-green-500";
    if (status === "Pending") return "text-blue-500";
    return "text-red-500";
  }

  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-left text-gray-500 font-bold">
        <thead className="text-gray-700 bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Orders
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {TablesData &&
            TablesData.map((data) => (
              <tr key={data.id} className="bg-white border-b">
                <th scope="row" className="px-6 py-4">
                  <Link
                    to={`order/${data.id}`}
                    className="transition-all ease-in-out duration-300 hover:text-gray-700"
                  >
                    {data.id}
                  </Link>
                </th>

                <td className="px-6 py-4">{data.product}</td>
                <td className={`${statusColor(data.status)} px-6 py-4`}>{data.status}</td>
                <td className="px-6 py-4">{data.date}</td>
                <td className="px-6 py-4">{data.customer}</td>
                <td className="px-6 py-4">{data.total}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default LatestOrdersTable;
