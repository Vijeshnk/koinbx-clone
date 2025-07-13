"use client";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="w-full py-16 px-4 md:px-0 bg-gradient-to-r from-[#31c4d8] to-[#2f80ed]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-4">
          KoinBX Newsletter!
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Stay updated with the latest crypto news, trading tips, and exclusive insights delivered directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-[#31c4d8] font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
