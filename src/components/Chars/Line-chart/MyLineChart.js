import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../../hooks/useChart';

const MyLineChart = () => {
const [data,setData]=useChart()
    return (
        <div>
            <LineChart width={400} height={200} data={data}>
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default MyLineChart;