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
    <section className="w-full py-16 px-4 md:px-0 bg-[#2d3748]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
              KoinBX <span className="text-[#4FD1C7]">Newsletter!</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-lg">
              Join the <span className="text-[#4FD1C7] font-semibold">KoinBX</span> newsletter and stay ahead in the world of digital assets!
            </p>
          </div>
          
          {/* Right side - Email form */}
          <div className="flex-1 max-w-md w-full">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FD1C7]/50 border border-gray-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#4FD1C7] text-black font-semibold rounded-lg hover:bg-[#3bc4ba] transition-colors flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
