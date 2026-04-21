import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LatestPost from "@/components/LatestPost";
import Portfolio from "@/components/Portfolio";
import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <LatestPost />
      <Portfolio />
      <Companies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
