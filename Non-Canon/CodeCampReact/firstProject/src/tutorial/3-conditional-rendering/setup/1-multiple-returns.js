import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

 const [isLoading, setIsLoading] = useState(true);
 const [isError, setIsError] = useState(false); 
 const [user, setUser] = useState('default user');

 

  useEffect(() => {
    fetch(url).then((resp) => {if(resp.status >= 200 && resp.status <= 299){return resp.json()}}).then((user) => {const {login} = user; setUser(login); setIsLoading(false);}).catch(error => setIsError(true));
  }, [])
  
  if (isError){
    return <><h2>Something went wrong!</h2>
    
    </>;
  }else if(isLoading){
    return <><h2>Loading</h2></>;
    
  }else{
  return <>
  
    <h2>{user}</h2>
   
   </>
  
  }
};

export default MultipleReturns;
