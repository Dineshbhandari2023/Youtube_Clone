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
            <Image alt="Logo" height={32} width={32} src={Logo} />
            <p>YouTube</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
