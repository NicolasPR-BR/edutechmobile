import {LineChart, Line, YAxis, CartesianGrid, XAxis, Tooltip, Legend} from 'recharts';
import React, {useEffect, useState} from 'react';

const Chart  = React.memo(({data}) =>{
  
    const [height, setHeight] = useState([]);
      
    useEffect(() => {
    if(height.length >= 100){
      setHeight([...data])
    }else{
      setHeight([...height, ...data])
    }

  }, [data])  
    
    
    console.log(height)
    return( 
  <>

  <LineChart width={730} height={250} data={height}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="tplus" />
          <Tooltip/>
          <Legend/>
          <YAxis dataKey="height"/>
          <Line isAnimationActive={false} animationBegin={0} animationDuration={0}  dataKey="height" stroke="#82ca9d"/>
  </LineChart>

  </>
  );
})
export default Chart;