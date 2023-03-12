import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Header from "../components/Header";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Analysis = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const petData = [
      20, 14, 28, 15, 22, 30, 25, 18, 20, 32, 26, 24, 22, 28, 30,
    ];

    const petChart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: Array.from({ length: 15 }, (_, i) => i + 1),
        datasets: [
          {
            label: "1 Month Pet Chart",
            data: petData,
            borderColor: "#4F46E5",
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              color: "#E5E7EB",
            },
          },
        },
      },
    });

    return () => {
      petChart.destroy();
    };
  }, []);

  const data = [
    {
      name: "Cat",
      popularity: 35,
    },
    {
      name: "Dog",
      popularity: 45,
    },
    {
      name: "Bird",
      popularity: 10,
    },
    {
      name: "Fish",
      popularity: 5,
    },
    {
      name: "Rabbit",
      popularity: 5,
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-full max-w-3xl mx-auto mt-10">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="flex justify-center max-w-4xl mx-auto mt-10">
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="popularity" fill="#4F46E5" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analysis;
