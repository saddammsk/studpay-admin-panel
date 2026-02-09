'use client';

import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     BarElement,
     Tooltip,
     Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
     CategoryScale,
     LinearScale,
     BarElement,
     Tooltip,
     Legend
);

export default function CountryChart() {
     const data = {
          labels: ['Netherlands', 'Italy', 'Spain', 'UK', 'France', 'Germany'],
          datasets: [
               {
                    data: [0.1, 0.15, 0.2, 0.3, 0.25, 0.35],
                    backgroundColor: '#3b82f6',
                    borderRadius: 6,
                    barThickness: 14,
               },
          ],
     };

     const options = {
          indexAxis: 'y' as const, // 👈 horizontal
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
               legend: {
                    display: false,
               },
          },
          scales: {
               x: {
                    min: 0,
                    max: 1,
                    ticks: {
                         stepSize: 0.25,
                    },
                    grid: {
                         color: '#e5e7eb',
                    },
               },
               y: {
                    grid: {
                         display: false,
                    },
               },
          },
     };

     return (
          <div style={{ width: '100%', height: '300px' }}>
               <Bar data={data} options={options} />
          </div>
     );
}
