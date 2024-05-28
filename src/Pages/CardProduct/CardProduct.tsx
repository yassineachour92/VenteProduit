import React from "react";
import { Card, Space } from "antd";
import "./cardProduct.css";
export const CardProduct = ({ product }) => {
  return (
    <>
      <Space direction="vertical" size={10}>
        <Card
          title={product.title}
          extra={<a href="#">More</a>}
          style={{ width: 300, height:320 }}
        >
          <div>
            <img src={product.images[0]} alt={product.title} className="img" />
            <p>{product.description}</p>
          </div>
        </Card>
      </Space>
    </>
  );
};
