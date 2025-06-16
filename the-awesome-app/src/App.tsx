import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import Login from './components/Login';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import TodoList from './components/TodoList';

function App() {

  return (

    <Router>
      <div className="container-fluid">

        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">React-Vite</Link>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">Todos</Link>
              </li>
            </ul>
          </div>
        </nav>

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
