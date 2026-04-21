import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, MapPin, Rocket, TrendingUp, Users, Globe, Lightbulb, BarChart3 } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    { icon: Globe, label: "Ecosystems", angle: -90 },
    { icon: Lightbulb, label: "Strategy", angle: -30 },
    { icon: BarChart3, label: "Growth", angle: 30 },
    { icon: Users, label: "Community", angle: 90 },
    { icon: Rocket, label: "Launches", angle: 150 },
    { icon: TrendingUp, label: "Partnerships", angle: 210 },
  ];

  const metrics = [
    { icon: Rocket, value: "10+", label: "Programs Led" },
    { icon: TrendingUp, value: "3", label: "Global Orgs" },
    { icon: Users, value: "1K+", label: "Founders & Devs" },
  ];

  return (
    <section className="min-h-screen flex items-center bg-background relative overflow-hidden py-20">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Soft accent glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-vibrant/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-orange-vibrant/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-vibrant opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-vibrant" />
              </span>
              <span className="text-sm font-medium text-foreground">Program Manager</span>
              <span className="text-border">·</span>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> Dubai, UAE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-vibrant via-accent to-orange-vibrant bg-clip-text text-transparent">
                Huzaifa
              </span>
              <br />
              Habib.
            </h1>

            {/* Story */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              I've worked across <span className="text-foreground font-semibold">Google</span>,{" "}
              <span className="text-foreground font-semibold">Turing</span>, and{" "}
              <span className="text-foreground font-semibold">UNDP</span> — turning strategy into execution by
              building partnerships, launching programs, and creating engagement with founders, developers, and
              customers.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-border bg-card hover:border-purple-vibrant/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <m.icon className="w-5 h-5 text-muted-foreground mb-3 group-hover:text-purple-vibrant transition-colors" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#featured-work">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-semibold rounded-2xl group"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/huzaifa-habib/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base font-semibold rounded-2xl border-border hover:bg-muted group"
                >
                  <Linkedin className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Interactive orbital display */}
          <div className="relative h-[480px] lg:h-[560px] hidden lg:flex items-center justify-center">
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full border border-border/60" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px] rounded-full border border-border/40 border-dashed" />
            </div>

            {/* Connection lines (animated) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
              {skills.map((_, i) => {
                const angle = (skills[i].angle * Math.PI) / 180;
                const r = 210;
                const cx = 50;
                const cy = 50;
                const x = cx + (r / 5.6);
                const y = cy + (r / 5.6);
                const x2 = `calc(50% + ${Math.cos(angle) * r}px)`;
                const y2 = `calc(50% + ${Math.sin(angle) * r}px)`;
                const isActive = activeSkill === i;
                return (
                  <line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={x2}
                    y2={y2}
                    stroke="hsl(var(--purple-vibrant))"
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray="4 4"
                    className="transition-opacity duration-300"
                    style={{ opacity: isActive ? 0.6 : 0.15 }}
                  />
                );
              })}
            </svg>

            {/* Center orb */}
            <div className="relative z-10">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-vibrant to-accent shadow-vibrant flex items-center justify-center text-center p-6 animate-pulse-slow">
                <div>
                  <div className="text-white font-bold text-lg leading-tight">Program</div>
                  <div className="text-white font-bold text-lg leading-tight">Leadership</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-purple-vibrant/30 blur-2xl -z-10" />
            </div>

            {/* Orbiting skill cards */}
            {skills.map((skill, i) => {
              const angle = (skill.angle * Math.PI) / 180;
              const r = 210;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              const Icon = skill.icon;
              const isActive = activeSkill === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className={`absolute z-20 transition-all duration-500 cursor-pointer ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`w-24 h-24 rounded-2xl bg-card border flex flex-col items-center justify-center gap-1.5 shadow-md transition-all ${
                      isActive
                        ? "border-purple-vibrant shadow-vibrant"
                        : "border-border hover:border-purple-vibrant/50"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors ${
                        isActive ? "text-purple-vibrant" : "text-foreground"
                      }`}
                    />
                    <span className="text-xs font-medium text-foreground">{skill.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
