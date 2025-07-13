"use client";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isDownloadOpen, setDownloadOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isLearnOpen, setLearnOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-koinbx-dark-blue fixed w-full z-20 top-0 start-0" style={{ height: '62.172px' }}>
      <div className="flex flex-wrap items-center justify-between w-full h-full" style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '0', paddingBottom: '0' }}>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="/" className="flex items-center">
            <Image
              src="/assets/img/NewUI/KoinBXLogoHead-white.svg"
              width={135}
              height={46.17}
              alt="Koinbx Logo"
              className="w-auto"
              style={{ height: '46.17px', width: '135px' }}
            />
          </a>
          <div className="hidden xl:flex items-center space-x-8">
            <a href="/markets" className="nav-link d-none d-xl-block text-[#F5F5F5] hover:text-blue-700 font-roboto text-sm px-4 py-2 rounded">Markets</a>
            <a href="/trade/BTC-INR" className="nav-link d-none d-xl-block text-[#F5F5F5] hover:text-blue-700 font-roboto text-sm px-4 py-2 rounded">Trade</a>
            <a href="/list-your-crypto-on-koinbx" className="nav-link d-none d-xl-block text-[#F5F5F5] hover:text-blue-700 font-roboto text-sm px-4 py-2 rounded">List Your Crypto</a>
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="nav-link d-none d-xl-block text-[#F5F5F5] hover:text-blue-700 font-roboto text-sm px-4 py-2 rounded flex items-center">
                Products
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800 py-2">
                  <a href="/spot-trading" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Spot Trading</a>
                  <a href="/p2p" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">P2P</a>
                  <a href="/stake" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Stake</a>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button className="nav-link d-none d-xl-block text-[#F5F5F5] hover:text-blue-700 font-roboto text-sm px-4 py-2 rounded flex items-center">
                Learn
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {isLearnOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800 py-2">
                  <a href="/blog" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Blog</a>
                  <a href="/faq" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">FAQ</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-900 dark:text-white hover:text-blue-700">Login</a>
            <a href="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</a>
            <ThemeSwitcher />
            <div
              className="relative"
              onMouseEnter={() => setDownloadOpen(true)}
              onMouseLeave={() => setDownloadOpen(false)}
            >
              <button type="button" className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <Image src="/assets/img/NewUI/downlogo.svg" width={20} height={20} alt="Download App" />
              </button>
              {isDownloadOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg dark:bg-gray-800 p-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <a href="https://play.google.com/store/apps/details?id=com.application.koinbazar&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/img/NewUI/GooglePlayicon.svg" className="cursor-pointer" alt="koinbx-google-play-store" width={100} height={30} />
                      </a>
                      <a href="https://apps.apple.com/in/app/koinbazar/id1567360326" target="_blank" rel="noopener noreferrer" className="mt-2 block">
                        <Image src="/assets/img/NewUI/iOS.svg" className="cursor-pointer" alt="koinbx-ios-app-store" width={100} height={30} />
                      </a>
                    </div>
                    <div className="flex-shrink-0">
                      <Image src="/assets/img/NewUI/account-step.svg" width={80} height={80} alt="QR Code" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Scan QR Code to Download App</p>
                </div>
              )}
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`items-center justify-between w-full md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><a href="/markets" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">Markets</a></li>
            <li><a href="/trade/BTC-INR" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">Trade</a></li>
            <li><a href="/list-your-crypto-on-koinbx" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">List Your Crypto</a></li>
            <li className="border-t border-gray-200 my-2"></li>
            <li><a href="/spot-trading" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">Spot Trading</a></li>
            <li><a href="/p2p" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">P2P</a></li>
            <li><a href="/stake" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">Stake</a></li>
            <li className="border-t border-gray-200 my-2"></li>
            <li><a href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">Blog</a></li>
            <li><a href="/faq" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">FAQ</a></li>
            <li className="border-t border-gray-200 my-2"></li>
            <li><a href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">Login</a></li>
            <li><a href="/register" className="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-blue-800 text-center">Register</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
