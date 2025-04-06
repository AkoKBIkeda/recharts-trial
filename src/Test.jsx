// import React from 'react';
import { Grid, Paper } from '@mui/material';
import { ResponsiveContainer } from 'recharts'; // Make sure you are using ResponsiveContainer for responsiveness

export default function Test() {
  return (
    <div>
      <h1>Recharts Demo</h1>
      <p>This is a demo page for Recharts.</p>
      <Grid container spacing={2}>
        {/* Ensure grid items take half width on medium screens, full width on small screens */}
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px', width: '100%' }}>
            <h2>Chart 1</h2>
            {/* Example of Chart 1 inside ResponsiveContainer */}
            <ResponsiveContainer width="100%" height={300}> {/* ResponsiveContainer ensures chart fits */}
              {/* Replace with actual chart component */}
              <div style={{ backgroundColor: 'gray', height: '100%' }}>Chart 1 Content</div>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px', width: '100%' }}>
            <h2>Chart 2</h2>
            {/* Example of Chart 2 inside ResponsiveContainer */}
            <ResponsiveContainer width="100%" height={300}> {/* ResponsiveContainer ensures chart fits */}
              {/* Replace with actual chart component */}
              <div style={{ backgroundColor: 'gray', height: '100%' }}>Chart 2 Content</div>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
