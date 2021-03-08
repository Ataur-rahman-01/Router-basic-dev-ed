import React, { useEffect, useState } from "react";

const Detail = ({ match }) => {
  useEffect(() => {
    userData();
  }, []);
  const [item, setItem] = useState([]);

  const userData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.name}`
    );
    const items = await data.json();
    setItem(items);
    console.log(items);
  };
  return (
    <div>
      <h1>Your name:{item.name}</h1>
      <h2>Email:{item.email}</h2>
      <h3>Number:{item.phone}</h3>
      <h2>Website: {item.website}</h2>
    </div>
  );
};

export default Detail;
