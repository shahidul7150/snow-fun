import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../../hooks/useChart';

const MyBarChart = () => {
    const [data,setData]=useChart()
    return (
        <div>
            <BarChart width={400} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="sell" fill="#0022ee" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
        </div>
    );
};

export default MyBarChart;