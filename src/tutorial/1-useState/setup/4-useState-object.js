import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Giacomo",
    age: 29,
    message: "Random Message",
  });

  const [name, setName] = useState("Giacomo");
  const [age, setAge] = useState(29);
  const [message, setMessage] = useState("Random Message");

  const changeMessage = () => {
    setMessage("Hello World");
  };
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;

/* 
 const changeMessage = () => {
    setPerson({ ...person, message: "Hello World" });
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  ); */
