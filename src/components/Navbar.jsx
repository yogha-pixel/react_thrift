import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await api.post("/logout");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{marginBottom:20}}>
      <Link to="/login">Home</Link> |{" "}
      <Link to="/items">Items</Link> |{" "}
      <Link to="/items/create">Tambah Item</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
