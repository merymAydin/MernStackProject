import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/products`);
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            }else{
                console.error('Error fetching products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                getProducts();
            } else {
                console.error('Error deleting product');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getByIdProduct = async (id,frm) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${id}`);
            if (response.ok) {
                const data = await response.json();
                if(data){
                    frm.setFieldsValue({
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        colors: data.colors,
                        category: data.category,
                        images: data.images,
                        _id: id
                    })
                }else{
                    console.error('Product not found');
                }
            } else {
                console.error('Error fetching product by ID');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const createProduct = async (values) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                navigate('/admin/products');
            } else {
                console.error('Error creating product');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateProduct = async (values) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${values._id}`, {
                method: "PUT",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                navigate('/admin/products');
            } else {
                console.error('Error updating product');
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [navigate]);

    const values = {
        products,
        getProducts,
        deleteProduct,
        getByIdProduct,
        createProduct,
        updateProduct
    }
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, ProductContext }