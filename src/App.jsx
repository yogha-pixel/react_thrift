import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import ItemList from "./pages/items/ItemList";
import ItemCreate from "./pages/items/ItemCreate";
import Cart from "./pages/cart/Cart";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/items" element={
          <ProtectedRoute><ItemList /></ProtectedRoute>
        } />

        <Route path="/items/create" element={
          <ProtectedRoute><ItemCreate /></ProtectedRoute>
        } />

        <Route path="/cart" element={
          <ProtectedRoute><Cart /></ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
