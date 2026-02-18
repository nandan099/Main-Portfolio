import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building scalable, maintainable systems with modern best practices.",
  },
  {
    icon: Rocket,
    title: "High Performance",
    description:
      "Optimizing applications for speed, efficiency, and smooth UX.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Communicating effectively with designers, developers, and stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always evolving with new technologies and industry standards.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-linear-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Engineering digital products
              <span className="block text-primary">that scale & perform.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-foreground font-semibold">
                  Nandan Reddy
                </span>
                , I'm a passionate software engineer crafting digital products
                that make a difference. My journey started with a curiosity for
                how things work on the web, and it has evolved into a deep
                expertise in modern frontend technologies.
              </p>

              <p>
                I specialize in React, JavaScript, and Node.js, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>

              <p>
                My goal is simple: deliver clean code, meaningful impact, and
                production-ready solutions that solve real problems.
              </p>
            </div>
          </div>



          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <MotionDiv
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 rounded-2xl border border-border bg-background shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

