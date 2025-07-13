import Image from "next/image";

const LatestBlogs = () => (
  <div className="MuiBox-root jss9 bg-[#2d3748] py-16">
    <div>
      <div className="clslatestBlogBlock pt-5 mt-3">
        <div className="clscontainer max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="latest-blog-text text-white text-3xl md:text-4xl font-bold">Latest Blogs</h2>
          </div>
          <div className="latest-blog-desktop-view">
            <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="col-lg-6 col-md-12 left-side-latest-blog-col">
                <div className="mb-4">
                  <Image
                    src="/assets/img/NewUI/onchain.jpg"
                    className="first-latest-blog-img img-fluid rounded-lg w-full"
                    alt="Boost Your Trading Strategy with On-Chain Crypto Analytics"
                    loading="lazy"
                    width={600}
                    height={300}
                  />
                </div>
                <p className="category-name inline-block bg-[#4FD1C7] text-black px-3 py-1 rounded text-sm font-semibold mb-3">Crypto</p>
                <p className="category-title text-white text-xl font-bold mb-4 leading-tight">Boost Your Trading Strategy with On-Chain Crypto Analytics</p>
                <p className="read-more-blog cursor-pointer text-gray-300 hover:text-white transition-colors flex items-center">
                  <span>Read More</span>
                  <span className="ml-2">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="Vector" d="M8.85834 7.5683C8.62795 7.5683 8.49866 7.5683 8.36937 7.5683C5.9887 7.5683 3.60803 7.57218 1.22736 7.56635C0.343727 7.56441 -0.226895 6.7527 0.0870926 5.96822C0.274708 5.4987 0.694655 5.2372 1.27694 5.23623C3.63331 5.23429 5.98967 5.23526 8.34604 5.23526C8.47922 5.23526 8.6124 5.23526 8.83695 5.23526C8.71349 5.10305 8.63961 5.0214 8.56185 4.94363C7.58294 3.96375 6.6021 2.98679 5.62611 2.004C5.28976 1.66571 5.18089 1.25646 5.33253 0.7986C5.47932 0.356295 5.79914 0.0967449 6.25506 0.0180049C6.64001 -0.0480978 6.98024 0.0695258 7.25437 0.342685C9.00026 2.08371 10.7471 3.82474 12.4843 5.57452C12.9693 6.06349 12.9655 6.74396 12.4755 7.23681C10.7462 8.97784 9.01193 10.713 7.2709 12.4414C6.78096 12.9284 6.06647 12.9197 5.60569 12.4541C5.14492 11.9884 5.14881 11.2817 5.6368 10.7889C6.67889 9.73705 7.7307 8.69398 8.85834 7.5683Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </p>
              </div>
              <div className="col-lg-6 col-md-12 hidden md:block right-side-latest-blog-col space-y-6">
                <div className="flex w-full items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/img/NewUI/metaverse.jpg"
                      className="other-latest-blog-img img-fluid rounded-lg"
                      alt="What Is the Metaverse and How Is Crypto Involved?"
                      loading="lazy"
                      width={120}
                      height={80}
                    />
                  </div>
                  <div className="second-flex-column-blog flex-1">
                    <p className="category-name inline-block bg-[#4FD1C7] text-black px-2 py-1 rounded text-xs font-semibold mb-2">Crypto</p>
                    <p className="category-title text-white text-base font-semibold leading-tight">What Is the Metaverse and How Is Crypto Involved?</p>
                  </div>
                </div>
                <div className="flex w-full items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/img/NewUI/solana.jpg"
                      className="other-latest-blog-img img-fluid rounded-lg"
                      alt="Solana Price Prediction 2025 - 2030: Is SOL a Good Investment?"
                      loading="lazy"
                      width={120}
                      height={80}
                    />
                  </div>
                  <div className="second-flex-column-blog flex-1">
                    <p className="category-name inline-block bg-[#4FD1C7] text-black px-2 py-1 rounded text-xs font-semibold mb-2">Crypto</p>
                    <p className="category-title text-white text-base font-semibold leading-tight">Solana Price Prediction 2025 - 2030: Is SOL a Good Investment?</p>
                  </div>
                </div>
                <div className="flex w-full items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/img/NewUI/etherem.jpg"
                      className="other-latest-blog-img img-fluid rounded-lg"
                      alt="How Smart Contracts Work on Ethereum and Beyond"
                      loading="lazy"
                      width={120}
                      height={80}
                    />
                  </div>
                  <div className="second-flex-column-blog flex-1">
                    <p className="category-name inline-block bg-[#4FD1C7] text-black px-2 py-1 rounded text-xs font-semibold mb-2">Learn</p>
                    <p className="category-title text-white text-base font-semibold leading-tight">How Smart Contracts Work on Ethereum and Beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LatestBlogs;
