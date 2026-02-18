import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const MotionDiv = motion.div;

const projects = [
  {
    title: "Movie website",
    description:
      "A dynamic movie database with personalized recommendations, watchlists, and user reviews.",
    image: "/Projects/project1.png",
    tags: ["React", "Tailwind CSS", "TMDB API", "React Router"],
    link: "https://imdb-clone-c36dlrweq-nandan-reddys-projects-5b1b1350.vercel.app/",
    github: "https://github.com/nandan099/IMDB-Clone",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack commerce solution with secure payments, inventory system, and analytics.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "https://imdb-clone-c36dlrweq-nandan-reddys-projects-5b1b1350.vercel.app/",
    github: "",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-linear-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Selected work that delivers results.
          </h2>

          <p className="text-muted-foreground mt-6 text-lg">
            These are a few projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                  <a
                    href={project.link}
                    className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-5">

                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </MotionDiv>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <AnimatedBorderButton href="https://github.com/nandan099?tab=repositories" className="flex items-center gap-2">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>

      </div>
    </section>
  );
};
