"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const socials = [
  { icon: FaFacebookF, href: "https://web.facebook.com/likerboypappu.roy/" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/pappu-roy-6526192a1/" },
  { icon: FaGithub, href: "https://github.com/Pappu-Roy" },
  { icon: FaTwitter, href: "#" },
];

const stats = [
  { n: "1+", t: "Years Experience" },
  { n: "10+", t: "Projects Done" },
  { n: "15+", t: "Skills Mastered" },
  { n: "10+", t: "Happy Clients" },
];

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative max-w-7xl mx-auto px-8 py-12 flex flex-col min-h-[calc(100vh-80px)] justify-center overflow-hidden"
    >
      {/* ── Animated Background Blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full bg-cyan-400/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-pink-400/15 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], x: [0, -20, 0], y: [0, -30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-teal-400/15 blur-[100px]"
        />
      </div>

      {/* ── Main Grid ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* ── Image Section (Left on Desktop) ── */}
        <div className="relative flex justify-center order-2 md:order-1">
          {/* Spinning Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] rounded-full border-2 border-dashed border-cyan-400/50"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] rounded-full border border-violet-400/30"
          />

          {/* Soft Background Glow */}
          <div className="absolute w-80 h-80 bg-cyan-400/20 rounded-full blur-[90px] -translate-x-6" />

          {/* Profile Image (No Border, No Glow) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="relative w-[320px] h-[400px] rounded-[40px] overflow-hidden bg-transparent">
              <Image
                src="/profile.png"
                alt="Pappu Roy"
                fill
                className="object-cover rounded-[40px] bg-transparent"
                priority
              />
            </div>
          </motion.div>

          {/* Floating Dots */}
          {[
            { top: "8%", left: "12%", size: "w-3 h-3", color: "bg-cyan-400", delay: 0 },
            { top: "18%", right: "10%", size: "w-2 h-2", color: "bg-pink-400", delay: 0.6 },
            { bottom: "12%", left: "8%", size: "w-2 h-2", color: "bg-violet-400", delay: 1.2 },
            { bottom: "20%", right: "15%", size: "w-3 h-3", color: "bg-teal-400", delay: 1.8 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
              className={`absolute ${dot.size} ${dot.color} rounded-full blur-[2px]`}
              style={{ 
                top: dot.top, 
                left: dot.left, 
                right: dot.right, 
                bottom: dot.bottom 
              }}
            />
          ))}
        </div>

        {/* ── Text Section (Right on Desktop) ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 order-1 md:order-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for opportunity!
          </div>

          <div>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">Hello, I'm</p>
            <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Pappu Roy
            </h1>
          </div>

          <h2 className="text-2xl font-bold flex flex-wrap gap-3 items-center">
            <span className="text-gray-600 dark:text-gray-300">I'm a</span>
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              <Typewriter
                options={{
                  strings: ['Software Engineer', 'Web Developer', 'Learner'],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed text-[15px]">
            I am a professional Software Engineer focused on building high-performance, scalable, 
            and user-friendly web applications using modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"           
                rel="noopener noreferrer" 
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-3 border border-primary/40 text-primary rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-pointer"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/30 hover:brightness-110 transition-all cursor-pointer inline-block text-center"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-primary text-primary font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer inline-block text-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Stats Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="cursor-default"
          >
            <h4 className="text-4xl font-black bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
              {s.n}
            </h4>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-2">{s.t}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}