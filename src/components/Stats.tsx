import { Users, Calendar, Briefcase, Megaphone } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: "8+",
      label: "Years of Experience",
      color: "text-purple-vibrant",
      bg: "bg-purple-vibrant/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Communities Managed",
      color: "text-blue-vibrant",
      bg: "bg-blue-vibrant/10"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "1,000+",
      label: "Events Organized",
      color: "text-orange-vibrant",
      bg: "bg-orange-vibrant/10"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      number: "5M+",
      label: "Reach via Social Content",
      color: "text-green-vibrant",
      bg: "bg-green-vibrant/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Impact at a{" "}
            <span className="bg-gradient-to-r from-purple-vibrant to-orange-vibrant bg-clip-text text-transparent">
              Glance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driving meaningful outcomes through community building, program management, and strategic partnerships
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-6 text-center shadow-lg hover:shadow-vibrant transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
