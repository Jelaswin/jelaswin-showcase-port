import { motion } from "framer-motion";
import { User, MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Turning Ideas into <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I am a passionate Computer Science student with hands-on experience in web development, frontend design, and programming. I have completed internships in web development and built multiple academic and freelance projects including web applications and Java/Python systems. I enjoy creating responsive, user-friendly interfaces and solving real-world problems through code.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: User, label: "Full Stack Developer", desc: "Web & Software" },
              { icon: MapPin, label: "Kanniyakumari", desc: "Tamil Nadu, India" },
              { icon: GraduationCap, label: "CS Student", desc: "B.Tech / B.E." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-card p-6 rounded-2xl glow-hover transition-all duration-300">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground">{label}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
