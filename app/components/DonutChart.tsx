'use client';

import {
     Chart as ChartJS,
     ArcElement,
     Tooltip,
     Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
     const data = {
          labels: ['Transfers', 'Insights', 'Crypto', 'AI / Holding', 'Other'],
          datasets: [
               {
                    data: [42, 20, 18, 15, 5],
                    backgroundColor: [
                         '#1e88ff', // blue
                         '#10b981', // green
                         '#f59e0b', // orange
                         '#ef4444', // red
                         '#6b7280', // gray
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff',
               },
          ],
     };

     const options = {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%', // 👈 donut hole
          plugins: {
               legend: {
                    position: 'bottom' as const,
                    labels: {
                         boxWidth: 12,
                         usePointStyle: true,
                    },
               },
          },
     };

     return (
          <div style={{ width: '100%', height: '300px' }}>
               <Doughnut data={data} options={options} />
          </div>
     );
}
