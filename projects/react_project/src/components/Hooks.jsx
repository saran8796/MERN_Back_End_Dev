import Context from "./hooks/Context";
import TextAreaGrowing from "./hooks/TextAreaGrowing";
import UseRef from "./hooks/UseRef";

const Hooks = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-2xl">UseRef</h1>
        <UseRef />

        <h1 className="font-bold text-2xl">TextArea ContentEditable</h1>
        <TextAreaGrowing />

        <h1 className="font-bold text-2xl">Context API</h1>
        <Context />
      </div>
    </>
  );
};

export default Hooks;
