import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Megaphone, Users, Calendar, Video } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Community", "Social Media", "Events", "Content"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Google Developer Communities",
      description: "Managing 50+ Google developer communities across the region, driving engagement, growth, and fostering tech ecosystems.",
      image: "/lovable-uploads/15d39cb2-7590-4474-bd88-fa0b92e2998a.png",
      tags: ["Community", "Google", "Developer Relations"],
      category: "Community",
      icon: <Users className="w-5 h-5" />,
      highlight: "50+ Communities"
    },
    {
      title: "AiSeekho Campaign",
      description: "Social media posts ensuring brand consistency with Google's design language. Created engaging frames, ads, and raffle competition posts.",
      image: "/lovable-uploads/15d39cb2-7590-4474-bd88-fa0b92e2998a.png",
      tags: ["Social Media", "Google Cloud", "Brand Design"],
      category: "Social Media",
      icon: <Megaphone className="w-5 h-5" />,
      highlight: "2M+ Reach"
    },
    {
      title: "HERStory - International Women's Day",
      description: "Developed event brand guide, social media posts, raffle competition, and ads resulting in record-high engagement and 50+ PR mentions.",
      image: "/lovable-uploads/add020c4-760f-4888-902c-bacc41c380a0.png",
      tags: ["Event Management", "Branding", "PR"],
      category: "Events",
      icon: <Calendar className="w-5 h-5" />,
      highlight: "50+ PR Mentions"
    },
    {
      title: "Video Production & Content",
      description: "End-to-end video production including scripting, shoot planning, B-rolls, and iterations. Led Google Cloud launch video production.",
      image: "/lovable-uploads/4c4738b9-f3cb-4f96-9529-f2aeb7b0b4f1.png",
      tags: ["Video Production", "Content Strategy", "Storytelling"],
      category: "Content",
      icon: <Video className="w-5 h-5" />,
      highlight: "500K+ Views"
    },
    {
      title: "UNDP Programs",
      description: "Contributed to impactful development programs at UNDP, managing stakeholder engagement and program delivery across diverse communities.",
      image: "/lovable-uploads/add020c4-760f-4888-902c-bacc41c380a0.png",
      tags: ["Program Management", "UNDP", "Development"],
      category: "Community",
      icon: <Users className="w-5 h-5" />,
      highlight: "Global Impact"
    },
    {
      title: "Turing Initiatives",
      description: "Managed community and program initiatives at Turing, building tech talent pipelines and fostering developer engagement.",
      image: "/lovable-uploads/4c4738b9-f3cb-4f96-9529-f2aeb7b0b4f1.png",
      tags: ["Program Management", "Turing", "Tech Talent"],
      category: "Community",
      icon: <Users className="w-5 h-5" />,
      highlight: "Tech Ecosystem"
    }
  ];

  const filtered = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-vibrant to-orange-vibrant bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse portfolio spanning community building, program management, social media, and content creation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-2xl font-medium text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-vibrant"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-vibrant transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm flex items-center gap-1.5">
                  {project.icon}
                  {project.highlight}
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
