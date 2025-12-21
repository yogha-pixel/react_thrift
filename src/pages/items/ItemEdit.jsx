import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function ItemEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({});

  useEffect(() => {
    api.get(`/items/${id}`).then(res => setForm(res.data));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/items/${id}`, form);
    alert("Item diupdate");
  };

  return (
    <form onSubmit={submit}>
      <input value={form.name || ""} onChange={e => setForm({...form, name:e.target.value})} />
      <input type="number" value={form.price || ""} onChange={e => setForm({...form, price:e.target.value})} />
      <button>Update</button>
    </form>
  );
}
