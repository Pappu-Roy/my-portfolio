"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Settings() {
  const [name, setName] = useState("Pappu Roy");
  const [image, setImage] = useState("/profile.png");

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully! (Database logic will be added next)");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
        <div>
          <h1 className="text-3xl font-black">Account <span className="text-primary">Settings</span></h1>
          <p className="text-slate-500">Change the profile info.</p>
        </div>

        <form onSubmit={handleUpdate} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div className="flex items-center gap-6 mb-8">
             <div className="w-24 h-24 rounded-full border-4 border-primary/30 overflow-hidden">
                <img src={image} alt="preview" className="w-full h-full object-cover" />
             </div>
             <button type="button" className="text-sm font-bold text-primary underline">Change Photo</button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Display Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Profile Image URL</label>
              <input 
                type="text" 
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-primary"
              />
            </div>
          </div>

          <button className="w-full py-4 bg-primary text-white dark:text-background font-bold rounded-2xl hover:scale-[1.02] transition-all">
            Save Changes
          </button>
        </form>
      </motion.div>
    </div>
  );
}