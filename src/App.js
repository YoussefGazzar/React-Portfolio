import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './views/CounterContainer';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import Product from './views/Product';
import Nav from './views/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;