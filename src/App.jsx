import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";

function App() {
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
