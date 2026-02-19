import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Html",
  "CSS",
  "Git",
  "Vercel",
  "Github",
  "Bootstrap",
];

const MotionH1 = motion.h1;
const MotionImg = motion.img;
const baseUrl = import.meta.env.BASE_URL;
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
              >
                Building scalable
                <span className="block text-primary">
                  modern web applications
                </span>
                that deliver results.
              </MotionH1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Hi, I'm <span className="font-semibold text-foreground">Nandan Reddy</span> —
                a software engineer specializing in
                React, JavaScript, Node.js, and Python. I build scalable, 
                performant web applications that users love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <AnimatedBorderButton size="lg" href="https://github.com/nandan099?tab=repositories" className="group">
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </AnimatedBorderButton>

              <AnimatedBorderButton
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" href="" />
                Download Resume
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {[ 
                { icon: Github, href: "https://github.com/nandan099" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nandan-reddy-1111102b7/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Skills */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4 font-bold uppercase tracking-wide">
                Skills & Technologies
              </p>
              <div className="flex flex-wrap gap-3 font-medium">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative">
              
              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />

              <MotionImg
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={`${baseUrl}portfoliopic.jpg`}
                alt="Nandan Reddy"
                className="relative w-80 md:w-96 rounded-3xl object-cover shadow-2xl border border-border"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
