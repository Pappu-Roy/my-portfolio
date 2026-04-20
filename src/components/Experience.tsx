"use client";
import { motion } from "framer-motion";
import { BsBriefcaseFill } from "react-icons/bs";

const experiences = [
  {
    year: "December, 2025 - Present",
    role: "Software Engineer",
    company: "Mohasagor IT Solutions",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Currently working as a Software Engineer, developing and maintaining scalable web applications using PHP, Laravel, Vue.js, and MySQL. I am responsible for building efficient backend systems, integrating RESTful APIs, and creating dynamic, user-friendly frontend interfaces. I focus on writing clean, maintainable code and continuously improving application performance and user experience.",
    skills: ["PHP", "Laravel", "Vue.js", "MySQL"],
  },
  {
    year: "October, 2025 - December, 2025",
    role: "Software Engineer Intern",
    company: "Mohasagor IT Solutions",
    location: "Dhaka, Bangladesh",
    type: "Intern",
    description: "Worked as a Software Engineer Intern, where I gained hands-on experience in web development using PHP, Laravel, Vue.js, and MySQL. Assisted in developing backend features, fixing bugs, and implementing new functionalities. Collaborated with the development team to understand real-world software development workflows and best practices.",
    skills: ["PHP", "Laravel", "Vue.js", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-8">

        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Career</p>
          <h2 className="text-4xl font-black">Work <span className="text-primary">Experience</span></h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Icon bubble */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <BsBriefcaseFill className="text-white text-lg" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-7 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black">{exp.role}</h3>
                      <p className="text-primary font-bold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                        {exp.year}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>📍 {exp.location}</span>
                        <span>• {exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-lg text-gray-600 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}