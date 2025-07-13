const helpLinks = [
  {
    title: "24/7 Customer Support",
    desc: "Get help from our expert support team anytime, anywhere.",
    link: "#",
    linkText: "Contact Now"
  },
  {
    title: "FAQ",
    desc: "Find answers to commonly asked questions about trading and account management.", 
    link: "#",
    linkText: "View FAQs"
  },
  {
    title: "Blog", 
    desc: "Stay updated with the latest crypto news, guides, and trading insights.",
    link: "#",
    linkText: "Read Blogs"
  }
];

const NeedHelp = () => (
  <section className="w-full py-16 px-4 md:px-0 bg-[#212b41]">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-10 text-center">Need Help?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {helpLinks.map((item, i) => (
          <div key={i} className="bg-[#222946] rounded-2xl p-8 border border-[#25304b] hover:border-[#31c4d8] transition-colors text-center">
            <h3 className="text-white font-bold text-xl mb-4">{item.title}</h3>
            <p className="text-[#c8d1d5] text-base mb-6 leading-relaxed">{item.desc}</p>
            <a 
              href={item.link} 
              className="inline-block px-6 py-3 bg-gradient-to-l from-[#31c4d8] to-[#2f80ed] text-white font-semibold rounded-lg hover:from-[#2f80ed] hover:to-[#31c4d8] transition-colors"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NeedHelp;
