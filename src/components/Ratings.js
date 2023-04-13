import { useState } from "react";

const Ratings = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="ratings">
      <h1>Average Rating<br/> 5.0</h1>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </section>
    </div>
  );
};
export default Ratings;
