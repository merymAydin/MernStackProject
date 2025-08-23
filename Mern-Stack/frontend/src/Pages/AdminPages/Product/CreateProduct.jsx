import { Form, Input,Checkbox, Button, Select} from 'antd'
import React, { useEffect, useState } from 'react'

const { TextArea } = Input;

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.log("Error fetching categories");
      }
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const colors = ["Pink", "Blue", "Green","Black","White","Gray","Red"];
  return (
    <div>
      <h2 style={{marginBottom: '10px'}}>Create Product</h2>
      <Form form={form} layout="vertical" onFinish={() => {}} initialValues={{colors : ["Black","White","Gray"]}}>
        <Form.Item label="Product Name" name="name" rules={[{ required: true, message: 'Please enter product name' }]}>
          <Input placeholder='Enter product name' />
        </Form.Item>
        <Form.Item label="Product Images" name="images" rules={[{ required: true, message: 'Please enter product images' }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Product Price" name="price" rules={[{ required: true, message: 'Please enter product price' }]}>
          <Input placeholder='Enter product price' />
        </Form.Item>
        <Form.Item label="Product Description" name="description" >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="colors" label="Product Colors">
          <Checkbox.Group options={colors}  />
        </Form.Item>
        <Form.Item name="stock" label=" quantity">
          <Input placeholder='Enter product stock' />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select placeholder="Select a category">
            {
              categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create Product</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateProduct
