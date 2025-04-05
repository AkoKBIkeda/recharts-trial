'use client';
import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const charityData = [
    {
        name: 'Jan',
        charity1: 4000,
        charity2: 2400,
        charity3: 2400,
    },
    {
        name: 'Feb',
        charity1: 3000,
        charity2: 1398,
        charity3: 2210,
    },
    {
        name: 'Mar',
        charity1: 2000,
        charity2: 9800,
        charity3: 2290,
    },
    {
        name: 'Apr',
        charity1: 2780,
        charity2: 3908,
        charity3: 2000,
    },
    {
        name: 'May',
        charity1: 1890,
        charity2: 4800,
        charity3: 2181,
    },
    {
        name: 'Jun',
        charity1: 2390,
        charity2: 3800,
        charity3: 2500,
    },
    {
        name: 'Jul',
        charity1: 3490,
        charity2: 4300,
        charity3: 2100,
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

                <Line dataKey="charity1" fill="#8884d8" />
                <Line dataKey="charity2" fill="#82ca9d" />
                <Line dataKey="charity3" fill="#ffc658" />
            </LineChart>
        </ResponsiveContainer>
    )
};

export default LineChartComponent;