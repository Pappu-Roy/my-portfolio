"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid credentials!");
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0b1120] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Admin <span className="text-primary">Login</span></h1>
          <p className="text-gray-500 text-sm mt-2">Login to admin panel</p>
        </div>

        {error && <p className="text-red-500 text-center mb-4 text-sm font-medium">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-primary"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              required
              className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-primary"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full py-4 bg-primary text-white dark:text-background font-bold rounded-xl hover:brightness-110 transition-all">
            Login Now
          </button>
        </form>
      </motion.div>
    </div>
  );
}