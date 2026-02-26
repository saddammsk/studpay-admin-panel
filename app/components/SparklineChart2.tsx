"use client";

import {
     Chart as ChartJS,
     LineElement,
     PointElement,
     LinearScale,
     CategoryScale,
     Filler,
     Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FC } from "react";

ChartJS.register(
     LineElement,
     PointElement,
     LinearScale,
     CategoryScale,
     Filler,
     Tooltip
);

interface SparklineChartProps {
     dataPoints: number[];
     color?: string;
}

const SparklineChart2: FC<SparklineChartProps> = ({
     dataPoints,
     color = "#22c55e",
}) => {
     const data = {
          labels: dataPoints.map((_, i) => i),
          datasets: [
               {
                    data: dataPoints,
                    borderColor: color,
                    backgroundColor: color + "15", // very light fill
                    fill: true,
                    tension: 0.5,
                    borderWidth: 2,
                    pointRadius: 0,
               },
          ],
     };

     const options = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
               legend: { display: false },
               tooltip: { enabled: false },
          },
          scales: {
               x: { display: false },
               y: { display: false },
          },
          elements: {
               line: {
                    capBezierPoints: true,
               },
          },
     };

     return (
          <div className="w-28 h-16">
               <Line data={data} options={options} />
          </div>
     );
};

export default SparklineChart2;