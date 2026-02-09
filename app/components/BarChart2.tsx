"use client";

import { Bar } from "react-chartjs-2";
import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps { }

const BarChart2: React.FC<BarChartProps> = () => {
     const data = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
               {
                    label: "Recharge",
                    data: [35000, 42000, 37000, 50000, 46000, 58000],
                    backgroundColor: "#1E90FF", // blue color
               },
               {
                    label: "Withdraw",
                    data: [28000, 31000, 29000, 38000, 32000, 45000],
                    backgroundColor: "#00BFFF", // lighter blue
               },
          ],
     };

     const options = {
          responsive: true,
          plugins: {
               legend: {
                    position: "bottom" as const,
               },
               title: {
                    display: false,
               },
          },
          scales: {
               y: {
                    beginAtZero: true,
                    ticks: {
                         stepSize: 15000,
                    },
               },
          },
     };

     return <Bar className="w-full h-full" data={data} options={options} />;
};

export default BarChart2;
