import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import DashBoard from './Pages/AdminPages/DashBoard'
import CategoryList from './Pages/AdminPages/Category/CategoryList'
import UpdateCategory from './Pages/AdminPages/Category/UpdateCategory'
import CreateCategory from './Pages/AdminPages/Category/CreateCategory'


function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/admin/'>
            <Route index element={<DashBoard/>} />
            <Route path='categories' element={<CategoryList />} />
            <Route path='categories/update/:id' element={<UpdateCategory />} />
            <Route path='categories/create' element={<CreateCategory/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
