import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
export default function Homepage({ data }) {
  const [products, setProducts] = useState([]);
  useEffect(() => setProducts(data.products || []), [data.products]);

  return (
    <div className="container mx-auto flex flex-wrap">
      {products.map((product,i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}
