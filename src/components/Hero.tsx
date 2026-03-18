import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-vibrant rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-vibrant rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-vibrant rounded-full opacity-30 animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-card backdrop-blur-sm border border-white/20 shadow-vibrant overflow-hidden">
              <img 
                src="/lovable-uploads/hero-profile.jpg" 
                alt="Huzaifa Habib - Program Manager" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-vibrant to-accent bg-clip-text text-transparent">
              Huzaifa Habib
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-8">
            <div className="inline-block bg-green-vibrant text-foreground px-8 py-3 rounded-2xl font-semibold text-xl shadow-vibrant">
              Program Manager
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building and scaling tech ecosystems by connecting the right people, 
            driving community programs, and delivering impactful initiatives across 
            Google, Turing, and the UNDP.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#featured-work">
              <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-vibrant group">
                Explore My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/huzaifa-habib/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-vibrant group">
                <Linkedin className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
