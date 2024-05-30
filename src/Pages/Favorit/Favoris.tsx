import { observer } from "mobx-react-lite";
import activityStore from "../../stores/activityStore.ts";
import React from "react";
import { List } from "antd";
import { ProductType } from "../../type.ts";

export const Favoris = observer(() => {
  const { favoris } = activityStore;

  return (
    <div>
      {favoris.map((product: ProductType) => (
        <>
          {console.log("test", product.favoris)}

          <div key={product.id} className="product-item">
            <List
              itemLayout="horizontal"
              dataSource={[favoris]}
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
                    title={<a href="https://ant.design">{product.title}</a>}
                    description={product.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </>
      ))}
    </div>
  );
});
