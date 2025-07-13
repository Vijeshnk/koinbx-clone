import Banner from "../components/Banner";
import Hero from "../components/Hero";
import LatestInsights from "../components/LatestInsights";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import MarketSection from "../components/MarketSection";
import AppDownload from "../components/AppDownload";
import TrustedBy from "../components/TrustedBy";
import Community from "../components/Community";
import BoostVisibility from "../components/BoostVisibility";
import LatestBlogs from "../components/LatestBlogs";
import NeedHelp from "../components/NeedHelp";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Banner />
      <LatestInsights />
      <MarketSection />
      <HowItWorks />
      <Features />
      <AppDownload />
      <BoostVisibility />
      <LatestBlogs />
      <NeedHelp />
      <TrustedBy />
      <Community />
      <Newsletter />
    </>
  );
}
