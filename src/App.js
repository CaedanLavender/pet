import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Account from './components/Account';

function App() {


   return (
      <div className="App" >
         <BrowserRouter>
            <Header />
            <div className="bodyContainer" >
               <Routes>
                  <Route exact path="/" element={<span>Mock home page</span>} />
                  <Route path="/search" element={<span>Mock home search</span>} />
                  <Route path="/cart" element={ <Cart /> } />
                  <Route path="/product" element={ <Product /> } />
                  <Route path="/account" element={ <Account /> } />
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
