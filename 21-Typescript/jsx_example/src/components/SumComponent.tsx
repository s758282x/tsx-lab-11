import { useState } from 'react';
import React from 'react';

function SumComponent() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const calculateSum = () => {
    // Deliberate type error: num1 and num2 should be numbers, but we treat them as strings
    setSum(num1 + num2);
  };
 

  return (
    <div>
      <br></br>


    <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value) || 0)} />
    <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value) || 0)} />


      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumComponent;
