import { useState } from "react";

const Props = ({ obj }) => {
  const [name, setName] = useState("");

  const handleclick = () => {
    setName(obj.name);
  };

  return (
    <>
      <h1>{name}</h1>

      <button onClick={handleclick}>Click me to see the result</button>
    </>
  );
};

export default Props;
