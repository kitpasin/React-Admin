/* eslint-disable */
import { TablesData } from "../../../data/dashboard/TablesData";

function TopSellingTable() {
  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-left text-gray-500 font-bold">
        <thead className="text-gray-700 bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Products
            </th>
            <th scope="col" className="px-6 py-3">
              Sold
            </th>
          </tr>
        </thead>
        <tbody>
          {TablesData &&
            TablesData.map((data) => (
              <tr key={data.id} className="bg-white border-b">
                <th scope="row" className="px-6 py-4">
                  {data.product}
                </th>
                <td className="px-6 py-4">{data.sold}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopSellingTable;
