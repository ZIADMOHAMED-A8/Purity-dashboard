import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Heading from "../ui/Heading";
import { useQuery } from "@tanstack/react-query";
import { getMonthlyStats } from "../../api/getDashboardData/getSales";
import Skeleton from "react-loading-skeleton";


export default function ChartCard() {
  const {data,isLoading}=useQuery({
    name:['monthlyStats'],
    queryFn:getMonthlyStats
  })
  if(isLoading){
    return (
      <div className="bg-white p-4 rounded-2xl flex-3 shadow-md max-w-5xl flex flex-col gap-6">
        <Skeleton height={28} width={180} />
        <Skeleton height={260} />
      </div>
    )
  }
  return (
    <div className="bg-white min-h-[600px]  p-4 rounded-2xl flex-3 shadow-md max-w-5xl flex flex-col gap-6  ">
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
