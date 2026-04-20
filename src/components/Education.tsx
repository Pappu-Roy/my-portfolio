"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const educations = [
  {
    year: "2020 - 2025",
    degree: "B.Sc(Engg.) in Computer Science & Engineering",
    institute: "Shahjalal University of Science and Technology (SUST)",
    location: "Sylhet, Bangladesh",
    grade: "CGPA: 3.20 / 4.00",
    description:
      "Focused on Algorithms, Data Structures, Machine Learning, Cloud Computing and modern web technologies. As part of my final year project, I developed a Deep Learning based Voice Recognition project.",
    highlights: ["Machine Learning","Algorithms", "Web Engineering", "Database Design", "Cloud Computing" ],
  },
  {
    year: "2017 - 2019",
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Pirganj Govt. College",
    location: "Thakurgaon, Bangladesh",
    grade: "GPA: 5.00 / 5.00",
    description:
      "Completed Higher Secondary education in the Science stream with excellent academic performance. Developed a strong interest in mathematics and programming, which led me to pursue a career in computer science & engineering.",
    highlights: ["Science", "Higher Mathematics", "ICT", "Physics"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-8">

        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Learning Path</p>
          <h2 className="text-4xl font-black">Education <span className="text-primary">Background</span></h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (Left side like Experience) */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          <div className="space-y-10 w-full">
            {educations.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Icon bubble */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                  <FaGraduationCap className="text-white text-xl" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-7 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">

                    {/* LEFT */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-black break-words">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-bold mt-0.5 break-words">
                        {edu.institute}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-start sm:items-end gap-1.5 text-left sm:text-right shrink-0 w-auto">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                        {edu.year}
                      </span>
                      <div className="text-xs text-gray-400 font-medium leading-tight mt-1">
                        <div className="mb-0.5">📍 {edu.location}</div>
                        <div className="text-primary/70 font-bold">{edu.grade}</div>
                      </div>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                    {edu.description}
                  </p>

                  {/* Highlights/Tags */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(highlight => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-white dark:bg-slate-800 text-xs font-bold rounded-lg text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 shadow-sm"
                      >
                        {highlight}
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