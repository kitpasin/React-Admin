/* eslint-disable */
import { Card } from "@mui/material";
import { SummariesData } from "../../../data/dashboard/SummariesData";

function Summaries() {
  return (
    <>
      {SummariesData &&
        SummariesData.map((data) => (
          <Card key={data.id} className="p-4">
            <p className="text-gray-700 font-bold">{data.title}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-700 text-xl font-bold">{data.revenue}</p>
              <p
                className={`${
                  data.profit.includes("+") ? "text-green-500" : "text-red-500"
                } font-bold`}
              >
                {data.profit}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-bold">Vs 3 month prior to</p>
              <p className="text-gray-500 font-bold">01 June 2023</p>
            </div>
          </Card>
        ))}
    </>
  );
}

export default Summaries;
