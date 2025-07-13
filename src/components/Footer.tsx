import Image from "next/image";

const links1 = [
  { label: "About Us", href: "#" },
  { label: "Fees", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Legal", href: "#" },
];
const links2 = [
  { label: "Security", href: "#" },
  { label: "Careers", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  { src: "/assets/img/NewUI/Linkedin.svg", alt: "LinkedIn" },
  { src: "/assets/img/NewUI/Fb.svg", alt: "Facebook" },
  { src: "/assets/img/NewUI/Twitter.svg", alt: "Twitter" },
  { src: "/assets/img/NewUI/Insta.svg", alt: "Instagram" },
  { src: "/assets/img/NewUI/Youtube.svg", alt: "YouTube" },
];

const Footer = () => (
  <footer className="w-full bg-gradient-to-t from-[#202940] to-[#222c42] pt-12 pb-4 border-t border-[#2c3753] text-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-6">
      <div className="md:col-span-2 flex flex-col gap-3">
        <a href="/" className="inline-flex items-center mb-2">
          <Image src="/assets/img/NewUI/KoinbxLogo.svg" alt="Logo" width={120} height={30} className="h-8 w-auto" />
        </a>
        <p className="text-[#cad4e3] text-sm mb-2 max-w-xs">
          KoinBX is India’s trusted cryptocurrency trading platform. Experience secure, simple & transparent crypto investing.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#31c4d8] font-bold mb-1">Company</div>
        {links1.map((l) => (
          <a key={l.label} href={l.href} className="text-sm text-[#cad4e3] hover:text-[#31c4d8] transition-colors">{l.label}</a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#31c4d8] font-bold mb-1">Support</div>
        {links2.map((l) => (
          <a key={l.label} href={l.href} className="text-sm text-[#cad4e3] hover:text-[#31c4d8] transition-colors">{l.label}</a>
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-[#334059]">
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <a href="#" key={s.alt} className="hover:scale-110 transition-transform">
            <Image src={s.src} alt={s.alt} width={26} height={26} />
          </a>
        ))}
      </div>
      <div className="text-xs text-[#8397ad] text-center sm:text-right">© {new Date().getFullYear()} KoinBX. All rights reserved.</div>
    </div>
  </footer>
);
export default Footer;
