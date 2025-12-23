import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function ItemCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    size: "",
    condition: "used",
    image_url: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/items", form);
      alert("Item berhasil ditambahkan");
      navigate("/items");
    } catch (err) {
      alert("Gagal menambah item");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Tambah Item</h2>

      <input placeholder="Nama" onChange={e => setForm({...form, name:e.target.value})} />
      <input type="number" placeholder="Harga" onChange={e => setForm({...form, price:e.target.value})} />
      <input type="number" placeholder="Stok" onChange={e => setForm({...form, stock:e.target.value})} />
      <input placeholder="Kategori" onChange={e => setForm({...form, category:e.target.value})} />
      <input placeholder="Ukuran" onChange={e => setForm({...form, size:e.target.value})} />

      <select onChange={e => setForm({...form, condition:e.target.value})}>
        <option value="used">Used</option>
        <option value="new">New</option>
      </select>

      <button>Simpan</button>
    </form>
  );
}
