import { Button, Form, Input } from "antd";
import React, {useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../../Contexts/CategoryProvider";

const UpdateCategory = () => {
  const {updateCategory,getByCategory} = useContext(CategoryContext);
  const params = useParams();
  const categoryId = params.id;
  const [form] = Form.useForm();


   useEffect(() => {
    getByCategory(categoryId);
    }, [categoryId]);

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
