import { Button } from "@/components/ui/button";
import { ChevronDown, Play, ArrowRight } from "lucide-react";

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
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-card backdrop-blur-sm border border-white/20 shadow-vibrant overflow-hidden">
              <img 
                src="/lovable-uploads/50ab4d6a-a531-470e-9f31-74a80f10060e.png" 
                alt="Huzaifa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-vibrant rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow">
              ✨
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, I am{" "}
            <span className="bg-gradient-to-r from-orange-vibrant to-accent bg-clip-text text-transparent">
              Huzaifa
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-8">
            <div className="inline-block bg-green-vibrant text-foreground px-8 py-3 rounded-2xl font-semibold text-xl shadow-vibrant">
              A Glimpse Into My Social Media Wizardry!
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting viral social media campaigns, creating engaging content, and driving meaningful engagement 
            across digital platforms with creative storytelling and data-driven strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-vibrant group">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Showreel
            </Button>
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