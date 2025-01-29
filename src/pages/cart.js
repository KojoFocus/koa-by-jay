import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
          <button className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
}
