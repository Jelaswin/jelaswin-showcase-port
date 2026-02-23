import { motion } from "framer-motion";
import { ExternalLink, Globe, Shield, Banknote, Coffee } from "lucide-react";

const projects = [
  {
    title: "Job Portal Web Application",
    description: "Full-stack job portal using Flask and MySQL with role-based authentication, job posting, and application management.",
    tags: ["Flask", "MySQL", "Python", "Auth"],
    icon: Globe,
  },
  {
    title: "Cybersecurity Quiz App",
    description: "Interactive JavaScript quiz app with dynamic scoring, answer validation, and responsive UI.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    icon: Shield,
  },
  {
    title: "Banking Management System",
    description: "Java console application simulating banking operations with OOP and exception handling.",
    tags: ["Java", "OOP", "Console"],
    icon: Banknote,
  },
  {
    title: "Coffee Shop Management System",
    description: "Python console app for menu management, order processing, and billing automation.",
    tags: ["Python", "Console", "Automation"],
    icon: Coffee,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 rounded-2xl glow-hover transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
