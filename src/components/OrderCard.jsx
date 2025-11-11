export default function OrderCard({ order }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border">
      <p><strong>Nama:</strong> {order.name}</p>
      <p><strong>Alamat:</strong> {order.address}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
}

