import { Github, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const MotionA = motion.a;

const socialLinks = [
  { icon: Github, href: "https://github.com/nandan099", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nandan-reddy-1111102b7/", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-linear-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* Branding */}
          <div className="space-y-4 text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight"
            >
              NR<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Building scalable web experiences with modern technologies.
              Passionate about clean UI & performance.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <MotionA
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </MotionA>
            ))}
          </div>
        </div>


        <div className="my-10 border-t border-border" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <p>
            © {currentYear} Nandan Reddy. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with 
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
