'use client';

import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Tooltip,
     Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Tooltip,
     Legend
);

const labels = ['Jan 1', 'Jan 5', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'];

export const LineChart2 = () => {
     const data = {
          labels,
          datasets: [
               {
                    label: 'Blue Line',
                    data: [300, 380, 260, 450, 390, 430, 480],
                    borderColor: '#3b82f6',
                    backgroundColor: '#3b82f6',
                    tension: 0.4,
                    pointRadius: 4,
               },
               {
                    label: 'Green Line',
                    data: [1800, 2100, 1900, 2350, 2150, 2500, 2750],
                    borderColor: '#10b981',
                    backgroundColor: '#10b981',
                    tension: 0.4,
                    pointRadius: 4,
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
          },
          scales: {
               y: {
                    beginAtZero: true,
                    ticks: {
                         stepSize: 700,
                    },
               },
          },
     };

     return <Line className='!h-[320px] w-full!' data={data} options={options} />;
};
