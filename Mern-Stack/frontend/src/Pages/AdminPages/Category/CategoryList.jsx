import { Button, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCategories();
  }, [categoryData]);

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      if (response.ok) {
        const data = await response.json();
        setCategoryData(data);
      }else{
        console.error("Failed to fetch categories");
      }
      
    } catch (error) {
      console.error("Error fetching categories:", error);
      
    }
  }
  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: categoryId })
      });
      if (response.ok) {
        navigate('/admin/categories');
      } else {
        console.error("Failed to delete category");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }
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
      <Table columns={columns} dataSource={categoryData} rowKey={(record) => record._id} />
    </div>
  )
}

export default CategoryList
