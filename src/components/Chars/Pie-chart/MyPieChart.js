import React from 'react';
import { Pie, PieChart } from 'recharts';
import useChart from '../../../hooks/useChart';


const MyPieChart = () => {
    const [data ,setdata]=useChart()
    return (
        <PieChart width={400} height={250}>
        <Pie data={data} dataKey="revenue" nameKey="revenue" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data} dataKey="investment" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>
    );
};

export default MyPieChart;