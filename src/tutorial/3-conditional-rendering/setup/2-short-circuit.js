import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  /* const firstValue = text || "hello world";
  const secondValue = text && "hello world"; */

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2> */}
      <h1>{text || "John"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <p>there is no error</p>
        </div>
      )}
      {/* {!text && <h1>Hello world</h1>} */}
    </React.Fragment>
  );
};

export default ShortCircuit;
