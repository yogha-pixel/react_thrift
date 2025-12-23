import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function ItemEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    api.get(`/items/${id}`).then(res => {
      setForm(res.data);
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/items/${id}`, form);
      alert("Item berhasil diupdate");
      navigate("/items");
    } catch (err) {
      alert("Gagal update item");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Edit Item</h2>

      <input
        value={form.name || ""}
        onChange={e => setForm({...form, name:e.target.value})}
      />

      <input
        type="number"
        value={form.price || ""}
        onChange={e => setForm({...form, price:e.target.value})}
      />

      <button>Update</button>
    </form>
  );
}
