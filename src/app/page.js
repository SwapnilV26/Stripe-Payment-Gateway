import Product from "@/components/Product";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-bold text-3xl mt-10">Products Available</h1>
      <section className="inline-flex justify-center w-full mt-10 py-20 bg-gray-50">
        <Product />
      </section>
    </main>
  )
}
