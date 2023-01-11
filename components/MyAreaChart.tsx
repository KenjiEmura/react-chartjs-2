import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MyAreaChart = () => {
  const data = [
    { name: "Page A", available: 4000, required: 2400 },
    { name: "Page B", available: 3000, required: 1398 },
    { name: "Page C", available: 2000, required: 9800 },
    { name: "Page D", available: 2780, required: 3908 },
    { name: "Page E", available: 1890, required: 4800 },
    { name: "Page F", available: 2390, required: 3800 },
    { name: "Page G", available: 3490, required: 4300 },
  ];
  return (
    <AreaChart width={600} height={300} data={data}>
      {/* You can define the custom fill colors or gradients here */}
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="available" fill="#8884d8" offset={0} />
      <Bar dataKey="required" fill="#82ca9d" offset={0} /> */}
      <Area
        type="monotone"
        dataKey="required"
        stroke="red"
        fillOpacity={1}
        fill="red"
        name="必要な職人"
      />
      <Area
        type="monotone"
        dataKey="available"
        stroke="green"
        fillOpacity={1}
        // fill="url(#colorUv)"
        name="職人"
      />
    </AreaChart>
  );
};
export default MyAreaChart;
