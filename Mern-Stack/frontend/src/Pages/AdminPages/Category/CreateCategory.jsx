import React, { useContext } from 'react'
import { Button,Form, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem';
import { CategoryContext } from '../../../Contexts/CategoryProvider';

const CreateCategory = () => {

  const {createCategory} = useContext(CategoryContext);
  const [form] = Form.useForm();

  return (
      <Form layout='vertical' form={form} initialValues={{layout:"vertical"}} onFinish={createCategory}>
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
