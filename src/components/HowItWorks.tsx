import Image from "next/image";

const steps = [
  {
    icon: "/assets/img/newui/Create-Account.svg",
    title: "Create Your Account",
    desc: "Set up your KoinBX account by downloading the app, ensuring your documents are easily accessible, to complete the KYC process.",
  },
  {
    icon: "/assets/img/newui/Deposit.svg",
    title: "Deposit Funds",
    desc: "Deposit INR into your account by choosing from our banking payment methods such as NEFT, RTGS, or IMPS.",
  },
  {
    icon: "/assets/img/newui/Trade.svg",
    title: "Start Trading",
    desc: "Begin your cryptocurrency trading journey on KoinBX with as little as 100 INR. Experience seamless and secure trading.",
  },
];

const HowItWorks = () => (
  <div className="MuiBox-root">
    <section className="clseasier-section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="clscontainer max-w-7xl mx-auto px-4">
        <h2 className="clseasier-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Buying & selling cryptocurrency will be more user-friendly than in the past
        </h2>
        
        <div className="clseasier-box-block">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
            {steps.map((step, index) => (
              <li key={index} className="flex justify-center">
                <div className="clseasier-box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center max-w-sm w-full hover:shadow-xl transition-shadow">
                  <figure className="mb-6 flex justify-center">
                    <Image
                      src={step.icon}
                      alt={step.title.toLowerCase().replace(/\s+/g, '-')}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-20 h-20 object-contain"
                    />
                  </figure>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="clsportfolio-signup-block mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Sign up now to build your crypto portfolio for free!
          </h3>
          <div>
            <button className="clsgreen-btn bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HowItWorks;
