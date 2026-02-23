import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading font-semibold mb-3 tracking-wider text-sm uppercase">
            Full Stack / Web Developer
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Jelaswin J</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            A passionate Computer Science student crafting responsive, user-friendly web experiences from Kanniyakumari, Tamil Nadu, India.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-xl border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/Jelaswin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/jelaswin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:jelaswin06@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border glow-primary">
              <img
                src={avatarPlaceholder}
                alt="Jelaswin J - Developer portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl text-sm font-heading font-semibold"
            >
              🚀 Web Dev
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl text-sm font-heading font-semibold"
            >
              💻 CS Student
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
