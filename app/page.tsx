import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EatherDNA from "@/components/EatherDNA";
import ShopByFunction from "@/components/ShopByFunction";
import FeaturedCollection from "@/components/FeaturedCollection";
import WomensCollection from "@/components/WomensCollection";
import Technology from "@/components/Technology";
import StorySection from "@/components/StorySection";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EatherDNA />
        <ShopByFunction />
        <FeaturedCollection />
        <WomensCollection />
        <Technology />
        <StorySection />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
