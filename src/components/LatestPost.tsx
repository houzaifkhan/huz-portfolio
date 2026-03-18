import { useLatestLinkedInPost } from "@/hooks/useLinkedInPost";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ArrowUpRight } from "lucide-react";

const LatestPost = () => {
  const { data: post, isLoading } = useLatestLinkedInPost();

  if (isLoading || !post) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <a
            href={post.post_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-card border-border hover:border-primary/40 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Linkedin className="w-5 h-5 text-blue-vibrant" />
                  <span className="text-sm font-medium text-muted-foreground">Latest on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.snippet}
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
