import React from 'react'
import { Button,Form, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem';
import { useNavigate } from 'react-router-dom';


const CreateCategory = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleCreateCategory= async(values)=>{
    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        navigate("/admin/categories");
      } else {
        console.log("Error creating category:");
      }
    } catch (error) {
      console.log("Error creating category:", error);
    }
  }

  return (
      <Form layout='vertical' form={form} initialValues={{layout:"vertical"}} onFinish={handleCreateCategory}>
        <Form.Item label="Category Name" name="name">
        <Input placeholder="Enter category name" />
      </Form.Item>
      <FormItem label="Image path" name="image">
        <Input placeholder="Enter image path" />
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit'>Create Category</Button>
      </FormItem>
      </Form>
  )
}

export default CreateCategory
