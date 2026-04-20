"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  const isDashboardArea = pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (isDashboardArea) return null;

  return <Navbar />;
}