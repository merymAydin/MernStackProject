import { Form, Input,Checkbox, Button} from 'antd'
import React from 'react'

const { TextArea } = Input;

const CreateProduct = () => {
    const [form] = Form.useForm();
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
        <Form.Item>
          <Button type="primary" htmlType="submit">Create Product</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateProduct
