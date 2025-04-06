'use client';
import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const charityData = [
    {
        name: 'Jan',
        overall: 4000,
    },
    {
        name: 'Feb',
        overall: 3000,
    },
    {
        name: 'Mar',
        overall: 2000,
    },
    {
        name: 'Apr',
        overall: 2780,
    },
    {
        name: 'May',
        overall: 1890,
    },
    {
        name: 'Jun',
        overall: 2390,
    },
    {
        name: 'Jul',
        overall: 3490,
    },
];
    
const LineChartComponent = () => {
    return (
        <ResponsiveContainer width={'100%'} height={300}>
            <LineChart width={600} height={300} data={charityData} margin={{ right: 30 }}>
                <YAxis />
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                {/* <Tooltip content={<CustomTooltip />}/> */}
                <Tooltip />
                <Legend />
                <Line dataKey="overall" fill="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
};

export default LineChartComponent;