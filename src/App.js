import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Order from "./components/Orders/Order";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route
          path="order"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
