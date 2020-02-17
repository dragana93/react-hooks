import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, sentCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      sentCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count} <br />
      <button onClick={() => sentCount(initialCount)}>Reset</button>
      <button onClick={() => sentCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => sentCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
