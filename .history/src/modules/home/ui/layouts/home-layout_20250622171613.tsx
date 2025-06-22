import { SidebarProvider } from "@/components/ui/sidebar";

interface HomelayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomelayoutProps) => {
  return (
    <SidebarProvider>
      <div className="p-4 bg-blue-400">
        <p className="">Home Navbar</p>
      </div>
      {children}
    </SidebarProvider>
  );
};
