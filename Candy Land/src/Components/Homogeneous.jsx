import React from "react";

export default function Homogeneous({ prop ,heading}) {
  return (
    <div>
      <h1>{heading}</h1>
      <div>
        {prop.map((item) => {
          return (
            <>
              <div>{item.name}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}
