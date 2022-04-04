import React from 'react';
import './Dashboard.css'
import MyBarChart from '../Chars/Bar-chart/MyBarChart';
import MyLineChart from '../Chars/Line-chart/MyLineChart';
import MyPieChart from '../Chars/Pie-chart/MyPieChart';



const Dashboard = () => {
    return (
        <div className='chart-container mx-auto'>
          
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
            <MyPieChart></MyPieChart>
        </div>
    );
};

export default Dashboard;