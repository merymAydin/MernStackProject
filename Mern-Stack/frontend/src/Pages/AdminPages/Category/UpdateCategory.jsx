import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const navigate = useNavigate();
  const params = useParams();
 
  const categoryId = params.id;
  const [form] = Form.useForm();

  const getByCategory = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/categories/${categoryId}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data) {
          form.setFieldsValue({
            name: data.name,
            image: data.image,
            _id: categoryId,
          });
        } else {
          console.log("Category not found");
        }
      } else {
        console.log("Failed to fetch category:", response.statusText);
      }
    } catch (error) {
      console.log("Error fetching category:", error);
    }
  };

   useEffect(() => {
    getByCategory();
  }, []);
  const handleUpdateCategory = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/categories",
        {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        navigate("/admin/categories");
      } else {
        console.log("Error updating category:", response.statusText);
      }
    } catch (error) {
      console.log("Error updating category:", error);
      
    }
  };
  return (
    <div>
      <Form
        layout="vertical"
        form={form}
        initialValues={{ layout: "vertical" }}
        onFinish={handleUpdateCategory}
      >
        <Form.Item label="Category ID" name="_id" style={{ display: "none" }}>
          <Input />
        </Form.Item>
        <Form.Item label="Category Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Image path" name="image">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button color="cyan" variant="solid" htmlType="submit">
            Update Category
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateCategory;
