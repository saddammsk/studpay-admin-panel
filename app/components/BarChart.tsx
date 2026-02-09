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

interface Dataset {
  key: string;       
  label: string;  
  color: string;    
}

interface BarChartProps {
  data: { [key: string]: string | number }[];
  datasets: Dataset[];                     
  xKey?: string;                       
}

const BarChart: React.FC<BarChartProps> = ({ data, datasets, xKey = "month" }) => {
  const chartData = {
    labels: data.map((d) => d[xKey]),
    datasets: datasets.map((ds) => ({
      label: ds.label,
      data: data.map((d) => d[ds.key]),
      backgroundColor: ds.color,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
     legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
