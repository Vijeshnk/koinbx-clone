import Image from "next/image";

const partners = [
  { name: "blockspot.io", logo: "/assets/img/NewUI/blockspot-logo.svg" },
  { name: "HUMCEN", logo: "/assets/img/NewUI/humcen-logo.svg" },
  { name: "THENEWSCRYPTO", logo: "/assets/img/NewUI/thenewscrypto-logo.svg" },
  { name: "CoinMarketCap", logo: "/assets/img/NewUI/CMC.svg" },
  { name: "Coinpare", logo: "/assets/img/NewUI/coinpare-logo.svg" },
  { name: "CoinGecko", logo: "/assets/img/NewUI/coingecko-logo.svg" },
  { name: "CRYPTOPRICES123", logo: "/assets/img/NewUI/cryptoprices123-logo.svg" },
  { name: "coinpaprika", logo: "/assets/img/NewUI/coinpaprika-logo.svg" },
];

const TrustedPartners = () => (
  <div className="w-full bg-white py-8 overflow-hidden">
    <div className="relative">
      {/* Scrolling container */}
      <div className="flex space-x-8 animate-marquee">
        {/* First set of logos */}
        {partners.concat(partners).map((partner, index) => (
          <div key={index} className="flex items-center justify-center flex-shrink-0 h-16 px-8">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustedPartners;
