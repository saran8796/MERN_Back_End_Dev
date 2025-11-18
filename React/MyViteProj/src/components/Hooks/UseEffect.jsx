import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState("");

  const fetchData = async () => {
    
    try{
      const data = await fetch("");

    }catch(e){
      
    }


  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <h1>This is counter</h1>
        <h2>{count}</h2>
      </div>
    </>
  );
};

export default UseEffect;
