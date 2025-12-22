import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Cart() {
  const [carts, setCarts] = useState([]);

  const loadCart = () => {
    api.get("/carts").then(res => setCarts(res.data));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQty = (id, qty) => {
    api.put(`/carts/${id}`, { quantity: qty })
      .then(loadCart);
  };

  const removeItem = (id) => {
    if (!confirm("Hapus item ini?")) return;
    api.delete(`/carts/${id}`).then(loadCart);
  };

  return (
    <div>
      <h2>Keranjang</h2>

      {carts.length === 0 && <p>Keranjang kosong</p>}

      {carts.map(cart => (
        <div key={cart.id} style={{border:"1px solid #ccc", margin:5, padding:5}}>
          <b>{cart.item.name}</b>
          <br />

          Qty:
          <input
            type="number"
            value={cart.quantity}
            min="1"
            onChange={e => updateQty(cart.id, e.target.value)}
          />

          <button onClick={() => removeItem(cart.id)}>
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}
