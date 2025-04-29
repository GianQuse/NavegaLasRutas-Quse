import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <button onClick={decrease} className="counter-button decrement">-</button>
      <span className="counter-value">{count}</span>
      <button onClick={increase} className="counter-button increment">+</button>
    </div>
  );
}

export default Counter;

