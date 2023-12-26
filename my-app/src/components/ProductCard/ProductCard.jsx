import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {id, thumbnail, title, price} = product
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={thumbnail}
              alt={title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">Fiyat: ${price}</p>
            </div>
            <div className="px-6 py-4">
            <Link to={`/detail/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Detay Gör
          </Link>
            </div>
          </div>
        </div>
      );
    };


export default ProductCard;
