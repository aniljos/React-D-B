import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import Login from './components/Login';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';

import AppBar from './components/AppBar';

//static import
//import TodoList from './components/TodoList';
// dynamic import => create a chunk(bundle)
const TodoList = lazy(() => import('./components/TodoList'));

function App() {

  return (

    // <Router basename='/awesome/'>
    <Router>
      <div className="container-fluid">

       <AppBar/>

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Counter initialValue={5} />} />
              <Route path='/products' element={<ListProducts />} />
              <Route path='/login' element={<Login />} />
              <Route path='/search' element={<div>Search</div>} />
              <Route path='/products/:id' element={<EditProduct />} />
              <Route path="/todo" element={<TodoList/>} />
            </Routes>
          </Suspense>

        </main>

      </div>
    </Router>
  )
}

export default App
