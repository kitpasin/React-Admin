import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "../../../data/dashboard/ChartData";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const category = ChartData.map((data) => data.category);
  const sold = ChartData.map((data) => data.sold);
  const totalSold = sold.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const data = {
    labels: category,
    datasets: [
      {
        label: "Sold",
        data: sold,
        backgroundColor: [
          "rgba(239, 68, 68, 1)",
          "rgba(168, 85, 247, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(234, 179, 8, 1)",
          "rgba(34, 197, 94, 1)",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const totalSoldTextPlugin = {
    id: "centerTextPlugin",
    afterDraw: (chart) => {
      const { ctx, chartArea } = chart;
      const { top, right, bottom, left } = chartArea;

      const fontSize = "1rem";
      const fontWeight = "bold";
      ctx.font = `${fontWeight} ${fontSize} sans-serif`;
      ctx.fillStyle = "rgb(107, 114, 128)";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      const text = `${totalSold} Product Sold`;
      const textX = Math.round((left + right) / 2);
      const textY = Math.round((top + bottom) / 2);

      const originalCompositeOperation = ctx.globalCompositeOperation;
      ctx.globalCompositeOperation = "destination-over";

      ctx.fillText(text, textX, textY);
      ctx.globalCompositeOperation = originalCompositeOperation;
    },
  };

  const plugins = [totalSoldTextPlugin];

  return (
    <div>
      <Doughnut data={data} plugins={plugins} />
    </div>
  );
};

export default DoughnutChart;
