import { useEffect, useState } from "react";
import api from "../../services/api";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [me, setMe] = useState(null);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const loadItems = (p = 1) => {
    api.get(`/items?page=${p}`).then(res => {
      setItems(res.data.data);
      setPage(res.data.current_page);
      setLastPage(res.data.last_page);
    });
  };

  useEffect(() => {
    loadItems();
    api.get("/me").then(res => setMe(res.data));
  }, []);

  const addToCart = (id) => {
    api.post("/carts", { item_id: id, quantity: 1 })
      .then(() => alert("Masuk keranjang"));
  };

  const deleteItem = (id) => {
    if (!confirm("Hapus item?")) return;
    api.delete(`/items/${id}`)
      .then(() => loadItems(page))
      .catch(err => {
        if (err.response.status === 403) {
          alert("Bukan item kamu");
        }
      });
  };

  return (
    <>
      <h2>Daftar Item</h2>

      {items.map(item => (
        <div key={item.id} style={{border:"1px solid #ccc", margin:5}}>
          <b>{item.name}</b> - Rp {item.price}
          <br />
          <button onClick={() => addToCart(item.id)}>+ Cart</button>

          {me && me.id === item.user_id && (
            <>
              <button>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Hapus</button>
            </>
          )}
        </div>
      ))}

      <br />
      <button disabled={page===1} onClick={() => loadItems(page-1)}>Prev</button>
      <button disabled={page===lastPage} onClick={() => loadItems(page+1)}>Next</button>
    </>
  );
}
