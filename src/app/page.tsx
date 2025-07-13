import Banner from "../components/Banner";
import LatestInsights from "../components/LatestInsights";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import MarketSection from "../components/MarketSection";
import AppDownload from "../components/AppDownload";
import Community from "../components/Community";
import LatestBlogs from "../components/LatestBlogs";
import NeedHelp from "../components/NeedHelp";
import BoostBanner from "../components/BoostBanner";
import NewsletterSection from "@/components/NewsletterSection";
import TrustedPartners from "../components/TrustedPartners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <LatestInsights />
      <MarketSection />
      <HowItWorks />
      <Features />
      <AppDownload />
      <NeedHelp />
      <BoostBanner />
      <LatestBlogs />
      <Community />
      <NewsletterSection />
      <TrustedPartners />
      <Footer />
    </>
  );
}
