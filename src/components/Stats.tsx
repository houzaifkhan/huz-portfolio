import { TrendingUp, Users, Eye, Heart, Share2, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Eye className="w-8 h-8" />,
      number: "10M+",
      label: "Total Reach",
      color: "text-blue-vibrant",
      bg: "bg-blue-vibrant/10"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "2.5M+",
      label: "Engagement",
      color: "text-orange-vibrant",
      bg: "bg-orange-vibrant/10"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      number: "500K+",
      label: "Shares",
      color: "text-green-vibrant",
      bg: "bg-green-vibrant/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "1M+",
      label: "Followers Growth",
      color: "text-purple-vibrant",
      bg: "bg-purple-vibrant/10"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "85%",
      label: "Engagement Rate",
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "50+",
      label: "Campaigns",
      color: "text-blue-vibrant",
      bg: "bg-blue-vibrant/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-purple-vibrant to-orange-vibrant bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable results through creative social media strategies and engaging content
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