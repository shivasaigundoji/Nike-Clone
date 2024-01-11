import React, { useEffect, useState } from 'react'

const Temp = () => {
    const [var1, setvar1] = useState(10);
    const [var2, setvar2] = useState(20);
    const [result,setResult] = useState(0);
    const word = "Shivasai is a developer";

        useEffect(()=>{
            setvar1(var1+4);
        },[])
    const handleclick =()=>{
        setResult(var1+var2);
        console.log(word.split(' ').reverse().join(' '));
    }
  return (
    <div>
        <button onClick={handleclick} className='p-2'>Click me</button>
        <p>{result}</p>
    </div>
  )
}

export default Temp