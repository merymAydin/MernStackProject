import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {  Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const ProductCard = ({product}) => {
  return (
      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt={product.name}
        src={product.images[0]}
        style={{height:"200px"}}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title={product.name}
      description={product.description}
    />
  </Card>
  )
}

export default ProductCard
