import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div data-test='component-counter'>
      <h2 data-test='counter-display'>Count: {count}</h2>
      <button onClick={increment} data-test='increment-button'>
        Increment
      </button>
    </div>
  );
};

export default Counter;
