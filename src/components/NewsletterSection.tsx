import React from "react";

const NewsletterSection = () => (
  <div className="w-full bg-[#fbfcfd] dark:bg-[#131932] py-0">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between pt-2 pb-10">
      <div className="flex-1 min-w-0">
        <h2 className="text-5xl font-extrabold text-black dark:text-white mb-2">
          KoinBX <span className="text-[#00C5F6]">Newsletter</span>!
        </h2>
        <p className="text-base text-[#232323] dark:text-[#8F9194] mb-0">
          Join the <span className="text-[#00C5F6] font-bold">KoinBX</span> newsletter and stay ahead in the world of digital assets!
        </p>
      </div>
      <form className="flex-1 flex justify-end mt-6 md:mt-0">
        <div className="flex w-full max-w-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg bg-transparent border border-gray-400 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C5F6]"
            style={{ minWidth: 0 }}
          />
          <button
            type="submit"
            className="bg-[#00C5F6] hover:bg-[#00b5e6] text-white rounded-r-lg px-4 flex items-center justify-center transition-colors"
            style={{ minWidth: 44 }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default NewsletterSection;
