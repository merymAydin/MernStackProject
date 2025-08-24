import { Button, Form, Input, Select,Checkbox } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../../Contexts/CategoryProvider";
import { ProductContext } from "../../../Contexts/ProductProvider";


const { TextArea } = Input;

const UpdateProduct = () => {
  const {categories} = useContext(CategoryContext)
  const {updateProduct, getByIdProduct} = useContext(ProductContext);
  const params = useParams();
  const productId = params.id;
  const [form] = Form.useForm();

    useEffect(() => {
    getByIdProduct(productId,form);
  },[productId])
  const colors = ["Black","White","Grey","Red","Green","Brown","Blue","Orange","Yellow"];

  

  return (
    <div>
        <h2 style={{marginBottom : "10px"}}>Update Product</h2>
        <Form form={form} layout='vertical' onFinish={updateProduct} initialValues={{colors:["Black","White","Red"]}} >
            <Form.Item label="Product ID" name="_id" style={{display:"none"}}>
              <Input />
            </Form.Item>
            <Form.Item label="Product Name" name="name" rules={[{required : true, message : "Please enter product name..."}]}>
                <Input placeholder='Enter product name...' />
            </Form.Item>
            <Form.Item label="Product Images" name="images"  rules={[{required : true, message : "Please enter product images..."}]}>
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Product Price" name="price"  rules={[{required : true, message : "Please enter product price..."}]}>
                <Input placeholder='Enter product price...' />
            </Form.Item>
            <Form.Item label="Product Description" name="description" >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="colors" label="Product Colors">
                <Checkbox.Group options={colors} />
            </Form.Item>
            <Form.Item name="stock" label="Stock Quantity">
                <Input placeholder='Enter stock quantity...' />
            </Form.Item>
            <Form.Item label="Category" name="category">
                <Select placeholder="Select category...">
                {
                    categories.map(category => (
                        <Select.Option key={category._id} value={category._id}>
                        {category.name}
                        </Select.Option>
                    ))
                }
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Update Product</Button>
            </Form.Item>
        </Form>
    </div>
  );
};

export default UpdateProduct;
