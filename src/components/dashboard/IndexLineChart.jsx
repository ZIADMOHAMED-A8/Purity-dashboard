import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Heading from "../ui/Heading";

const data = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 456 },
  { name: "Mar", uv: 300, pv: 139 },
  { name: "Apr", uv: 200, pv: 980 },
  { name: "May", uv: 278, pv: 390 },
  { name: "Jun", uv: 189, pv: 480 },
];

export default function ChartCard() {
  return (
    <div className="bg-white  p-4 rounded-2xl flex-3 shadow-md max-w-5xl flex flex-col gap-6  ">
      <Heading>Sales overview</Heading>

      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            {/* <CartesianGrid strokeDasharray="3 3" className="opacity-30" /> */}
            <XAxis axisLine={false}
  tickLine={false} dataKey="name" stroke="gray" />
            <YAxis axisLine={false}
  tickLine={false} />
            <Line type="monotone" dataKey="uv" stroke="#6366f1" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="pv" stroke="#22c55e" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
