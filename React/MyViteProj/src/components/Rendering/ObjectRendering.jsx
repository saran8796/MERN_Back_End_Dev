const ObjectRendering = () => {
  const objtitle = "This is Object Rendering";
  const obj = {
    name: "kohsnar",
    age: 24,
  };

  const arrytitle = "This is Array Rendering";
  const arr = ["apple", "banana", "grapes", "mango"];

  const isLoggedIn = false;

  const arryObject = [
    { name: "kohsnar", age: 24 },
    { name: "john", age: 30 },
    { name: "doe", age: 28 },
  ];

  return (
    <>
      {/* This is Object Rendering */}
      <h1>{objtitle}</h1>
      <ul>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
      </ul>

      {/* This is Array Rendering */}
      <h1>{arrytitle}</h1>
      <ul>
        {arr.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>

      {/* Conditional Rendering */}
      <h1>This is Conditional Rendering</h1>
      {isLoggedIn ? <h2>Welcome</h2> : <h2>Please Login</h2>}

      {/* Array of Object */}
      <h1>This is Array of Object Rendering</h1>
      <ul>
        {arryObject.map((e, i) => (
          <li key={i}>
            Name: {e.name}, Age: {e.age}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ObjectRendering;
