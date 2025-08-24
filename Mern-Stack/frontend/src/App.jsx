import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import DashBoard from './Pages/AdminPages/DashBoard'
import CategoryList from './Pages/AdminPages/Category/CategoryList'
import UpdateCategory from './Pages/AdminPages/Category/UpdateCategory'
import CreateCategory from './Pages/AdminPages/Category/CreateCategory'
import ProductList from './Pages/AdminPages/Product/ProductList'
import CreateProduct from './Pages/AdminPages/Product/CreateProduct'
import UpdateProduct from './Pages/AdminPages/Product/UpdateProduct'
import ProductsPage from './Pages/ProductsPage'


function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/category/:id" element={<ProductsPage />} />
          <Route path='/admin/'>
            <Route index element={<DashBoard/>} />
            <Route path='categories' element={<CategoryList />} />
            <Route path='categories/update/:id' element={<UpdateCategory />} />
            <Route path='categories/create' element={<CreateCategory/>} />
            <Route path='products' element={<ProductList />} />
            <Route path='products/create' element={<CreateProduct />} />
            <Route path='products/update/:id' element={<UpdateProduct />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
