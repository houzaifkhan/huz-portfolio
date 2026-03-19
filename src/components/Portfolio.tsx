import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users } from "lucide-react";
import { useState } from "react";
import { useProjects } from "@/hooks/useProjects";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: projects, isLoading } = useProjects();

  const categories = ["All", ...new Set(projects?.map((p) => p.category) || [])];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects?.filter((p) => p.category === activeCategory);

  return (
    <section id="featured-work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-vibrant to-orange-vibrant bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of work focused on building communities, launching programs, and creating partnerships that help ideas and people grow.
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

        {isLoading ? (
          <div className="text-center text-muted-foreground py-12">Loading projects...</div>
        ) : !filtered?.length ? (
          <div className="text-center text-muted-foreground py-12">No projects found.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-vibrant transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.highlight && (
                    <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {project.highlight}
                    </div>
                  )}
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

                  {project.tags && project.tags.length > 0 && (
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
                  )}

                  {(project as any).details_url && (
                    <a href={(project as any).details_url} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl w-full"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
