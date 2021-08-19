import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const x = "Ноль";

  const formCount = () => (count === 0 ? x : count);

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    if (count < 1) return;
    setCount(count - 1);
  };

  return (
    <>
      <h1 className={`badge ${count ? "bg-primary" : "bg-danger"} m-2`}>
        {formCount()}
      </h1>
      <button
        onClick={() => handleClickPlus()}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
      <button
        onClick={() => handleClickMinus()}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
