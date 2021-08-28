import {LineChart, Line, YAxis, CartesianGrid, XAxis} from 'recharts';
import React, { useState } from 'react';

const Chart  = React.memo(({props}) =>{
    const height = props;
    
    console.log(height);
    return( 
  <>
  <LineChart width={730} height={250} data={height}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="tplus" />
          <YAxis dataKey="height"/>
          <Line isAnimationActive={false} animationBegin={0} animationDuration={0}  dataKey="height" stroke="#82ca9d" />
  </LineChart>
  </>
  );
})
export default Chart;