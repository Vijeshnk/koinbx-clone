"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import RegisterButton from "./RegisterButton";

const Navbar = () => {
  const [isDownloadOpen, setDownloadOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const downloadRef = useRef<HTMLDivElement>(null);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Close download dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
        setDownloadOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-[#19213d] fixed w-full z-20 top-0 start-0" style={{ height: '62.172px' }}>
      <div className="flex flex-wrap items-center justify-between w-full h-full" style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '0', paddingBottom: '0' }}>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/img/NewUI/KoinBXLogoHead-white.svg"
              width={135}
              height={46.17}
              alt="Koinbx Logo"
              className="w-auto dark:block hidden"
              style={{ height: '46.17px', width: '135px' }}
            />
            <Image
              src="/assets/img/NewUI/KoinbxLogoblack.svg"
              width={135}
              height={46.17}
              alt="Koinbx Logo"
              className="w-auto dark:hidden block"
              style={{ height: '46.17px', width: '135px' }}
            />
          </Link>
          <div className="hidden xl:flex items-center space-x-4">
            <a href="/markets" className="nav-link d-none d-xl-block text-gray-900 dark:text-[#f5f5f5] hover:text-blue-700 px-4 py-2 rounded flex items-center gap-2 transition-all duration-500 relative">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.90659 0C4.35169 0.152124 4.51695 0.469519 4.50944 0.929647C4.49207 1.84239 4.50474 2.75561 4.50381 3.66882C4.50381 4.19327 4.20003 4.49799 3.67701 4.49846C2.7286 4.49846 1.78036 4.49846 0.832269 4.49846C0.308771 4.49799 0.00640881 4.19374 0.0059393 3.66882C0.00500029 2.75561 0.0181465 1.84239 0.000305233 0.929647C-0.00814587 0.466702 0.158059 0.151655 0.603151 0H3.90659Z" fill="currentColor"></path>
                <path d="M10.6542 0C11.0988 0.152124 11.2646 0.469519 11.2571 0.929647C11.2397 1.84239 11.2524 2.75561 11.2514 3.66882C11.2514 4.19327 10.9476 4.49799 10.4246 4.49846C9.47621 4.49846 8.52797 4.49846 7.57988 4.49846C7.05638 4.49846 6.75402 4.19374 6.75355 3.66882C6.75355 2.75561 6.76576 1.84239 6.74839 0.929647C6.73947 0.466702 6.90567 0.151655 7.35076 0L10.6542 0Z" fill="currentColor"></path>
                <path d="M17.9999 3.90123C17.8469 4.34493 17.5328 4.51161 17.0698 4.50363C16.1567 4.48625 15.243 4.4994 14.3298 4.49846C13.8054 4.49846 13.5021 4.19421 13.5016 3.66976C13.5016 2.75655 13.5138 1.84286 13.4964 0.929648C13.4875 0.466702 13.6537 0.151655 14.0988 0H17.4023C17.5439 0.0417157 17.6728 0.118284 17.7772 0.222699C17.8817 0.327115 17.9582 0.456046 17.9999 0.597698V3.90123Z" fill="currentColor"></path>
                <path d="M18.0003 10.6492C17.8472 11.0924 17.5336 11.2595 17.0702 11.2516C16.1575 11.2342 15.2443 11.2469 14.3311 11.2464C13.8062 11.2464 13.5024 10.9426 13.502 10.4191C13.502 9.4713 13.502 8.52303 13.502 7.57429C13.502 7.0503 13.8057 6.7484 14.3316 6.74793C15.2448 6.74793 16.1579 6.76014 17.0707 6.74277C17.5336 6.73385 17.8477 6.90147 18.0003 7.34516V10.6492Z" fill="currentColor"></path>
                <path d="M18.0003 17.3971C17.8472 17.8403 17.5336 18.0075 17.0702 17.9995C16.1575 17.9821 15.2443 17.9948 14.3311 17.9943C13.8062 17.9943 13.5024 17.6905 13.502 17.167C13.502 16.2186 13.502 15.2703 13.502 14.3222C13.502 13.7982 13.8057 13.4963 14.3316 13.4959C15.2448 13.4959 16.1579 13.5081 17.0707 13.4907C17.5336 13.4818 17.8477 13.6494 18.0003 14.0931V17.3971Z" fill="currentColor"></path>
                <path d="M4.50553 9.01472C4.50553 9.49504 4.50553 9.97536 4.50553 10.4552C4.50553 10.9351 4.18908 11.2449 3.70737 11.2459C2.73706 11.2478 1.76502 11.2478 0.791268 11.2459C0.321762 11.2459 0.00719279 10.9294 0.00578427 10.4637C0.00328024 9.4855 0.00328024 8.50749 0.00578427 7.52964C0.00578427 7.0634 0.32364 6.74977 0.792207 6.74836C1.77034 6.74648 2.74817 6.74648 3.72568 6.74836C4.18204 6.74836 4.49942 7.06575 4.50271 7.52119C4.50881 8.01934 4.50553 8.51703 4.50553 9.01472Z" fill="currentColor"></path>
                <path d="M9.00847 6.74795C9.48831 6.74795 9.96861 6.74795 10.4489 6.74795C10.9396 6.74795 11.2518 7.05877 11.2527 7.54613C11.2527 8.5124 11.2527 9.47852 11.2527 10.4445C11.2527 10.9328 10.9386 11.2427 10.4484 11.2427C9.4822 11.2427 8.51596 11.2427 7.54972 11.2427C7.07082 11.2427 6.75625 10.9285 6.75531 10.4515C6.75344 9.48118 6.75344 8.50912 6.75531 7.53533C6.75531 7.0583 7.07035 6.74701 7.55019 6.74513C8.03002 6.74326 8.52206 6.74795 9.00847 6.74795Z" fill="currentColor"></path>
                <path d="M2.26043 13.4958C2.74026 13.4958 3.22057 13.4958 3.70087 13.4958C4.19103 13.4958 4.50279 13.8071 4.50372 14.2964C4.50372 15.2626 4.50372 16.2288 4.50372 17.1947C4.50372 17.6825 4.18916 17.9929 3.69852 17.9929C2.73791 17.9929 1.77762 17.9929 0.817635 17.9929C0.315733 17.9934 0.00679839 17.6849 0.00585938 17.1844C0.00585938 16.2237 0.00585938 15.2634 0.00585938 14.3034C0.00585938 13.8034 0.316203 13.4972 0.819982 13.4958C1.29982 13.4949 1.78012 13.4958 2.26043 13.4958Z" fill="currentColor"></path>
                <path d="M9.00894 13.4958C9.48925 13.4958 9.96955 13.4958 10.4494 13.4958C10.9395 13.4958 11.2518 13.8071 11.2527 14.294C11.2527 15.2603 11.2527 16.2265 11.2527 17.1928C11.2527 17.6802 10.9381 17.991 10.4475 17.991C9.48127 17.991 8.51518 17.991 7.54925 17.991C7.07035 17.991 6.75625 17.6764 6.75531 17.1989C6.75344 16.2286 6.75344 15.2567 6.75531 14.2832C6.75531 13.8057 7.07082 13.4953 7.55347 13.4935C8.03613 13.4916 8.523 13.4958 9.00894 13.4958Z" fill="currentColor"></path>
              </svg>
              Markets
            </a>
            <a href="/fees" className="nav-link d-none d-xl-block text-gray-900 dark:text-[#f5f5f5] hover:text-blue-700 px-4 py-2 rounded transition-all duration-500 relative">Fees</a>
            <a href="/trade/BTC-INR" className="nav-link d-none d-xl-block text-gray-900 dark:text-[#f5f5f5] hover:text-blue-700 px-4 py-2 rounded transition-all duration-500 relative">Trade</a>
            <a href="/list-your-crypto-on-koinbx" className="nav-link d-none d-xl-block text-gray-900 dark:text-[#f5f5f5] hover:text-blue-700 px-4 py-2 rounded transition-all duration-500 relative">List Your Crypto</a>
            <a href="/earnings" className="nav-link d-none d-xl-block text-gray-900 dark:text-[#f5f5f5] hover:text-blue-700 px-4 py-2 rounded transition-all duration-500 relative">Earnings</a>
          </div>
        </div>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-900 dark:text-white hover:text-blue-700">Login</a>
            <RegisterButton variant="navbar" />
            <ThemeSwitcher />
            <div className="relative" ref={downloadRef}>
              <button 
                type="button" 
                className="p-2 text-gray-500 dark:text-gray-400"
                onClick={() => setDownloadOpen(!isDownloadOpen)}
              >
                <Image src="/assets/img/NewUI/download.svg" width={20} height={20} alt="Download App" className="invert dark:invert-0" />
              </button>
              {isDownloadOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-[#19213d] rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      <a href="https://play.google.com/store/apps/details?id=com.application.koinbazar&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/img/NewUI/GooglePlayicon.svg" className="cursor-pointer hover:opacity-80 transition-opacity" alt="koinbx-google-play-store" width={140} height={42} />
                      </a>
                      <a href="https://apps.apple.com/in/app/koinbazar/id1567360326" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/img/NewUI/iOS.svg" className="cursor-pointer hover:opacity-80 transition-opacity" alt="koinbx-ios-app-store" width={140} height={42} />
                      </a>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-2 rounded mb-2">
                        <Image src="/assets/img/NewUI/qr-code-placeholder.svg" width={80} height={80} alt="QR Code" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-white text-center mt-4 font-medium">Scan QR Code to Download App</p>
                </div>
              )}
            </div>
          </div>
          <RegisterButton variant="navbar" className="md:hidden" />
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

        <div className={`items-center justify-between w-full md:hidden`} id="navbar-sticky">
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Background overlay */}
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
              
              {/* Drawer */}
              <div className={`fixed top-0 right-0 h-full w-4/5 bg-white dark:bg-[#19213d] shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0 flex flex-col`}>
              {/* Header with Close Button */}
              <div className="flex items-center justify-end p-4 border-b border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  <a href="/login" className="flex items-center text-gray-900 dark:text-white text-lg py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={handleNavClick}>
                    Login
                  </a>
                  
                  <div className="py-2">
                    <RegisterButton variant="mobile" onClick={handleNavClick} />
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-600 my-4"></div>

                  <a href="/markets" className="flex items-center justify-between text-gray-900 dark:text-white text-lg py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={handleNavClick}>
                    <span>Market</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a href="/fees" className="flex items-center justify-between text-gray-900 dark:text-white text-lg py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={handleNavClick}>
                    <span>Fees</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a href="/trade/BTC-INR" className="flex items-center justify-between text-gray-900 dark:text-white text-lg py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={handleNavClick}>
                    <span>Trade</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a href="/list-your-crypto-on-koinbx" className="flex items-center justify-between text-gray-900 dark:text-white text-lg py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={handleNavClick}>
                    <span>List Your Crypto</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a href="/earnings" className="flex items-center justify-between text-gray-900 dark:text-white text-lg py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={handleNavClick}>
                    <span>Earn</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a href="/trade-contest" className="flex items-center justify-between text-gray-900 dark:text-white text-lg py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={handleNavClick}>
                    <span>Trade Contest</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer Section */}
              <div className="border-t border-gray-200 dark:border-gray-600 p-4">
                {/* Theme Switcher */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-900 dark:text-white text-lg">Theme</span>
                  <ThemeSwitcher />
                </div>

                {/* Download Apps */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white text-lg">Download Apps</span>
                  <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
