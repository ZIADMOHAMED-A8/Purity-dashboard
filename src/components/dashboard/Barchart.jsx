import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const SimpleBarChart = () => {
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
