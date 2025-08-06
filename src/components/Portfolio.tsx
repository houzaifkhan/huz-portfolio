import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AiSeekho Campaign",
      description: "Social media posts ensuring brand consistency with Google's design language. Created engaging frames, ads, and raffle competition posts.",
      image: "/lovable-uploads/15d39cb2-7590-4474-bd88-fa0b92e2998a.png",
      tags: ["Social Media", "Google Cloud", "Brand Design"],
      color: "from-blue-vibrant to-purple-vibrant",
      metrics: "2M+ Reach"
    },
    {
      title: "HERStory International Women's Day",
      description: "Developed event brand guide, social media posts, raffle competition, and ads resulting in record-high engagement and 50+ PR mentions.",
      image: "/lovable-uploads/add020c4-760f-4888-902c-bacc41c380a0.png",
      tags: ["Event Branding", "Social Campaign", "PR"],
      color: "from-green-vibrant to-blue-vibrant",
      metrics: "50+ PR Mentions"
    },
    {
      title: "Video Production",
      description: "End-to-end video production including scripting, shoot site confirmations, B-rolls, and iterations. Led Google Cloud launch video production.",
      image: "/lovable-uploads/4c4738b9-f3cb-4f96-9529-f2aeb7b0b4f1.png",
      tags: ["Video Production", "Google Cloud", "Content Creation"],
      color: "from-orange-vibrant to-accent",
      metrics: "500K+ Views"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-vibrant to-orange-vibrant bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative campaigns and content that drove engagement and brand growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-vibrant transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {project.metrics}
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

                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {project.title.includes("Video") && (
                    <Button size="sm" variant="outline" className="rounded-xl">
                      <Play className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;