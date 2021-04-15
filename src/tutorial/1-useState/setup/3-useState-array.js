import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  //console.log(people);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  //posso usare l'approccio funzionale alla stessa maniera

  /* const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  }; */

  return (
    <>
      {people.map((persona) => {
        const { id, name } = persona;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
