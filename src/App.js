import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Account from './components/Account';
import Dog from './components/Dog';

function App() {
   const [cart, setCart] = useState([{id:"61ac20a852d5bf673f01b52b", quantity: 3}])

   // adds a new item to the array
   const handleCartAdd = (item) => {
      // expects an object
      setCart([...cart, item])
   }

   const handleCartUpdate = (item) => {
      const index = cart.findIndex(each => each.id === item.id);
         if (index >= 0) {
            let cartCopy = [...cart]
            cartCopy[index].quantity = item.quantity
            console.log(cartCopy);
            setCart(cartCopy)
         }
         else setCart([...cart, item])
   }

   return (
      <div className="App" >
         <BrowserRouter>
            <Header />
            <div className="bodyContainer">
               <div className="bodyInner" >
                  <Routes>
                     <Route exact path="/" element={<span>Mock home page</span>} />
                     <Route path="/search" element={<span>Mock home search</span>} />
                     <Route path="/dog" element={<Dog />}/>
                     <Route path="/cart" element={ <Cart /> } />
                     <Route path="/product/:id" element={ <Product cart={cart} addCart={handleCartUpdate} updateCart={handleCartUpdate}/> } />
                     <Route path="/account" element={ <Account /> } />
                  </Routes>
               </div>
            </div>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
