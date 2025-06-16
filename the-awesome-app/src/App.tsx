import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import Login from './components/Login';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import TodoList from './components/TodoList';
import AppBar from './components/AppBar';

function App() {

  return (

    <Router>
      <div className="container-fluid">

       <AppBar/>

        <main>
          <Routes>
            <Route path='/' element={<Counter initialValue={5} />} />
            <Route path='/products' element={<ListProducts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<div>Search</div>} />
            <Route path='/products/:id' element={<EditProduct />} />
            <Route path="/todo" element={<TodoList/>} />
          </Routes>

        </main>

      </div>
    </Router>
  )
}

export default App
