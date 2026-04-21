import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-foreground relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Soft accent glows */}
      <div className="absolute top-0 -left-32 w-[480px] h-[480px] rounded-full bg-purple-vibrant/20 blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-[480px] h-[480px] rounded-full bg-orange-vibrant/15 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-vibrant opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-vibrant" />
            </span>
            <span className="text-sm font-medium text-background">Open to opportunities</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Let's work{" "}
            <span className="bg-gradient-to-r from-purple-vibrant via-accent to-orange-vibrant bg-clip-text text-transparent">
              together
            </span>
            .
          </h2>
          <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-2xl mb-12">
            Have a program to launch, an ecosystem to grow, or a partnership in mind?
            I'd love to hear about it.
          </p>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <a
              href="mailto:houzaifkhan@gmail.com"
              className="group p-6 rounded-2xl bg-background/5 hover:bg-background/10 border border-background/10 hover:border-background/30 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-background/40 group-hover:text-background group-hover:rotate-12 transition-all" />
              </div>
              <div className="text-xs uppercase tracking-widest text-background/50 mb-2">Email</div>
              <div className="text-lg font-semibold text-background">houzaifkhan@gmail.com</div>
            </a>

            <a
              href="https://www.linkedin.com/in/huzaifa-habib/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-background/5 hover:bg-background/10 border border-background/10 hover:border-background/30 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-background" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-background/40 group-hover:text-background group-hover:rotate-12 transition-all" />
              </div>
              <div className="text-xs uppercase tracking-widest text-background/50 mb-2">LinkedIn</div>
              <div className="text-lg font-semibold text-background">/in/huzaifa-habib</div>
            </a>
          </div>

          {/* CTA + meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-background/10">
            <a href="mailto:houzaifkhan@gmail.com">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base font-semibold rounded-2xl group"
              >
                <Mail className="mr-2 w-4 h-4" />
                Start a conversation
              </Button>
            </a>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Dubai, UAE
              </span>
              <span>© {new Date().getFullYear()} Huzaifa Habib</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
