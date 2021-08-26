import {LineChart, Line, YAxis, CartesianGrid, XAxis} from 'recharts';
import React from 'react';

const Chart  = React.memo(({props}) =>{
    const heightPlot = props;
    
    return( 
  <>
  <LineChart width={730} height={250} data={heightPlot}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="tplus" />
          <YAxis dataKey='height'/>
          <Line isAnimationActive={false} animationBegin={0} animationDuration={0}  dataKey="height" stroke="#82ca9d" />
  </LineChart>
  </>
  );
})
export default Chart;