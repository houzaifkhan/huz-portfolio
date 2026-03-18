import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-vibrant rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-vibrant rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          
          <div className="mb-12">
            <p className="text-2xl text-white/90 mb-4">Have a project or idea in mind?</p>
            <p className="text-xl text-white/80">
              Reach out at:{" "}
              <a 
                href="mailto:houzaifkhan@gmail.com" 
                className="text-green-vibrant hover:text-green-vibrant/80 transition-colors font-semibold underline decoration-2 underline-offset-4"
              >
                houzaifkhan@gmail.com
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-green-vibrant mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Email Me</h3>
                <p className="text-white/70 text-sm">Quick response guaranteed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-vibrant mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-white/70 text-sm">Let's connect professionally</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-orange-vibrant mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Let's Chat</h3>
                <p className="text-white/70 text-sm">Schedule a conversation</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:houzaifkhan@gmail.com">
              <Button size="lg" className="bg-green-vibrant hover:bg-green-vibrant/90 text-foreground px-8 py-4 text-lg font-semibold rounded-2xl shadow-glow">
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/huzaifa-habib/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm">
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
