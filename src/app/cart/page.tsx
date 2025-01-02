"use client";

import { useCart } from "../../../context/cart-context";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-blue-800 font-sans drop-shadow-md">
        Shopping Cart
      </h1>

      {/* Empty Cart Message */}
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          <p>Your cart is empty</p>
          <Link
            href="/"
            className="text-blue-700 hover:underline font-medium mt-4 inline-block"
          >
            Go back to shopping
          </Link>
        </div>
      ) : (
        <div>
          {/* Cart Items */}
          <ul className="space-y-6 sm:space-y-8">
            {cart.map((item) => (
              <li
                key={item.id}
                className="bg-white border border-gray-300 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center"
              >
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-teal-900 font-mono mb-2 sm:mb-0">
                    {item.name}
                  </h2>
                  <p className="text-gray-800 text-base sm:text-lg mb-1">
                    Price:{" "}
                    <span className="text-green-700 font-medium">
                      ${item.price.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-gray-800 text-base sm:text-lg">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-700 text-white px-4 sm:px-5 py-2 rounded-md shadow hover:bg-red-800 transition-colors duration-300 w-full sm:w-auto"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Checkout Button */}
          <div className="mt-8 text-center">
            <Link
              href="/checkout"
              className="bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg shadow hover:bg-orange-800 transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
