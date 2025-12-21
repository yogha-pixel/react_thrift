import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/register", form);
    localStorage.setItem("token", res.data.token);
    navigate("/items");
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Nama" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})} />
      <button>Register</button>
    </form>
  );
}
