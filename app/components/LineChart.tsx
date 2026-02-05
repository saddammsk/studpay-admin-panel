"use client"; // Next.js 13+ app directory, required for client components

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
     ChartOptions,
} from "chart.js";

ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend
);

interface LineChartProps {
     labels: string[];
     data: number[];
}

const LineChart: React.FC<LineChartProps> = ({ labels, data }) => {
     const chartData = {
          labels,
          datasets: [
               {
                    label: "Revenue",
                    data,
                    borderColor: "#2563EB", // blue line
                    backgroundColor: "#2563EB33", // transparent blue fill
                    tension: 0.3, // smooth curve
                    fill: false,
               },
          ],
     };

     const options: ChartOptions<"line"> = {
          responsive: true,
          plugins: {
               legend: {
                    display: false,
               },
          },
          scales: {
               y: {
                    beginAtZero: true,
                    ticks: {
                         callback: function (tickValue: string | number) {
                              // ensure tickValue is number before dividing
                              if (typeof tickValue === "number") {
                                   return `€${tickValue / 1000}K`;
                              }
                              return tickValue;
                         },
                    },
               },
          },
     };

     return <Line data={chartData} options={options} />;
};

export default LineChart;
