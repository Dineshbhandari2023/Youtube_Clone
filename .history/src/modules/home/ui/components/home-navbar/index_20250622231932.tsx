import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../../../public/logo.jpg";

export const HomeNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex items-center flex-shrinks-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1">
              <Image alt="Logo" height={32} width={32} src={Logo} />
              <p className="text-xl font-bold tracking-tight">YouTube</p>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto"></div>
      </div>
    </nav>
  );
};
