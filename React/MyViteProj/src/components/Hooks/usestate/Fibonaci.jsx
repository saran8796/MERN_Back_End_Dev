import { useState } from "react";

const Fibonaci = () => {
  const [num, setNum] = useState(0);
  const [temp, setTemp] = useState(1);
  const [arr, setArry] = useState([0]);

  const fibonaci = () => {
    setNum(num + temp);
    setTemp(num);
    arr.push(num + temp);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
        <div className="text-center max-w-4xl w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Fibonacci Sequence Generator
            </h1>
            <p className="text-gray-600">
              Watch the magical Fibonacci sequence unfold
            </p>
          </div>

          {/* Current Number Display */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Current Number
            </h2>
            <div className="text-6xl font-bold text-gray-800 bg-white/50 backdrop-blur-sm rounded-2xl py-4 px-8 shadow-lg inline-block">
              {num}
            </div>
          </div>

          {/* Fibonacci Sequence Display */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Fibonacci Sequence
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex flex-wrap justify-center gap-2 min-h-[60px] items-center">
                {arr.length === 0 ? (
                  <span className="text-gray-400 italic">
                    Sequence will appear here...
                  </span>
                ) : (
                  <>
                    <span className="text-gray-400">[</span>
                    {arr.map((e, i) => (
                      <span key={i} className="flex items-center">
                        <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 font-mono font-bold px-3 py-1 rounded-lg shadow-sm">
                          {e}
                        </span>
                        {i < arr.length - 1 && (
                          <span className="mx-1 text-gray-400">,</span>
                        )}
                      </span>
                    ))}
                    <span className="text-gray-400">]</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
            onClick={fibonaci}
          >
            Generate Next Number
          </button>
        </div>
      </div>
    </>
  );
};

export default Fibonaci;

// const fibonaci = () => {
//   const [num, setNum] = useState(0);
//   const [array, setArray] = useState([]);
//   let n = 0,
//     nn = 1;
//   const arr = [0, 1];

//   const fun = () => {
//     for (let i = 2; i < num; i++) {
//       arr.push(n + nn);
//       let temp = n + nn;
//       n = nn;
//       nn = temp;
//     }

//     setArray(arr);
//   };

//   return (
//     <>
//       <div>
//         <h1>Fibonaci Series</h1>

//         <p>{array.join(" ")}</p>

//         <input
//           type="text"
//           placeholder="Enter Value.."
//           className="block p-2 bg-blue-100 rounded-2xl my-4"
//           onChange={(e) => {
//             setNum(e.target.value);
//           }}
//         />

//         <button className="bg-amber-200 p-2 rounded-2xl" onClick={fun}>
//           Show the fibonaci
//         </button>
//       </div>
//     </>
//   );
// };

// export default fibonaci;
