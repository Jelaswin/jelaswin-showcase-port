import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend Web Development Intern",
    company: "CodTech IT Solutions",
    period: "May – Jun 2025",
    description: "Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap; collaborated via Git/GitHub.",
  },
  {
    role: "Web Development Intern",
    company: "CodTech IT Solutions",
    period: "Aug – Sep 2024",
    description: "Assisted in building web applications and optimizing frontend performance following best practices.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-3">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background" />

                <div className="glass-card p-6 rounded-2xl glow-hover transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-heading font-semibold text-foreground">{exp.role}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
