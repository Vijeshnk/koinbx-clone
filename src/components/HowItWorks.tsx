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
  <>
    <section className="bg-white dark:bg-[#131932] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
          Buying &amp; selling cryptocurrency will be more user-friendly than in the past
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center px-4 relative">
              <figure className="mb-6 flex justify-center">
                <Image
                  src={step.icon}
                  alt={step.title.toLowerCase().replace(/\s+/g, '-')}
                  width={90}
                  height={90}
                  loading="lazy"
                  className="w-[90px] h-[90px] object-contain"
                />
              </figure>
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-[#8F9194] text-base max-w-xs mx-auto">
                {step.desc}
              </p>
              {/* Divider line except after last */}
              {idx !== steps.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[4px] bg-[#181C2F] rounded-full" style={{left: '100%', marginLeft: '-60px'}}></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Sign up CTA section */}
    <div className="w-full bg-white dark:bg-[#131932] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-left mb-6">
            Sign up now to build your crypto portfolio for free!
          </h3>
          <button className="bg-[#4DE1FF] hover:bg-[#38c6e6] text-[#181C2F] font-bold text-base px-10 py-3 rounded-full transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </>
);

export default HowItWorks;
