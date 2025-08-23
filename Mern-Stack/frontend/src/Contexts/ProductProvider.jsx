import React, { createContext, useEffect, useState } from 'react'

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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

    useEffect(() => {
        getProducts();
    }, []);

    const values = {
        products,
        getProducts,
        deleteProduct,
        getByIdProduct
    }
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, ProductContext }