"use client";
import { motion } from "framer-motion";
import { SiCodeforces, SiLeetcode, SiCodechef} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const codingProfiles = [
  {
    platform: "Codeforces",
    username: "@Ppp...",
    icon: SiCodeforces,
    color: "text-blue-500",
    bgGlow: "group-hover:shadow-blue-500/20",
    borderHover: "hover:border-blue-500/50",
    stats: [
      { label: "Max Rating", value: "1444" },
      { label: "Rank", value: "Specialist" },
      { label: "Solved", value: "850+" },
    ],
    link: "https://codeforces.com/profile/Ppp...",
  },
  {
    platform: "LeetCode",
    username: "@pappuroy_dev",
    icon: SiLeetcode,
    color: "text-yellow-500",
    bgGlow: "group-hover:shadow-yellow-500/20",
    borderHover: "hover:border-yellow-500/50",
    stats: [
      { label: "Rating", value: "1620" },
      { label: "Solved", value: "450+" },
      { label: "Badges", value: "3" },
    ],
    link: "https://leetcode.com/",
  },
  {
    platform: "CodeChef",
    username: "@pappu_coder",
    icon: SiCodechef,
    color: "text-orange-500",
    bgGlow: "group-hover:shadow-orange-500/20",
    borderHover: "hover:border-orange-500/50",
    stats: [
      { label: "Max Rating", value: "1750" },
      { label: "Stars", value: "3★" },
      { label: "Solved", value: "200+" },
    ],
    link: "https://www.codechef.com/",
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Problem Solving</p>
          <h2 className="text-4xl font-black">Coding <span className="text-primary">Profiles</span></h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            I actively solve problems on various competitive programming platforms. I am passionate about working with algorithms and data structures, continuously improving my problem-solving skills.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingProfiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${profile.borderHover} ${profile.bgGlow}`}
              >
                {/* Top Section: Icon & Platform Name */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 ${profile.color}`}>
                      <Icon className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{profile.platform}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{profile.username}</p>
                    </div>
                  </div>
                  
                  {/* External Link Icon */}
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors p-2"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-2">
                  {profile.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
                
                {/* Bottom Glow Line (Optional touch of premium feel) */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-current ${profile.color} transition-all duration-300 group-hover:w-1/2 rounded-t-full opacity-50`} />
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}