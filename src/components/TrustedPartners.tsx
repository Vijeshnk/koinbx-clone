
import Image from "next/image";


const cardCount = 10; // Number of cards to show in the marquee
const cards = Array.from({ length: cardCount }, (_, i) => i);

const TrustedPartners = () => (
  <div className="w-full bg-white dark:bg-[#101426] py-8 overflow-hidden">
    <div className="relative">
      <div className="flex space-x-8 animate-marquee">
        {cards.concat(cards).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-shrink-0 h-20 px-8 bg-white rounded-xl shadow border border-gray-100"
          >
            <Image
              src="/assets/img/NewUI/HumcenColor.webp"
              alt="HUMCEN"
              width={180}
              height={60}
              className="h-16 w-auto object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustedPartners;
