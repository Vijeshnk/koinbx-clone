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
  <div className="MuiBox-root feature-box mt-5 pt-4">
    <section className="clssalient-feature-section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="clscontainer max-w-7xl mx-auto px-4">
        <h2 className="clscommon-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Salient Features of KoinBX
        </h2>
        <h6 className="clshelper-title text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          KoinBX is a cutting-edge crypto trading platform that offers a host of remarkable features tailored to cater to the needs of seasoned traders and crypto enthusiasts. Here are some of the standout features that set KoinBX apart from the rest.
        </h6>
        
        <div className="clssalient-feature-box-block">
          <div className="row row-cols-1 row-cols-sm-1 clssalient-feature-box-block-row grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`col-md-6 clssalient-feature-box ${
                  feature.hasSpecialBg 
                    ? 'clsgreen-bg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20' 
                    : 'bg-white dark:bg-gray-800'
                } rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow`}
              >
                <div className="clssalient-feature-box-title-block flex items-center justify-between mb-6">
                  <h3 className="order-1 text-xl font-semibold text-gray-900 dark:text-white flex-1">
                    {feature.title}
                  </h3>
                  <figure className="order-2 ml-4 flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title.toLowerCase().replace(/\s+/g, '-')}
                      className="img-fluid w-16 h-16 object-contain"
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  </figure>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Features;
