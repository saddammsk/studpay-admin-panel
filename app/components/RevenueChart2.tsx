"use client";

import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Tooltip,
     Legend,
     Filler,
     ChartOptions,
     ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Tooltip,
     Legend,
     Filler
);

const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function RevenueChart2() {
     const data: ChartData<"line"> = {
          labels,
          datasets: [
               {
                    label: "Revenue",
                    data: [2.5, 2.8, 3.2, 2.9, 3.6, 4.2],
                    borderColor: "#10B981",
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    backgroundColor: (context) => {
                         const ctx = context.chart.ctx;
                         const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                         gradient.addColorStop(0, "rgba(16, 185, 129, 0.35)");
                         gradient.addColorStop(1, "rgba(16, 185, 129, 0)");
                         return gradient;
                    },
               },
               {
                    label: "Expenses",
                    data: [1.6, 1.9, 2.2, 2.0, 2.6, 2.9],
                    borderColor: "#EF4444",
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    backgroundColor: (context) => {
                         const ctx = context.chart.ctx;
                         const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                         gradient.addColorStop(0, "rgba(239, 68, 68, 0.35)");
                         gradient.addColorStop(1, "rgba(239, 68, 68, 0)");
                         return gradient;
                    },
               },
          ],
     };

     const options: ChartOptions<"line"> = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
               legend: {
                    display: false,
               },
               tooltip: {
                    callbacks: {
                         label: (context) =>
                              `€${context.parsed.y?.toFixed(1) ?? "0"}M`,
                    },
               },
          },
          scales: {
               y: {
                    grid: {
                         color: "#E5E7EB",
                    },
                    ticks: {
                         callback: (value) => `€${value}M`,
                    },
               },
               x: {
                    grid: {
                         display: false,
                    },
               },
          },
     };

     return (
          <div style={{ height: "350px" }}>
               <Line data={data} options={options} />
          </div>
     );
}