'use client';

import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend
);

const labels = [
     'Germany',
     'France',
     'Morocco',
     'Pakistan',
     'UK',
     'Spain',
     'Italy',
     'Tunisia',
];

const data = {
     labels,
     datasets: [
          {
               label: 'Value',
               data: [25000, 22000, 15000, 13000, 12000, 10000, 8500, 6000],
               backgroundColor: '#1e90ff',
               borderRadius: 6,
          },
     ],
};

const options = {
     responsive: true,
     plugins: {
          legend: {
               display: false,
          },
     },
     scales: {
          y: {
               beginAtZero: true,
          },
     },
};

export default function CountryBarChart() {
     return <Bar data={data} options={options} />;
}
