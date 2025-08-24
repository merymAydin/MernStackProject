import React, { useContext } from 'react'

import { Card, List } from 'antd';
import { ProductContext } from '../../Contexts/ProductProvider';
import ProductCard from './ProductCard';


const ProductList = () => {
    const {products} = useContext(ProductContext);

    
  return (
    <List
    grid={{
      gutter: 15,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4,
      xxl: 5,
    }}
    dataSource={products}
    renderItem={product => (
      <List.Item>
         <ProductCard title={product.title} product={product} />
      </List.Item>
    )}
  />
  )
}

export default ProductList