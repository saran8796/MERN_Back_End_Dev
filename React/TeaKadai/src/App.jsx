import { useState } from "react";
import ProductAvailability from "./component/ProductAvailability";

function App() {
  const [showAvailability, setShowAvailability] = useState(true);
  const handleClick = () => {
    setShowAvailability(true);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-amber-600 text-white p-3 rounded-2xl"
      >
        Product Availability
      </button>
      <div>{showAvailability && <ProductAvailability />}</div>
    </>
  );
}

export default App;
