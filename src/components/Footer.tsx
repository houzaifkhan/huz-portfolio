import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-foreground mb-2">
              Huzaifa{" "}
              <span className="bg-gradient-to-r from-purple-vibrant via-accent to-orange-vibrant bg-clip-text text-transparent">
                Habib
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Program Manager turning strategy into execution across global ecosystems.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-center">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#featured-work" className="text-muted-foreground hover:text-foreground transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#companies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:houzaifkhan@gmail.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  houzaifkhan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/huzaifa-habib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Huzaifa Habib. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with care · Built for impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
