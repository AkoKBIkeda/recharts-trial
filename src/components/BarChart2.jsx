'use client';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const charityData2 = [
    {
        name: 'Overall',
        charity1: 4000,
        charity2: 2400,
        charity3: 2400,
    },
];
    
const BarChartComponent = () => {
    return (
        <ResponsiveContainer width={'100%'} height={300}>
            <BarChart width={600} height={300} data={charityData2} margin={{ right: 30 }}>
                <YAxis />
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                {/* <Tooltip content={<CustomTooltip />}/> */}
                <Tooltip />
                <Legend />

                <Bar type="monotone" dataKey="charity1" fill="#8884d8" />
                <Bar type="monotone" dataKey="charity2" fill="#82ca9d" />
                <Bar type="monotone" dataKey="charity3" fill="#ffc658" />
            </BarChart>
        </ResponsiveContainer>
    )
};

export default BarChartComponent;