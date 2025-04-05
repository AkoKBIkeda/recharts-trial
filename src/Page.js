import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
export default function Page() {
  return (
    <div>
      <h1>Recharts Demo</h1>
      <p>This is a demo page for Recharts.</p>
      <GridItem title="Bar Chart">
        <BarChart />
        </GridItem> 
      <GridItem title="Line Chart">
        <LineChart /></GridItem>  
     
    </div>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="grid-item">
      <h2>{title}</h2>
      <div className="chart-container">
        {children}
      </div>
    </div>
  );
}