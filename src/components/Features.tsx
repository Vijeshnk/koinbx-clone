import Image from "next/image";

const features = [
  {
    icon: "/assets/img/newui/Diversified-ic.svg",
    title: "Diversified Crypto Portfolio",
    desc: "Whether you are a beginner or a pro-level trader, KoinBX is a user-friendly and easy-to-navigate app for a smooth and hassle-free crypto trading journey.",
    hasSpecialBg: false
  },
  {
    icon: "/assets/img/newui/Robust-Security.svg",
    title: "Robust Security Measures",
    desc: "KoinBX implements state-of-the-art security protocols such as two-factor authentication (2FA), cold storage for cryptos, and encrypted data transmission for securing the data and funds of the users.",
    hasSpecialBg: true
  },
  {
    icon: "/assets/img/newui/Competitive-ic.svg",
    title: "Competitive Trading Fees",
    desc: "KoinBX offers competitive and transparent fee structures to attract traders from all backgrounds, fostering and inclusive trading community, allowing traders to maximize their profits.",
    hasSpecialBg: false
  },
  {
    icon: "/assets/img/newui/Fastest-Customer.svg",
    title: "Fastest Customer Support",
    desc: "Whether it's a technical support call or an account-related query, our dedicated support team is committed to providing prompt and effective solutions to improve the overall user experience.",
    hasSpecialBg: false
  },
];

const Features = () => (
  <div className="w-full min-h-screen bg-white dark:bg-[#131932] py-0">
    <section className="py-0">
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-left mb-4">
          Salient Features of KoinBX
        </h2>
        <p className="text-base text-[#8F9194] text-left mb-10 max-w-3xl">
          KoinBX is a cutting-edge crypto trading platform that offers a host of remarkable features tailored to cater to the needs of seasoned traders and crypto enthusiasts. Here are some of the standout features that set KoinBX apart from the rest.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fbfcfd] dark:bg-[#1a213d] rounded-lg shadow-lg p-10 flex flex-col justify-between min-h-[260px]"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-extrabold text-[#181C2F] dark:text-white text-left max-w-[70%]">
                  {feature.title}
                </h3>
                <figure className="ml-4 flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title.toLowerCase().replace(/\s+/g, '-')}
                    className="w-20 h-20 object-contain"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </figure>
              </div>
              <p className="text-[#4B5563] dark:text-white text-base leading-relaxed text-left">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Features;
