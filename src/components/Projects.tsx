"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  position: number;
  status: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        const active = data.filter((p: Project) => p.status === "Active");
        setProjects(active);
      })
      .catch(err => console.error("Projects fetch error:", err));
  }, []);

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-8">
      <div className="mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Portfolio</p>
        <h2 className="text-4xl font-black">Latest <span className="text-primary">Projects</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 group shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300"
          >
            <div className="h-52 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600 text-5xl font-black">
                  {project.title.charAt(0)}
                </div>
              )}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-gray-400 text-[10px] font-bold rounded-full">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-black mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-primary hover:opacity-80 transition-opacity">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-400 hover:text-primary transition-colors">
                    <FiGithub /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No projects to show yet.</p>
        </div>
      )}
    </section>
  );
}