import React from "react";

function ArrayExample() {
  const simpleArray = ["apple", "banana", "orange", "grape"];
  
  const arrayOfObjects = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
  ];

  return (
    <div>
      <h2>Simple Array:</h2>
      <ul>
        {simpleArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Array of Objects:</h2>
      <ul>
        {arrayOfObjects.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayExample;
