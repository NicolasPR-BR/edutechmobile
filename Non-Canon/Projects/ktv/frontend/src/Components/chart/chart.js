import {LineChart, Line, YAxis, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import React, {useEffect, useState} from 'react';

const Chart  = React.memo(({data}) =>{
  
    const [height, setHeight] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
      setName(data[0].name)
    }, [])

    useEffect(() => {
    if(height.length >= 150){
      setHeight([...data])
    }else{
      setHeight([...height, ...data])
    }

  }, [data])  
    
    
    console.log(height)
    return( 
  <>
  <ResponsiveContainer width={600} height={400}>
  <LineChart data={height}
        margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey={name} />
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Line isAnimationActive={false} animationBegin={0} animationDuration={0} dataKey={name} stroke="#82ca9d"/>
  </LineChart>
  </ResponsiveContainer>
  </>
  );
})
export default Chart;