import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useQuery } from '@tanstack/react-query';
import { getPageStats } from '../../api/getDashboardData/getpagestats';


const SimpleBarChart = () => {
  const {data,isLoading}=useQuery({
    queryKey:['pageStats'],
    queryFn:getPageStats
  })
  if(isLoading){
    return <p className='flex-3'>loading...</p>
  }
  return (
    <div className='bg-white p-4 rounded-2xl flex-[2] shadow-md max-w-5xl bg-gradient-to-r from-[#2f345a] to-[#0f1326]'>
        
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      
      <XAxis dataKey="name" axisLine={false}
  tickLine={false} />
      <YAxis width="auto" axisLine={false}
  tickLine={false} />
      <Tooltip />
      
      <Bar dataKey="pv" fill="white" activeBar={{ fill: 'white', stroke: 'white' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" fill="white" activeBar={{ fill: 'white', stroke: 'white' }} radius={[10, 10, 0, 0]} />
      <RechartsDevtools />
    </BarChart>
    </div>
  );
};

export default SimpleBarChart;
