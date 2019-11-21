import React from "react";

import OneItem from "./OneItem";

// import { } from "./style";

const Add = () => {
  const testData = [
    {
      name: "Bread",
      quantity: 1,
      img: "https://i.imgur.com/u0cQeoL.png"
    },
    { name: "Eggs", quantity: 6, img: "https://i.imgur.com/Lb8eJdU.png" },
    { name: "Fish", quantity: 1, img: "https://i.imgur.com/dxNr442.png" }
  ];

  return (
    <div>
      {testData.map(item => (
        <OneItem name={item.name} quantity={item.quantity} img={item.img} />
      ))}
    </div>
  );
};

export default Add;
