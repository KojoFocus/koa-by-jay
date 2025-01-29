import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product data based on ID (e.g., from Firebase or an API)
  const product = {
    id: 1,
    name: "Bikini Set",
    price: 49.99,
    image: "/images/bikini.jpg",
    description:
      "A stylish and comfortable bikini set for your summer adventures.",
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        <div>
          <p className="text-xl font-bold">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button className="btn btn-primary mt-6">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
