import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate();

  //ADD
  const handleAddProduct = () => {
    const title = prompt("Ürün Başlığı:");
    const price = prompt("Ürün Fiyatı:");

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Ürün Başarıyla Eklendi:", data);
      });
  };

  //DELETE
  const handleDeleteProduct = () => {
    const productId = prompt("'Silmek istediğiniz ürünün ID'sini girin:'");

    fetch(`https://dummyjson.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Ürün Başarıyla Silindi:", data);
      });
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/" className="text-2xl font-bold">
          TOBETO
        </Link>
      </div>
      <div className="flex items-center justify-end w-full md:w-auto"></div>
      <div className="flex items-center mt-4 md:mt-0">
        <button
          onClick={handleAddProduct}
          className="text-green-100 cursor-pointer mr-4 md:mr-2"
        >
          Ürün Ekle
        </button>

        <button
          onClick={handleDeleteProduct}
          className="text-red-400 cursor-pointer"
        >
          Ürün Sil
        </button>
      </div>
    </header>
  );
}
