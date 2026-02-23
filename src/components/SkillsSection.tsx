import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", color: "from-orange-500 to-orange-600" },
  { name: "CSS3", color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-500" },
  { name: "Bootstrap", color: "from-purple-500 to-purple-600" },
  { name: "Flask", color: "from-gray-400 to-gray-500" },
  { name: "MySQL", color: "from-sky-500 to-sky-600" },
  { name: "Java", color: "from-red-500 to-red-600" },
  { name: "Python", color: "from-green-500 to-green-600" },
  { name: "Git", color: "from-orange-600 to-red-500" },
  { name: "GitHub", color: "from-gray-500 to-gray-600" },
  { name: "Responsive Design", color: "from-teal-400 to-teal-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-3">Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card p-5 rounded-2xl text-center glow-hover transition-shadow duration-300 cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} mx-auto mb-3 flex items-center justify-center text-white font-heading font-bold text-xs`}>
                {skill.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="text-foreground text-sm font-medium font-heading">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
