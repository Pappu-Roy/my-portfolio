"use client";
import { motion } from "framer-motion";
import { FaYoutube, FaUsers, FaBriefcase } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";

// 1. Define the data type (Interface)
interface Activity {
  id: number;
  role: string;
  organization: string;
  duration: string;
  description: string;
  icon: IconType;
  color: string;
  bgColor: string;
  link: string | null;
}

// 2. Activities data array
const activities: Activity[] = [
  {
    id: 1,
    role: "Online Teacher",
    organization: "Pappu's Classroom",
    duration: "2024 - Present",
    description:
      "I regularly create educational content on HSC ICT, technology and programming.",
    icon: FaYoutube,
    color: "text-red-500",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
    link: "https://youtube.com/@PappusClassroom",
  },
  {
    id: 2,
    role: "Joint Secretary",
    organization: "Thakurgaon Association, SUST",
    duration: "2023 - 2025",
    description:
      "Successfully managed various organizational events, seminars, and team coordination. I was responsible for maintaining effective communication and collaboration with members.",
    icon: FaUsers,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10 dark:bg-violet-500/20",
    link: null,
  },
  {
    id: 3,
    role: "Assistant Office Secretary",
    organization: "Rangpur Divisional Student Association",
    duration: "2022 - 2023",
    description:
      "Assisted with daily administrative tasks, data entry, and office management. This experience helped me understand professional work environments and organizational workflows.",
    icon: FaBriefcase,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10 dark:bg-teal-500/20",
    link: null,
  },
];

export default function ExtraCurricular() {
  return (
    <section id="activities" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Beyond Coding
          </p>
          <h2 className="text-4xl font-black">
            Extra Curricular <span className="text-primary">Activities</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Beyond programming, I enjoy being involved in various social and organizational activities.
            Leadership and building meaningful initiatives are among my key interests.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, i) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 flex flex-col h-full"
              >
                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${activity.bgColor} ${activity.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="text-2xl" />
                  </div>
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400 text-xs font-bold rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                    {activity.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {activity.role}
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-4">
                    {activity.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-justify">
                    {activity.description}
                  </p>
                </div>

                {/* Link */}
                {activity.link && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                      Visit Channel <FiExternalLink />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}