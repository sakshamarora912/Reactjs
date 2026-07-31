import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,LineElement,PointElement,Title,Tooltip,Legend,} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === '24h') date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {color: '#333',font: {size: 14,}},
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.dataset.label || '';
                  const value = context.raw || 0;
                  return `${label}: $${value.toFixed(2)}`;
                },
              },
            },
          },
          scales: {
            x: {
              ticks: {color: '#666',font: {size: 12}},
              grid: {color: '#eee'},
            },
            y: {
              ticks: {color: '#666',font: {size: 12},},
              grid: {color: '#eee'},
            },
          },
        }}
        data={{
          labels: date,
          datasets: [
            {
              label: `Price in ${currency}`,
              data: prices,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderWidth: 2,
              pointRadius: 3,
              pointHoverRadius: 5,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
