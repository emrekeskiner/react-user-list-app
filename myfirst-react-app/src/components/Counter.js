import React, {useState, useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount]= useState(1);

    

    useEffect(()=> {
      let interval = setInterval(()=> {
      console.log('interval')
      setCount((prev) => prev+1);
     },1000 );

     return () => clearInterval(interval);
    }, []);

   

  return (
    <div>
        <div>Counter
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev+1)}>Arttır</button>
        <button onClick={() => setCount(count-1)}>Düşür</button>
    </div>
    <div>Amount
        <h1>{amount}</h1>
        <button onClick={() => setAmount(amount+5)}>5 Arttır</button>
        <button onClick={() => setAmount(amount-5)}>5 Düşür</button>
    </div>
    </div>
  );
}

export default Counter