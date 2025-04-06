import React from 'react';
import { Grid, Paper } from '@mui/material';
import BarChart from './components/BarChart';
import BarChart2 from './components/BarChart2';
import LineChart from './components/LineChart';
import LineChart2 from './components/LineChart2';
export default function Page() {
  return (
    <div>
      <h1>Recharts Demo</h1>
      <p>This is a demo page for Recharts.</p>
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid item xs={6}>
          <GridBox title="Bar Chart 2">
            <BarChart2 />
          </GridBox> 
        </Grid>
        <Grid item xs={6}>
          <GridBox title="Line Chart 2">
            <LineChart2 />
          </GridBox>
        </Grid>
        <Grid item xs={6}>
          <GridBox title="Bar Chart">
            <BarChart />
          </GridBox> 
        </Grid>
        <Grid item xs={6}>
          <GridBox title="Line Chart">
            <LineChart />
          </GridBox> 
        </Grid>
      </Grid>  
    </div>
  );
}

function GridBox({ title, children }) {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
    <h2>{title}</h2>
    <div
      className="chart-container"
      style={{
        width: '100%', // Ensure the chart container respects the width of the grid item
        maxWidth: '100%', // Makes sure the chart stays within its container width
        height: '300px', // Fixed height for the chart container
        display: 'flex',
        justifyContent: 'center', // Center the chart horizontally
        alignItems: 'center', // Center the chart vertically
      }}
    >
      {children}
    </div>
  </div>
    // <Paper elevation={3} style={{ padding: '20px' , width: '100%'}}>
    
    //   <h2>{title}</h2>
    //   <div className="chart-container" style={{
    //     padding: '20px',
    //     width: '100%',
    //     height: '100%', // Ensures that the chart container doesn’t resize unexpectedly
    //     boxSizing: 'border-box', // Prevent padding from affecting the width/height
    //   }}>
    //     {children}
    //   </div>
    // </Paper>
  );
}