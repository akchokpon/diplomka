import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery'
import Contacts from './pages/Contacts/Contacts';
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="delivery" element={<Delivery />} />
          </Routes>
          <Sidebar />

          <Routes>
            <Route path = "/" element = {<Home />} /> 
            <Route path = "/product/:id" element = {<ProductSingle />} />
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            <Route path = "/cart" element = {<Cart />} />
            <Route path = "/search/:searchTerm" element = {<Search />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
