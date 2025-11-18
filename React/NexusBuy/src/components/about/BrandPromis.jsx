import { Link } from "react-router-dom";

const BrandPromise = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
      <p className="text-lg text-gray-600 mb-8">
        We're committed to providing an exceptional shopping experience with
        quality products, competitive prices, and customer service that goes
        above and beyond.
      </p>
      <Link
        to="/shop"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
      >
        Shop Our Collection
      </Link>
    </div>
  </section>
);

export default BrandPromise;
