import React, { useState } from "react";

import { Card, Space, InputNumber, InputNumberProps, Button } from "antd";

import { ProductType } from "../../type";
import activityStore from "../../stores/activityStore.ts";
import { HeartTwoTone } from "@ant-design/icons";

import "./cardProduct.css";

export const CardProduct = ({ product }: { product: ProductType }) => {

  const [favoris, setFavoris] = useState(product.favoris);

  const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
  };

  const addProduct = (product: ProductType) => {
    return activityStore.addProduct(product);
  };

  const addFavorit = (product: ProductType) => {
    setFavoris(!favoris);
    return activityStore.addFavoris(product);
  };

  return (
    <>
      <Space direction="vertical" size={10}>
        <Card
          title={product.title}
          extra={
            <Space onClick={() => addFavorit(product)}>
              {favoris ? (
                <img
                  className="imgFavorit"
                  src="https://images.emojiterra.com/twitter/v14.0/512px/2764.png"
                  alt="imgCoeur"
                />
              ) : (
                <HeartTwoTone twoToneColor="#eb2f96" />
              )}
            </Space>
          }
          style={{ width: 300, height: 320 }}
        >
          <div>
            <img src={product.images[0]} alt={product.title} className="img" />
            <p>{product.description}</p>
          </div>
        </Card>
        <div className="ajouter">
          <InputNumber
            defaultValue={0}
            max={product.stock}
            onChange={onChange}
          />
          <Button type="primary" onClick={() => addProduct(product)}>
            Ajouter
          </Button>
        </div>
      </Space>
    </>
  );
};
