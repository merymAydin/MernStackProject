import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;
const { TextArea } = Input;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;
  const [form] = Form.useForm();

  const getProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productId}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data) {
          form.setFieldsValue({
            name: data.name,
            price: data.price,
            description: data.description,
            colors: data.colors,
            category: data.category,
            images: data.images,
            _id: productId,
          });
        } else {
          console.log("Product not found");
        }
      } else {
        console.log("Failed to fetch product:", response.statusText);
      }
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleUpdateProduct = async (values) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        navigate("/admin/products");
      } else {
        console.log("Error updating product:", response.statusText);
      }
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <Form
        layout="vertical"
        form={form}
        initialValues={{ layout: "vertical" }}
        onFinish={handleUpdateProduct}
      >
        <Form.Item label="Product ID" name="_id" style={{ display: "none" }}>
          <Input />
        </Form.Item>
        <Form.Item label="Product Name" name="name" rules={[{ required: true, message: 'Please input product name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input price!' }]}>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Colors (comma separated)" name="colors">
          <Input placeholder="red,blue,green" />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Input />
        </Form.Item>
        <Form.Item label="Images (comma separated paths)" name="images">
          <Input placeholder="/path/to/image1.jpg,/path/to/image2.jpg" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProduct;
