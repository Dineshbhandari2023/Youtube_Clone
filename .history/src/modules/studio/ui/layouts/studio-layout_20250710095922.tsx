import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "../components/home-navbar";
import { HomeSideBar } from "../components/home-sidebar";

interface StudiolayoutProps {
  children: React.ReactNode;
}

export const StudioLayout = ({ children }: StudiolayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavBar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSideBar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
