import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Product } from '../Product/Product.tsx';
import { Panier } from '../Panier/Panier.tsx';

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [contentID,setContentID]=useState()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'Produit',
            },
            {
              key: '2',
              label: 'Panier',
            }
          ]}
          onClick={({ key } :{key:any}) => setContentID(key)}
          />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {contentID === "1" ? <Product /> :<Panier />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;