import { Children, useState } from "react";
import { MyContext } from "../context/MyContext";

const TeaKadai = ({ childern }) => {
  const [products, setProducts] = useState([
    "tea",
    "coffee",
    "boost",
    "horlicks",
  ]);

  const [productDetails, setProductDetails] = useState([
    {
      product1: "Milk",
      product2: "water",
      product3: "tea powder",
      product4: "sugar",
      product5: "tea glass",
    },
    {
      product1: "Milk",
      product2: "water",
      product3: "Coffee powder",
      product4: "sugar",
      product5: "coffee cup",
    },
    {
      product1: "Milk",
      product2: "water",
      product3: "Boost",
      product4: "sugar",
      product5: "cup",
    },
    {
      product1: "Milk",
      product2: "water",
      product3: "Horlicks",
      product4: "sugar",
      product5: "cup",
    },
  ]);
  return (
    <>
      <MyContext.Provider
        value={(products, setProducts, productDetails, setProductDetails)}
      >
        {childern}
      </MyContext.Provider>
    </>
  );
};

export default TeaKadai;
