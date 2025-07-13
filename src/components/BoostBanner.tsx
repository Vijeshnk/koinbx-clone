import Image from "next/image";

const BoostBanner = () => (
  <div className="MuiBox-root jss8">
    <div className="clscontainer clsSingleCarousal max-w-7xl mx-auto px-4">
      <div className="single-card-carousal-container flex justify-center">
        <div className="">
          <Image 
            src="/assets/img/NewUI/boost.webp" 
            className="SingleCardImage img-fluid cursor-pointer" 
            alt="list-your-crypto-on-koinbx" 
            loading="lazy"
            width={1200}
            height={400}
          />
        </div>
      </div>
    </div>
  </div>
);

export default BoostBanner;
