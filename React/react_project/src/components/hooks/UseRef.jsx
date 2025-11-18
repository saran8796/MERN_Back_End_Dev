import { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const show = useRef(null);

  const handleChange = () => {
    const data = inputRef.current.value;
    show.current.innerText = inputRef.current.value;

    // console.log(data);
  };

  const handleSubmit = () => {
    // show.current.innerText = inputRef.current.value;
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          placeholder="Enter the text"
          className="p-2 px-3 mx-5 text-white bg-blue-800 border-blue-500 border-2 rounded"
        />
        <p ref={show}></p>
        <button
          onClick={handleSubmit}
          className="px-4 mx-5 p-2 bg-blue-400 rounded"
        >
          Click
        </button>
      </div>
    </>
  );
};
export default UseRef;
