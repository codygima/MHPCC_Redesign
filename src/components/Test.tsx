import React, { useState } from "react";

export default function Test() {
  const [plus, setPlus] = useState(0);
  return (
    <>
      <button onClick={() => setPlus(plus + 1)}>Add</button>
      <p>{plus}</p>
    </>
  );
}
