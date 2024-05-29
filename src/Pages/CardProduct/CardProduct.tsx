import React from "react";
import { Card, Space,InputNumber, InputNumberProps,Button } from "antd";
import "./cardProduct.css";
import { product } from "../../type";
export const CardProduct = ({ product }:{product:product}) => {

  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

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

          <InputNumber  defaultValue={product.stock} onChange={onChange}/>
          <Button type="primary">Ajouter</Button>

        </div>

      </Space>
    </>
  );
};
