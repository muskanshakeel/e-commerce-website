"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function Home() {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push('/cart');
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white p-12 shadow-2xl relative">
        <div className="absolute inset-0 bg-gray-800 opacity-40 blur-md"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold font-sans drop-shadow-lg">
            Welcome to Tech<span className="text-orange-500">Tonic</span>
          
          </h1>
          <p className="text-lg mt-4 font-sans drop-shadow-md">
            {`Discover the best products for you!`}`
          </p>
          <div className="mt-8">
            <Link
              href="/shop"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-orange-500 transition-transform transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-8">
        <section id="shop" className="bg-slate-300 p-4 sm:p-8 rounded-lg shadow-lg my-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-800">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example Product Cards */}
            {[
              { src: "/photos/1.jpeg", name: "Product 1", price: "$29.99" },
              { src: "/photos/2.jpg", name: "Product 2", price: "$49.99" },
              { src: "/photos/3.jpeg", name: "Product 3", price: "$39.99" }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={product.src}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-xl font-semibold text-teal-600">{product.price}</p>
                <button
                  onClick={handleBuyNow}
                  className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-300 p-4 sm:p-8 rounded-lg shadow-lg my-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-800">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "/photos/4.jpeg", name: "Product 4", price: "$59.99" },
              { src: "/photos/5.jpg", name: "Product 5", price: "$69.99" },
              { src: "/photos/6.jpg", name: "Product 6", price: "$79.99" }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={product.src}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-xl font-semibold text-teal-600">{product.price}</p>
                <button
                  onClick={handleBuyNow}
                  className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 p-4 mt-12">
        <p className="text-center text-sm">&copy; 2024 TechTonic. All rights reserved.</p>
        <div className="text-center mt-4">
          <Link href="/" className="text-blue-100 hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/" className="text-blue-100 hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
