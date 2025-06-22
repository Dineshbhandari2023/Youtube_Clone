import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "../components/home-navbar";

interface HomelayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomelayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavBar />
        <div className="flex min-h-screen pt-[4rem]">{children}</div>
      </div>
    </SidebarProvider>
  );
};
