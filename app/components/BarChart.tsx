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


export interface Dataset<T> {
  key: keyof T;
  label: string;
  color: string;
}

export interface BarChartProps<T extends object> {
  data: T[];
  datasets: Dataset<T>[];
  xKey?: keyof T;
}


function BarChart<T extends object>({
  data,
  datasets,
  xKey,
}: BarChartProps<T>) {
  if (!data || data.length === 0) return null;

  const resolvedXKey = xKey ?? (Object.keys(data[0])[0] as keyof T);

  const chartData = {
    labels: data.map((d) => String(d[resolvedXKey])),
    datasets: datasets.map((ds) => ({
      label: ds.label,
      data: data.map((d) => d[ds.key] as number),
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
}

export default BarChart;
