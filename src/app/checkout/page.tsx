'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCompletePurchase = () => {
    // Basic validation
    if (!name || !email || !address || !cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all the fields.');
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      alert('Purchase complete!');
      router.push('/');
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg flex flex-col space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4 md:mb-6 text-center">
        Checkout Page
      </h1>

      {error && <p className="text-red-600 text-sm md:text-base mb-4">{error}</p>}

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="Enter your address"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="MM/YY"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="123"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleCompletePurchase}
        className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-base md:text-lg">
        Complete Purchase
      </button>
    </div>
  );
}
