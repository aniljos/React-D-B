import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';

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
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path='/' element={<Counter initialValue={5} />} />
            <Route path='/products' element={<div>Products</div>} />
            <Route path='/login' element={<div>Login</div>} />
            <Route path='/search' element={<div>Search</div>} />
          </Routes>

        </main>

      </div>
    </Router>
  )
}

export default App
