import { useState } from "react";
import api from "../../services/api";

export default function ItemCreate() {
  const [form, setForm] = useState({ name:"", price:"", stock:"" });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/items", form);
    alert("Item dibuat");
  };

  return (
    <form onSubmit={submit}>
      <h2>Tambah Item</h2>
      <input placeholder="Nama" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Harga" type="number" onChange={e => setForm({...form, price:e.target.value})} />
      <input placeholder="Stok" type="number" onChange={e => setForm({...form, stock:e.target.value})} />
      <button>Simpan</button>
    </form>
  );
}
