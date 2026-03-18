import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LatestPost from "@/components/LatestPost";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <LatestPost />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
