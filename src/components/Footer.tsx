import Image from "next/image";

const Footer = () => (
  <footer className="w-full bg-[#2d3748] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Left Section - Logo and Description */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <Image 
              src="/assets/img/NewUI/KoinbxLogo.svg" 
              alt="KoinBX Logo" 
              width={120} 
              height={30} 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-300 text-sm mb-6 max-w-sm leading-relaxed">
            Empower your crypto journey with KoinBX, the simple and secure crypto exchange platform
          </p>
          
          {/* App Download Buttons */}
          <div className="flex items-center gap-4 mb-6">
            <a href="https://play.google.com/store/apps/details?id=com.application.koinbazar&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/GooglePlayicon.svg" 
                alt="Get it on Google Play" 
                width={140} 
                height={42}
                className="h-10 w-auto"
              />
            </a>
            <a href="https://apps.apple.com/in/app/koinbazar/id1567360326" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/iOS.svg" 
                alt="Download on App Store" 
                width={140} 
                height={42}
                className="h-10 w-auto"
              />
            </a>
            <div className="ml-4">
              <Image
                src="/assets/img/NewUI/qr-code-placeholder.svg"
                alt="QR Code"
                width={80}
                height={80}
                className="w-20 h-20 bg-white p-2 rounded"
              />
            </div>
          </div>
          
          <p className="text-xs text-gray-400">
            A FIU (Govt. of India) registered entity with REID :<br />
            VA00448773
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Markets</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Trade</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Fees</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">API Documentation</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Trade Contest</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Download</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">List Crypto</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Glossary</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Support Ticket</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Partnership & Enquiries</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Partners</a></li>
          </ul>
        </div>

        {/* Trade Crypto Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Trade Crypto</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Bitcoin in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Ethereum in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Tether in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Ripple in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Doge coin in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Litecoin in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Tron in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Cardano in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Polygon in India</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Buy Solana in India</a></li>
          </ul>
        </div>

        {/* Legal & Community */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 mb-6">
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">White Paper</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms and Use</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">AML KYC</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Refund Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Corporate Account</a></li>
          </ul>
          
          <h3 className="text-white font-semibold mb-4">Community</h3>
          <div className="grid grid-cols-4 gap-2">
            <a href="https://twitter.com/KoinBX" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Twitter.svg" alt="Twitter" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://t.me/koinbx_announcement" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Tele.svg" alt="Telegram" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@KoinBX?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Youtube.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://coinmarketcap.com/exchanges/koinbx/" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/CMC.svg" alt="CoinMarketCap" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/koinbx/" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Insta.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/koinbx" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/KoinBX/" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Fb.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://medium.com/@koinbx" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Medium.svg" alt="Medium" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://www.threads.net/@koinbx" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Thread.svg" alt="Threads" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://in.pinterest.com/koinbx/" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/Pinterest.svg" alt="Pinterest" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://vk.com/koinbx" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-2 hover:bg-gray-100 transition-colors">
              <Image src="/assets/img/NewUI/VK.svg" alt="VK" width={24} height={24} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Risk Warning */}
      <div className="border-t border-gray-600 pt-8 mb-8">
        <h4 className="text-red-400 font-semibold mb-3">RISK WARNING</h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          Crypto trading is subject to high market risk. We request you to trade cautiously. <span className="text-[#4FD1C7]">KoinBX</span> will provide its best efforts to list quality cryptos, and we will not be responsible for your trading losses.
        </p>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 KoinBX. All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
