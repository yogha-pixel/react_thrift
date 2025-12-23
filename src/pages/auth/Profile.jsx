import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/me").then(res => setUser(res.data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profil</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
