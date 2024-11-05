import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const performanceData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Portfolio Performance",
      data: [65, 78, 72, 85, 82, 90, 88, 94, 92],
      fill: true,
      borderColor: "#f97316",
      backgroundColor: "rgba(249, 115, 22, 0.1)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export default function PerformanceChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Performance Overview</h2>
          <p className="text-sm text-gray-500">Portfolio growth over time</p>
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
          <option>Last 9 months</option>
          <option>Last 6 months</option>
          <option>Last 3 months</option>
        </select>
      </div>
      <div className="h-[300px]">
        <Line data={performanceData} options={options} />
      </div>
    </div>
  );
}
