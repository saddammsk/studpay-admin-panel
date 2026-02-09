'use client';

import {
     Chart as ChartJS,
     ArcElement,
     Tooltip,
     Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
     labels: ['Tuition', 'Housing', 'Food', 'Crypto', 'Others'],
     datasets: [
          {
               data: [45, 25, 15, 10, 5],
               backgroundColor: [
                    '#1e88ff',
                    '#0b6fe3',
                    '#6bbcff',
                    '#a6d4ff',
                    '#dbeeff',
               ],
               borderWidth: 0,
          },
     ],
};
const options = {
     responsive: true,
     maintainAspectRatio: false,
     layout: {
          padding: {
               top: 20,
               right: 30,
               bottom: 20,
               left: 30,
          },
     },
     plugins: {
          legend: {
               display: false,
          },
          datalabels: {
               color: '#1e88ff',
               font: {
                    size: 12,
                    weight: 500,
               },
               formatter: (value: number, context: any) => {
                    const label =
                         context.chart.data.labels?.[context.dataIndex];
                    return `${label} ${value}%`;
               },
               anchor: 'end' as const, // ✅ FIX
               align: 'end' as const,  // ✅ FIX
               offset: 4,
          },
     },
};



export default function ExpensePieChart() {
     return (
          <div className="h-[260px] overflow-visible">
               <Pie data={data} options={{ ...options, maintainAspectRatio: false }} />
          </div>
     );
}
