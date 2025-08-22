import { Button, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [dataSource, setDataSource] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/products`);
            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            }else{
                console.error('Error fetching products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key : "image",
            render : (img,record) => (<img src={`/${record.images[0]}`} alt="product image" style={{ width: '50px'}} />)
        },
        {
            title: 'Product name',
            dataIndex: 'name',
            key: 'name',
        },{
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },{
            title: 'Product Description',
            dataIndex: 'description',
            key: 'description',
        },{
            title: 'Product colors',
            dataIndex: 'colors',
            key: 'colors',
            render : (colors) => (
                <div style={{display:"flex", flexWrap:"wrap", width:"50px"}} >
                    {
                        colors.map((item,index) => (
                            <div key={index} style={{
                                width:"20px",
                                height:"20px", 
                                borderRadius:"50%",
                                backgroundColor:item,
                                marginRight: "5px",
                                border : "1px solid silver",
                                marginBottom: "5px",
                            }}></div>
                        ))
                    }
                </div>
            )
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock'
        },{
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button color='cyan' variant='solid' onClick={() => {record}}>Edit</Button>
                    <Button color='red' variant='solid' onClick={() => {}}>Delete</Button>
                </Space>
            )
        }
    ]
  return (
    <div>
      <h2>Products</h2>
      <Table 
      columns={columns} 
      dataSource={dataSource} 
      rowKey={(record) => record._id}
      pagination={{pageSize:10}} 
      scroll={{ y: 600 }}/>
    </div>
  )
}

export default ProductList
