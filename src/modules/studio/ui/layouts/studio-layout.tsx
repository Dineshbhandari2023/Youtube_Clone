import { SidebarProvider } from "@/components/ui/sidebar";
import { StudioNavBar } from "../components/studio-navbar";
import { StudioSideBar } from "../components/studio-sidebar";

interface StudiolayoutProps {
  children: React.ReactNode;
}

export const StudioLayout = ({ children }: StudiolayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <StudioNavBar />
        <div className="flex min-h-screen pt-[4rem]">
          <StudioSideBar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
