import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <div className="bodyContainer">
               <Routes>
                  <Route exact path="/" element={<span>Mock home page</span>} />
                  <Route exact path="/search" element={<span>Mock home search</span>} />
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
