import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MyBarChart = () => {
  const data = [
    { name: "Page A", dataSet1: 4000, dataSet2: 2400 },
    { name: "Page B", dataSet1: 3000, dataSet2: 1398 },
    { name: "Page C", dataSet1: 2000, dataSet2: 9800 },
    { name: "Page D", dataSet1: 2780, dataSet2: 3908 },
    { name: "Page E", dataSet1: 1890, dataSet2: 4800 },
    { name: "Page F", dataSet1: 2390, dataSet2: 3800 },
    { name: "Page G", dataSet1: 3490, dataSet2: 4300 },
  ];
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="dataSet1" fill="#8884d8" stackId="a" name="職人" />
      <Bar dataKey="dataSet2" fill="#82ca9d" stackId="a" name="必要な職人" />
    </BarChart>
  );
};
export default MyBarChart;
