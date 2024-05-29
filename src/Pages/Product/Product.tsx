import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {CardProduct} from '../../Pages/CardProduct/CardProduct.tsx'
import './product.css'
import { product } from "../../type.ts";
import { observer } from "mobx-react-lite";
import activityStore from "../../stores/activityStore.ts";
import { fetchPosts } from "../../Api.ts";



export const Product = observer(() => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });
  useEffect(() => {
    if (data) {
      activityStore.setActivities(data);
    }
    activityStore.setLoadingInitial(isLoading);
  }, [data, isLoading]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log('%csrc\Pages\Product\Product.tsx:30 data', 'color: #007acc;', data);
  return (
    <div className="product">
      {data.products.map((product:product) => {
        console.log(
          "%csrcPagesProductProduct.tsx:25 products",
          "color: #007acc;",
          product.title
        );
        return <div className="card"><CardProduct key={product.id} product={product} /></div>;
      })}
    </div>
  );

});
