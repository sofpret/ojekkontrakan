import { useState } from "react";

export default function OrderForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) return alert("Lengkapi data dulu bos!");
    onSubmit({ name, address, status: "Menunggu" });
    setName("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-2">Pesan Ojek</h2>
      <input
        type="text"
        placeholder="Nama Pemesan"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-md p-2 mb-2"
      />
      <input
        type="text"
        placeholder="Alamat Jemput"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border rounded-md p-2 mb-2"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Pesan Sekarang
      </button>
    </form>
  );
}

