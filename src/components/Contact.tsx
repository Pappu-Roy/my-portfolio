"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-gray-500">
          Feel free to reach out for any questions, collaboration, or project opportunities.
        </p>
      </div>

      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-primary outline-none transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-primary outline-none transition-all"
          />
        </div>

        <textarea
          placeholder="Write your message..."
          rows={5}
          className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-primary outline-none transition-all"
        ></textarea>

        <button className="w-full py-4 bg-primary text-white dark:text-background font-bold rounded-xl hover:brightness-110 transition-all">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}