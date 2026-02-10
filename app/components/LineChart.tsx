"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


export interface Dataset<T> {
  key: keyof T;
  label: string;
  borderColor: string;
  backgroundColor?: string;
  tension?: number;
}

export interface LineChartProps<T extends object> {
  data: T[];
  datasets: Dataset<T>[];
  xKey?: keyof T;
}


function LineChart<T extends object>({
  data,
  datasets,
  xKey,
}: LineChartProps<T>) {
  const resolvedXKey = xKey ?? (Object.keys(data[0])[0] as keyof T);

  const chartData = {
    labels: data.map((d) => String(d[resolvedXKey])),
    datasets: datasets.map((ds) => ({
      label: ds.label,
      data: data.map((d) => d[ds.key] as number),
      borderColor: ds.borderColor,
      backgroundColor: ds.backgroundColor ?? ds.borderColor + "33",
      tension: ds.tension ?? 0.3,
      fill: Boolean(ds.backgroundColor),
    })),
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `€${ctx.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) =>
            typeof value === "number" ? `€${value / 1000}K` : value,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
