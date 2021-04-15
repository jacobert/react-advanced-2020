import React, { useState } from "react";

const UseStateBasics = () => {
  /* console.log(useState("hello world"));
  const value = useState(1)[0];
  const handler = useState(1)[1];
  console.log(value, handler); */

  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello World");
    } else {
      setText("Random Title");
    }
    //text === "Hello World" ? setText("Random Title") : setText("Hello World");
    //setText("Hello World");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick} type="button"></button>
    </React.Fragment>
  );
};

export default UseStateBasics;
