import React from "react";
import { Card, Space,InputNumber, InputNumberProps,Button } from "antd";
import "./cardProduct.css";
import { product } from "../../type";
import activityStore from "../../stores/activityStore.ts";

export const CardProduct = ({ product }:{product:product}) => {

  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

  const addProduct=(product:product)=>{
    return activityStore.addProduct(product)
     
  }
  return (
    <>
      <Space direction="vertical" size={10}>
        <Card
          title={product.title}
          style={{ width: 300, height:320 }}
        >
          <div>
            <img src={product.images[0]} alt={product.title} className="img" />
            <p>{product.description}</p>
          </div>
        </Card>
        <div className="ajouter">
          <InputNumber defaultValue={0} max={product.stock} onChange={onChange}/>
          <Button type="primary" onClick={()=>addProduct(product)}>Ajouter</Button>
        </div>

      </Space>
    </>
  );
};
