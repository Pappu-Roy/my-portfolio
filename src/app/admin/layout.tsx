"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiGrid, FiLayers, FiMessageSquare, FiSettings, FiLogOut, FiSun, FiMoon } from "react-icons/fi";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // হাইড্রেশন এরর এড়ানোর জন্য
  useEffect(() => setMounted(true), []);

  if (pathname === "/admin/login") return <>{children}</>;

  const menuItems = [
    { name: "Dashboard", icon: <FiGrid />, path: "/admin/dashboard" },
    { name: "Projects", icon: <FiLayers />, path: "/admin/projects" },
    { name: "Messages", icon: <FiMessageSquare />, path: "/admin/messages" },
    { name: "Settings", icon: <FiSettings />, path: "/admin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-[#020617] transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-8 text-2xl font-black tracking-tighter border-b border-gray-100 dark:border-gray-800">
          CORE<span className="text-primary">PANEL</span>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                pathname === item.path 
                ? "bg-primary/10 text-primary shadow-sm" 
                : "text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-100 dark:border-gray-800">
          <button 
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-10 sticky top-0 z-10">
          <h2 className="font-bold text-slate-400 uppercase tracking-widest text-xs hidden sm:block">
            Overview / {pathname.split("/").pop()}
          </h2>
          
          <div className="flex items-center gap-6 ml-auto">
             {/* Dark Mode Toggle Button */}
             {mounted && (
               <button 
                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                 className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-all"
               >
                 {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
               </button>
             )}

             {/* Profile Info */}
             <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Pappu Roy</p>
                <p className="text-[10px] text-primary font-bold uppercase">Super Admin</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary overflow-hidden">
                <img src="/profile.png" alt="admin" className="object-cover w-full h-full" />
             </div>
          </div>
        </header>

        <main className="p-10 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}