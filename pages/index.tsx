import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Data {
  time: string;
  available: number;
  shortage: number;
}

export default function StackedBarChart() {
  const data: Data[] = [
    { time: "00:00", available: 5, shortage: 1 },
    { time: "00:15", available: 6, shortage: 0 },
    { time: "00:30", available: 4, shortage: 2 },
    { time: "00:45", available: 9, shortage: 0 },
    // ... and so on for 96 data points
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="available" stackId="a" fill="#8884d8" barSize={10000} />
        <Bar dataKey="shortage" stackId="a" fill="#82ca9d" barSize={10000} />
      </BarChart>
    </ResponsiveContainer>
  );
}
