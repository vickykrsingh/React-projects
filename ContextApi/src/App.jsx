import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/Store";
import { Toaster } from "react-hot-toast";
import SingleProductPage from "./components/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<SingleProductPage/>} />
        </Routes>
        <Toaster />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
