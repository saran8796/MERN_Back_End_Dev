import { useEffect, useState } from "react";

const ProductsFetch = () => {
  const [myproducts, setMyProducts] = useState([]);
  const [mysearch, setMySearch] = useState("");

  const fetchAPI = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const datas = await res.json();
      setMyProducts(datas.products);
      console.log(datas.products);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handlesearch = (e) => {
    // console.log(e.target.value);
    setMySearch(e.target.value);
  };

  const search = () => {
    if (!mysearch) return myproducts;

    return myproducts.filter((e) =>
      e.title.toLowerCase().includes(mysearch.toLocaleLowerCase())
    );
  };

  const searchedProduts = search();

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="bg-gray-800 p-10 text-white">
        <div>
          <h1 className="text-center my-5 font-bold uppercase text-gray-300 text-3xl">
            Products Page
          </h1>
          <div className="flex justify-center mt-10">
            <input
              type="text"
              name="search"
              onChange={handlesearch}
              className="bg-white py-2 px-4 rounded-full text-black ring-gray-300 ring-2"
              placeholder="Search Products..."
            />
            <select
              name="filter"
              className="text-black bg-white mx-5 rounded-full px-3 py-2 ring-2 ring-gray-300"
            >
              <option value="select">Select</option>
              <option value="electric">Electric</option>
              <option value="beauty">Beauty</option>
            </select>
          </div>
          <div className="flex flex-wrap my-15 gap-8 justify-center">
            {searchedProduts.map((e) => (
              <div
                key={e.id}
                className="bg-gray-300 p-8 text-black rounded-2xl flex-col"
              >
                <img src={e.images} alt="empty" className="w-50" />
                <h1 className="font-bold uppercase my-2">
                  {e.title.length > 20 ? e.title.slice(0, 16) + "..." : e.title}
                </h1>
                <p className="my-2 text-wrap max-w-50">
                  {e.description.length > 60
                    ? e.description.slice(0, 60) + "..."
                    : e.description}
                </p>
                <p className="my-2 font-bold">{"$" + e.price}</p>
                <button className="bg-blue-600 cursor-pointer hover:transition-all duration-300 hover:scale-105 rounded px-4 py-2 text-white">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsFetch;
