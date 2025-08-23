import { Button, Space, Table } from 'antd'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../../Contexts/CategoryProvider';

const CategoryList = () => {
  const navigate = useNavigate();
  const {  deleteCategory,categories } = useContext(CategoryContext);
  
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width : "25%",
      render : (img,record) => (
        <img src={`${record.image}`} alt="Category Image" style={{ width: "50%" }} />
      )
    },{
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
      width: "50%",
      render: (text) => <strong>{text}</strong>
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button color="primary" variant='solid' onClick={() => {navigate(`/admin/categories/update/${record._id}`)}} >Edit</Button>
          <Button color="danger" variant='solid' onClick={() => deleteCategory(record._id)} >Delete</Button>
        </Space>
      )
    }
  ]

  return (
    <div>
      <h2>Categories</h2>
      <Table 
      columns={columns} 
      dataSource={categories} 
      rowKey={(record) => record._id}
      pagination={{pageSize:10}} 
      scroll={{ y: 600 }}/>
    </div>
  )
}

export default CategoryList
