import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-2xl border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Price Trend in {currency}</h2>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#333',
                font: {
                  size: 14,
                },
              },
            },
            tooltip: {
              backgroundColor: '#333',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: '#555',
              borderWidth: 1,
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
              ticks: {
                color: '#666',
                font: {
                  size: 12,
                },
              },
              grid: {
                color: '#e5e7eb',
                borderColor: '#e5e7eb',
              },
            },
            y: {
              ticks: {
                color: '#666',
                font: {
                  size: 12,
                },
              },
              grid: {
                color: '#e5e7eb',
                borderColor: '#e5e7eb',
              },
            },
          },
        }}
        data={{
          labels: date,
          datasets: [
            {
              label: `Price in ${currency}`,
              data: prices,
              borderColor: '#4a90e2',
              backgroundColor: 'rgba(74, 144, 226, 0.2)',
              borderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
