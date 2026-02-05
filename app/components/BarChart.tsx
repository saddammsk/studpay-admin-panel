"use client"; // Needed for Next.js 13+ app directory

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

interface BarChartProps {
     labels: string[];
     blueData: number[];
     orangeData: number[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, blueData, orangeData }) => {
     const data = {
          labels,
          datasets: [
               {
                    label: "Blue",
                    data: blueData,
                    backgroundColor: "#2196f3", // blue
               },
               {
                    label: "Orange",
                    data: orangeData,
                    backgroundColor: "#ff9800", // orange
               },
          ],
     };

     const options = {
          responsive: true,
          plugins: {
               legend: {
                    position: "top" as const,
               },
               title: {
                    display: false,
               },
          },
          scales: {
               y: {
                    beginAtZero: true,
                    ticks: {
                         stepSize: 65, // similar to your chart
                    },
               },
          },
     };

     return <Bar data={data} options={options} />;
};

export default BarChart;
