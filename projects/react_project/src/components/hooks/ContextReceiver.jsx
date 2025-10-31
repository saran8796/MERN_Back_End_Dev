import { useContext } from "react";
import { ContextData } from "./ContextData";

import { useEffect, useState } from "react";

const ContextReceiver = () => {
  const { data } = useContext(ContextData);

  // const [data, setData] = useState("");

  // useEffect(() => {
  //   const localdata = localStorage.getItem("context");
  //   setData(localdata);
  // }, []);

  return (
    <>
      <div>
        <h1 className="font-bold flex flex-col mt-5 justify-center items-center">
          The Received Data
        </h1>
        {data != "box" && data != "circle" && <div>{data}</div>}

        {data === "box" && (
          <div className="w-50 h-50 mt-5 bg-gray-300 flex justify-center items-center">
            <h1>{data}</h1>
          </div>
        )}

        {data === "circle" && (
          <div className="w-50 h-50 mt-5 rounded-full bg-blue-300 flex justify-center items-center">
            <h1>{data}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default ContextReceiver;
