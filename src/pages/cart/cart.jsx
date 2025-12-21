import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    api.get("/carts").then(res => setCarts(res.data));
  }, []);

  return (
    <div>
      <h2>Keranjang</h2>
      {carts.map(c => (
        <div key={c.id}>
          {c.item.name} ({c.quantity})
        </div>
      ))}
    </div>
  );
}
