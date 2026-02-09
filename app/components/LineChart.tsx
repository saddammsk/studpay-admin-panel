"use client";

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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Dataset {
  key: string;    
  label: string;  
  borderColor: string;
  backgroundColor?: string;
  tension?: number;
}

interface LineChartProps {
  data: { [key: string]: number | string }[]; 
  datasets: Dataset[];
  xKey?: string;                          
}

const LineChart: React.FC<LineChartProps> = ({ data, datasets, xKey = "month" }) => {
  const chartData = {
    labels: data.map((d) => d[xKey]),
    datasets: datasets.map((ds) => ({
      label: ds.label,
      data: data.map((d) => d[ds.key]),
      borderColor: ds.borderColor,
      backgroundColor: ds.backgroundColor || ds.borderColor + "33",
      tension: ds.tension ?? 0.3,
      fill: ds.backgroundColor ? true : false,
    })),
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `€${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue) {
            if (typeof tickValue === "number") return `€${tickValue / 1000}K`;
            return tickValue;
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
