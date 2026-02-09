'use client';

import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Filler,
     Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Filler,
     Tooltip
);

const labels = [
     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const dataValues = [
     45000, 52000, 48000, 60000, 55000, 67000,
     73000, 69000, 78000, 85000, 92000, 98000,
];

const data = {
     labels,
     datasets: [
          {
               data: dataValues,
               borderColor: '#1e78ff',
               backgroundColor: 'rgba(30, 120, 255, 0.08)',
               fill: true,
               tension: 0.4,
               pointRadius: 0,
               borderWidth: 2,
          },
     ],
};

const options = {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
          legend: {
               display: false,
          },
          tooltip: {
               mode: 'index' as const,
               intersect: false,
          },
     },
     scales: {
          x: {
               grid: {
                    display: false,
               },
               ticks: {
                    color: '#6b7280',
               },
          },
          y: {
               min: 0,
               max: 100000,
               ticks: {
                    stepSize: 25000,
                    color: '#6b7280',
               },
               grid: {
                    color: '#f1f5f9',
               },
          },
     },
};

export default function RevenueChart() {
     return (
          <div style={{ height: 300 }}>
               <Line data={data} options={options} />
          </div>
     );
}
