import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Tea from "./Tea";
import Coffe from "./Coffe";
import Boost from "./Boost";
import Horlicks from "./Horlicks";

const ProductAvailability = () => {
  const { products } = useContext(MyContext);
  return (
    <>
      <div>
        {products.map((e, i) => (
          <div key={i}>
            {e === "tea" && <Tea />}
            {e === "coffee" && <Coffe />}
            {e === "boost" && <Boost />}
            {e === "horlicks" && <Horlicks />}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductAvailability;
