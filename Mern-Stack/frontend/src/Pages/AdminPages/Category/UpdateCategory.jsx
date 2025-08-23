import { Button, Form, Input } from "antd";
import React, {useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../../Contexts/CategoryProvider";

const UpdateCategory = () => {

  const {updateCategory} = useContext(CategoryContext);
  const params = useParams();
  const categoryId = params.id;
  const [form] = Form.useForm();

  const fillForm = (data) => {
    form.setFieldsValue({
            name: data.name,
            image: data.image,
            _id: data._id
    });
  }

  const getByCategory = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/categories/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data) {
          return data;
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
    getByCategory(categoryId);
  }, []);
  
  return (
    <div>
      <Form
        layout="vertical"
        form={form}
        initialValues={{ layout: "vertical" }}
        onFinish={updateCategory}
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
