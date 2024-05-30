import React from "react";
import { observer } from "mobx-react-lite";
import activityStore from "../../stores/activityStore.ts";
import { ProductType } from "../../type";
import {  List } from "antd";
import "./panier.css";
export const Panier = observer(() => {

  const { panier } = activityStore;

  return (
    <div className="panier">
      {panier.map((product: ProductType) => (
        <div key={product.id} className="product-item">

          <List
            itemLayout="horizontal"
            dataSource={panier}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="imgPanier"
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </div>
      ))}

    </div>
  );
});
