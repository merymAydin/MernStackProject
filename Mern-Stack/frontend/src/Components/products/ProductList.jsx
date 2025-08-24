import React, { useContext } from 'react'

import { Card, List } from 'antd';
import { ProductContext } from '../../Contexts/ProductProvider';


const ProductList = () => {
    const {products} = useContext(ProductContext);
  return (
    <List
    grid={{
      gutter: 15,
      xs: 1,
      sm: 1,
      md: 3,
      lg: 3,
      xl: 4,
      xxl: 5,
    }}
    dataSource={products}
    renderItem={product => (
      <List.Item>
         <Card title={product.title}>{product.name}</Card> 
      </List.Item>
    )}
  />
  )
}

export default ProductList