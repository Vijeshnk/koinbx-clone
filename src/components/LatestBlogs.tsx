import Image from "next/image";

const blogs = [
  {
    img: "/assets/img/newui/blog1-placeholder.jpg", // Add placeholder images
    title: "Boost Your Trading Strategy with On-Chain Crypto",
    date: "January 15, 2025",
    readTime: "5 min read"
  },
  {
    img: "/assets/img/newui/blog2-placeholder.jpg",
    title: "Understanding DeFi: A Complete Guide for Beginners",
    date: "January 12, 2025", 
    readTime: "7 min read"
  },
  {
    img: "/assets/img/newui/blog3-placeholder.jpg",
    title: "Top 5 Crypto Trading Tips Every Trader Should Know",
    date: "January 10, 2025",
    readTime: "4 min read"
  }
];

const LatestBlogs = () => (
  <section className="w-full py-16 px-4 md:px-0 bg-[#182031]">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-10">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <div key={i} className="bg-[#222946] rounded-2xl overflow-hidden shadow-xl border border-[#25304b] hover:border-[#31c4d8] transition-colors">
            <div className="h-48 bg-gradient-to-br from-[#31c4d8] to-[#2f80ed] relative">
              {/* Placeholder for blog image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#31c4d8]/20 to-[#2f80ed]/20 flex items-center justify-center">
                <div className="text-white/60 text-sm">Blog Image</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 leading-tight">
                {blog.title}
              </h3>
              <div className="flex items-center gap-4 text-[#9baac7] text-sm">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <a href="#" className="inline-block mt-4 text-[#31c4d8] font-semibold hover:text-[#2f80ed] transition-colors">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestBlogs;
