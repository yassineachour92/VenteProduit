import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {CardProduct} from '../../Pages/CardProduct/CardProduct.tsx'
import { ProductType } from "../../type.ts";
import { observer } from "mobx-react-lite";
import activityStore from "../../stores/activityStore.ts";
import { fetchPosts } from "../../Api.ts";

import './product.css'


export const Product = observer(() => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });

{console.log('%csrc\Pages\Product\Product.tsx:17 data', 'color: #007acc;', data)}

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
  return (
    <div className="product">
      {data.products.map((product:ProductType) => {
     
        return <div className="card"><CardProduct key={product.id} product={product} /></div>;
      })}
    </div>
  );

});
