import { useRef } from "react";

const TextAreaGrowing = () => {
  const inputRef = useRef(null);
  const show = useRef(null);

  const handleSubmit = () => {
    const data = inputRef.current.innerText;
    show.current.innerText = data;

    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div
          ref={inputRef}
          contentEditable
          className="p-2 px-3 w-80 max-h-30 text-wrap overflow-hidden border-2 border-amber-600 rounded-2xl"
        >
          Hello
        </div>
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

export default TextAreaGrowing;
