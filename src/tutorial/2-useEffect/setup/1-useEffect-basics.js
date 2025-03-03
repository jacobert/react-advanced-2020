import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
      console.log("call useEffect");
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("avvio");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click!
      </button>
    </>
  );
};

export default UseEffectBasics;
