import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useSelector } from "react-redux";
import { NODE_API_ENDPOINT } from "../utils/utils";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  useEffect(() => {
    axios
      .get(`${NODE_API_ENDPOINT}/product`)
      .then((res) => {
        setProducts(res.data.Prod);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Shimmer Placeholder Component
  const ShimmerCard = () => (
    <div className="animate-pulse bg-white p-4 rounded-lg shadow-lg">
      <div className="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 mx-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {loading
          ? // Render shimmer placeholders while loading
            Array.from({ length: 8 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : // Render product cards when data is loaded
            products.map((prod) => (
              <ProductCard
                key={prod._id}
                id={prod._id}
                name={prod.name}
                img={prod.img}
                price={prod.price}
                desc={prod.desc}
              />
            ))}
      </div>
    </div>
  );
}

export default ProductListPage;
