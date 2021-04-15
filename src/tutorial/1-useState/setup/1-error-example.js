import React from "react";

const ErrorExample = () => {
  useS;
  let title = "Random Title";
  const handleClick = () => {
    //We are not rerendering
    title = "Hello People";
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
