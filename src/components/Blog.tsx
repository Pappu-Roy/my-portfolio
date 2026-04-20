"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface BlogPost {
  id: number;
  title: string;
  desc: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function Blog() {
  const blogs: BlogPost[] = [
    {
      id: 1,
      title: "How to master Next.js in 2026",
      desc: "Next.js এর লেটেস্ট ফিচার এবং v15 এর আপডেট নিয়ে বিস্তারিত আলোচনা। ফ্রন্টএন্ড ডেভেলপমেন্টের ভবিষ্যৎ জানুন।",
      date: "April 10, 2026",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      slug: "master-nextjs-2026",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS v4",
      desc: "Tailwind CSS এর নতুন v4 ইঞ্জিন এবং এর অবিশ্বাস্য পারফরম্যান্স নিয়ে জানুন। কীভাবে দ্রুত রেস্পন্সিভ ডিজাইন করবেন শিখুন।",
      date: "April 05, 2026",
      category: "Design",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
      slug: "mastering-tailwind-v4",
    }
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">My Journal</p>
            <h2 className="text-4xl font-black">Latest <span className="text-primary">Articles</span></h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg text-sm">
              Explore the latest insights, updates, and my personal experiences in web development, programming, and the world of technology.
            </p>
          </div>
          
          {/* View All Posts Button - Linked to /blogs */}
          <Link href="/blogs" className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-full hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all shadow-sm hover:shadow-md">
            View All Posts
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row h-full">
                
                {/* Blog Image */}
                <div className="md:w-[45%] h-64 md:h-auto relative overflow-hidden m-2 rounded-3xl">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-lg">
                    {blog.category}
                  </div>
                  
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Blog Content */}
                <div className="p-6 md:p-8 md:w-[55%] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{blog.date}</span>
                  </div>
                  
                  <Link href={`/blogs/${blog.slug}`} className="block">
                    <h3 className="text-2xl font-black mt-1 mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-snug">
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-3">
                    {blog.desc}
                  </p>
                  
                  <Link 
                    href={`/blogs/${blog.slug}`} 
                    className="mt-auto inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 transition-colors w-max"
                  >
                    Read Article 
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}