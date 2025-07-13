import Image from "next/image";

const steps = [
  {
    icon: "/assets/img/newui/account-step.svg",
    title: "Create Your Account",
    desc: "Set up your KoinBX account by downloading the app, ensuring your documents are easily accessible, to complete the KYC process.",
  },
  {
    icon: "/assets/img/newui/deposit-step.svg",
    title: "Deposit Funds",
    desc: "Deposit INR into your account by choosing from our banking payment methods such as NEFT, RTGS, or IMPS.",
  },
  {
    icon: "/assets/img/newui/trade-step.svg",
    title: "Start Trading",
    desc: "Begin your cryptocurrency trading journey on KoinBX with as little as 100 INR. Experience seamless and secure trading.",
  },
];

const HowItWorks = () => (
  <section className="relative z-10 py-20 px-4 md:px-0 bg-[#182031] w-full">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-center w-full">
        Buying & selling cryptocurrency will be more user-friendly than in the past
      </h2>
      <p className="text-base md:text-lg text-[#c8d1d5] mb-12 text-center max-w-2xl w-full">
        3 simple steps to start your journey on KoinBX
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-8 w-full">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center bg-gradient-to-br from-[#212b41] to-[#25304b] rounded-2xl px-8 py-10 max-w-xs w-full mx-auto shadow-xl border border-[#2d3957]"
          >
            <div className="mb-6 shadow-[0_6px_32px_rgba(49,196,216,0.07)] bg-gradient-to-tl from-[#182031] to-[#25304b] rounded-full w-24 h-24 flex items-center justify-center">
              <Image
                src={s.icon}
                alt={s.title}
                width={92}
                height={92}
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-white mb-2">{s.title}</div>
            <p className="text-[#c8d1d5] text-base leading-relaxed max-w-[230px] md:max-w-none">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
