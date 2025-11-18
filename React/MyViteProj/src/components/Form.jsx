import { useState } from "react";

const Form = () => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    const textdata = e.target.value;

    setData(textdata);
  };
  const finish = (e) => {
    e.preventDefault();
    setSub(true);
    console.log(e);
  };
  return (
    <>
      <form
        onSubmit={finish}
        className={`flex justify-center items-center h-svh ${
          data === "light off" && "bg-black"
        }`}
      >
        <h1 className="text-blue-400 mr-3">Enter any text:</h1>
        <input
          type="text"
          onChange={handleChange}
          className=" border-1 rounded-2xl p-1 pl-3 bg-white"
        />
        <p>
          {data === "apple" && (
            <img
              src="https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="
              alt="Apple"
              width={200}
            />
          )}
          {data === "blue" && (
            <div className="bg-blue-400 border-2 w-30 h-30 ml-5"></div>
          )}
          {data === "light on" && (
            <img
              className="ml-5 rounded"
              src="https://thumbs.dreamstime.com/b/light-bulb-19509478.jpg"
              alt="light"
              width={200}
            />
          )}
        </p>
      </form>
    </>
  );
};

export default Form;
