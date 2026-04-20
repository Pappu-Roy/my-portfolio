"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiNextdotjs, SiMongodb, SiTailwindcss, SiNodedotjs,
  SiReact, SiTypescript, SiGit, SiFirebase,
  SiPhp, SiLaravel, SiVuedotjs, SiMysql, SiBootstrap,
  SiC, SiCplusplus, SiPython
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Java এর জন্য FontAwesome আইকন

// TypeScript Interfaces
interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface Stat {
  value: string;
  label: string;
}

// আপনার সম্পূর্ণ স্কিল সেট
const skills: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "C", icon: SiC, color: "text-blue-600" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
];

const stats: Stat[] = [
  { value: "01+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "10+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-8">
      <div className="mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Who I Am</p>
        <h2 className="text-4xl font-black">About <span className="text-primary">Me</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left - Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 sticky top-24"
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            I am a passionate Software Engineer with a strong interest in modern web technologies. I specialize in building dynamic, scalable, 
            and high-performance applications using tools like Laravel, Next.js, ReactJS, Vue.js, Tailwind CSS, Bootstrap and MongoDB/MySQL.
          </p>

          {/* Stats */}
          <div className="flex gap-4 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 min-w-[100px] p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center"
              >
                <h4 className="text-3xl font-black text-primary">{stat.value}</h4>
                <p className="text-xs uppercase font-bold text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Skills Grid (Updated for more items) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Tech Stack & Languages</p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default"
              >
                <skill.icon className={`text-3xl md:text-4xl ${skill.color}`} />
                <p className="text-[10px] sm:text-xs font-bold text-center mt-1">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}