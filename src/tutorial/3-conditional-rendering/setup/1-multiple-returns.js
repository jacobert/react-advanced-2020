import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");

  useEffect(() => {
    //setIsLoading(true);
    fetch(url)
      .then((response) => {
        if ((response.status >= 200) & (response.status <= 299)) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
        //console.log(user);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h2>Error...</h2>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  );
};

export default MultipleReturns;
