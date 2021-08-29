import {LineChart, Line, YAxis, CartesianGrid, XAxis, Tooltip, Legend} from 'recharts';
import React, {useEffect, useState} from 'react';

const Chart  = React.memo(({data}) =>{
  
    const [height, setHeight] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
      setName(data[0].name)
    }, [])

    useEffect(() => {
    if(height.length >= 300){
      setHeight([...data])
    }else{
      setHeight([...height, ...data])
    }

  }, [data])  
    
    
    console.log(height)
    return( 
  <>

  <LineChart width={600} height={400} data={height}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={name} />
          <YAxis dataKey="yValue"/>
          <Tooltip/>
          <Legend/>
          <Line isAnimationActive={false} animationBegin={0} animationDuration={0} type="monotone" dataKey={name} stroke="#82ca9d"/>
  </LineChart>

  </>
  );
})
export default Chart;