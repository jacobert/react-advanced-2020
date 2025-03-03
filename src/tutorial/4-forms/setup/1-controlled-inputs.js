import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),

        firstName,
        email /*in ES6 se la chiave e il valore corrispondono posso accorciare in questa maniera*/,
      };

      setData((data) => {
        return [...data, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("campi vuoti");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add person</button>
        </form>

        {data.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

/* posso metterlo nel bottone onClick={handleSubmit} */

/* import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      let newParameter = `${firstName} ${email}`;
      console.log("qui", newParameter);
      let newData = [...data];
      newData.push(newParameter);
      setData(newData);
      setFirstName("");
      setEmail("");
    } else {
      console.log("campi vuoti");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add person</button>
        </form>

        <ul className="list">
          {data && (
            <>
              {data.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
            </>
          )}
        </ul>
      </article>
    </>
  );
};

export default ControlledInputs;
 */
