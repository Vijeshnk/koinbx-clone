import Image from "next/image";

const AppDownload = () => (
  <div className="MuiBox-root">
    <div className="clsstayAheadBlcok bg-white dark:bg-[#101426] text-white py-16">
      <div className="clscontainer max-w-7xl mx-auto px-4">
        <h2 className="clscommon-title text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Stay ahead and become a Crypto Trailblazer with the KoinBX App!
        </h2>
        
        <div className="row align-items-center pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Right Column - Download Section */}
          <div className="col-lg-4 order-lg-2 clsstayAheadPlaystoreBlock lg:col-span-4 lg:order-2">
            <h3 className="mb-4 pb-2 text-2xl md:text-3xl font-bold text-white">
              Trade Anytime,<br />
              Anywhere.
            </h3>
            
            <div className="d-flex flex items-start gap-6">
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                <li>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.application.koinbazar&hl=en_IN&gl=US" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="mb-2">
                      <Image 
                        src="/assets/img/NewUI/GooglePlayicon.svg" 
                        className="img-fluid hover:opacity-80 transition-opacity" 
                        alt="koinbx-google-play-store" 
                        width={160}
                        height={48}
                        loading="lazy"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://apps.apple.com/in/app/koinbazar/id1567360326" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="mb-2">
                      <Image 
                        src="/assets/img/NewUI/iOS.svg" 
                        className="img-fluid hover:opacity-80 transition-opacity" 
                        alt="koinbx-ios-app-store" 
                        width={160}
                        height={48}
                        loading="lazy"
                      />
                    </div>
                  </a>
                </li>
              </ul>
              
              <div className="flex-shrink-0">
                <Image
                  src="/assets/img/NewUI/qr-code-placeholder.svg"
                  alt="QR Code for KoinBX App Download"
                  width={96}
                  height={96}
                  className="clsstayheadqr w-24 h-24 bg-white p-2 rounded"
                />
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mt-6 leading-relaxed">
              Experience smooth trading and enhance your crypto portfolio while on the move!
            </p>
          </div>

          {/* Left Column - Mobile Image */}
          <div className="col-lg-8 order-lg-1 lg:col-span-8 lg:order-1">
            <div className="flex justify-center lg:justify-start">
              <Image 
                src="/assets/img/NewUI/MobileStayAhea.webp" 
                className="img-fluid max-w-full h-auto" 
                alt="koinbx-app" 
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AppDownload;
