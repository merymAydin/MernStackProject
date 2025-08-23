import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();


  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }else{
        console.error("Failed to fetch categories");
      }
      
    } catch (error) {
      console.error("Error fetching categories:", error);
      
    }
  }
  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: categoryId })
      });
      if (response.ok) {
        getCategories();
      } else {
        console.error("Failed to delete category");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  const createCategory= async(values)=>{
    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        navigate("/admin/categories");
      } else {
        console.log("Error creating category:");
      }
    } catch (error) {
      console.log("Error creating category:", error);
    }
  }

   const updateCategory = async (values) => {
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


   useEffect(() => {
    getCategories();
  }, []);
    const values = { 
        categories, 
        setCategories,
        getCategories,
        deleteCategory,
        createCategory,
        updateCategory
    };
    return (
      <CategoryContext.Provider value={values}>
        {children}
      </CategoryContext.Provider>
    )
}

export { CategoryProvider, CategoryContext }
