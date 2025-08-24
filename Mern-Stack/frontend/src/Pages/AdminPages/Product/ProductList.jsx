import { Button, Space, Table } from 'antd'
import React, { useContext } from 'react'
import { ProductContext } from '../../../Contexts/ProductProvider';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const { products, deleteProduct } = useContext(ProductContext);
const navigate = useNavigate();


 const columns = [
        {
            title : "Product Image",
            dataIndex : "images",
            key : "images",
            render : (img,record) => (<img src={`${record.images[0]}`} alt='Product image' style={{width:"50%"}} />)
        },
        {
            title : "Product Name",
            dataIndex : "name",
            key:"name"
        },
        {
            title : "Price",
            dataIndex : "price",
            key : "price"
        },
        {
            title : "Product Description",
            dataIndex : "description",
            key : "description"
        },
        {
            title : "Product Colors",
            dataIndex : "colors",
            key : "colors",
            render : (colors) => (
                <div style={{display:"flex", flexWrap:"wrap", width : "100px"}}>
                    {
                        colors.map((item,index) => (
                            <div key={index} 
                            style={{
                                width:"20px",
                                height : "20px",
                                borderRadius : "50%",
                                backgroundColor : item,
                                marginRight : "5px",
                                border : "1px solid silver",
                                marginBottom : "5px"
                            }}></div>
                        ))
                    }
                </div>
            )
        },
        {
            title : "Stock Quantity",
            dataIndex : "stock",
            key : "stock"
        },
        {
            title : "Actions",
            key : "action",
            render : (_,record) => (
                <Space size="middle">
                    <Button color='cyan' variant="solid" onClick={() => navigate(`/admin/products/update/${record._id}`)}>Update</Button>
                    <Button color='danger' variant="solid" onClick={() => deleteProduct(record._id)}>Delete</Button>
                </Space>
            )
        }

    ]
  return (
    <div>
        <h2>Products</h2>
        <Table 
        columns={columns} 
        dataSource={products} 
        rowKey={(record) => record._id} 
        pagination={{ pageSize: 10 }}
        scroll={{ y: 600 }}/>
    </div>
  )
}


export default ProductList
