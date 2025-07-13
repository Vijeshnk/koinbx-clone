import Image from "next/image";

const AppDownload = () => (
  <section className="relative py-16 px-4 md:px-0 bg-[#212b41] w-full">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 ">
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Stay Ahead with KoinBX App</h2>
        <p className="text-[#dbe8eb] text-base mb-6 max-w-md">Buy, sell and manage your portfolio with our easy-to-use app for Android & iOS. Get real-time alerts and fast support on the go.</p>
        <div className="flex gap-4">
          <a href="#">
            <Image src="/assets/img/NewUI/GooglePlayicon.svg" alt="Google Play" width={160} height={54} className="h-14 w-auto" />
          </a>
          <a href="#">
            <Image src="/assets/img/NewUI/iOS.svg" alt="Apple Store" width={160} height={54} className="h-14 w-auto" />
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[310px]">
        <Image src="/assets/img/NewUI/MobileStayAhea.webp" alt="App mockup" fill style={{objectFit:'contain'}} className="block w-full max-w-[330px] h-auto relative z-10" />
      </div>
    </div>
  </section>
);

export default AppDownload;
