import { useState } from "react";
import Navbar from "./components/Navbar";
import OrderForm from "./components/OrderForm";
import OrderCard from "./components/OrderCard";
import Footer from "./components/Footer";

export default function App() {
  const [orders, setOrders] = useState([]);

  const handleOrderSubmit = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <OrderForm onSubmit={handleOrderSubmit} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {orders.map((o, i) => (
            <OrderCard key={i} order={o} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

