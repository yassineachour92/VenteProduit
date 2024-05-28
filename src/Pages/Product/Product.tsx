import React from "react";
import { useQuery } from "@tanstack/react-query";
import {CardProduct} from '../../Pages/CardProduct/CardProduct.tsx'
import './product.css'

const fetchPosts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const Product = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  console.log("%csrcPagesProductProduct.tsx:21 data", "color: #007acc;", data);
  return (
    <div className="product">
      {data.products.map((product:any) => {
        console.log(
          "%csrcPagesProductProduct.tsx:25 products",
          "color: #007acc;",
          product.title
        );
        return <div className="card"><CardProduct key={product.id} product={product} /></div>;
      })}
    </div>
  );
};
