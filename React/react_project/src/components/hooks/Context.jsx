import { useEffect, useRef, useState } from "react";
import { ContextData } from "./ContextData";
import ContextReceiver from "./ContextReceiver";

const Context = () => {
  const inputVal = useRef("");
  const [data, setData] = useState("");

  const handleSubmit = () => {
    setData(inputVal.current.value);
    // const localdata = inputVal.current.value;
    // localStorage.setItem("context", localdata);
    // console.log(localdata);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>This is the primary state to transfer data to another</h1>
        <form
          action={handleSubmit}
          className="mt-5 flex justify-center items-center"
        >
          <div>
            <input
              type="text"
              ref={inputVal}
              className="p-1 px-2 rounded border-2 border-amber-950 bg-blue-200"
            />
            <button className="p-1 px-2 ml-5 rounded bg-blue-700 text-white">
              Send Data
            </button>
          </div>
        </form>

        <ContextData.Provider value={{ data }}>
          <ContextReceiver />
        </ContextData.Provider>
      </div>
    </>
  );
};

export default Context;
