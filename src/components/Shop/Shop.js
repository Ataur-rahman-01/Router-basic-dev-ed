import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    userData();
  }, []);
  const [item, setItem] = useState([]);
  const userData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    setItem(items);
    console.log(items);
  };

  return (
    <div>
      {item.map((it) => (
        <h1>
          <Link to={`/shop/${it.id}`}> {it.name}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;
