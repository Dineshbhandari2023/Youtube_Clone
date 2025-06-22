import { SidebarProvider } from "@/components/ui/sidebar";

interface HomelayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomelayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <p className="">Home Navbar</p>
      </div>
      {children}
    </SidebarProvider>
  );
};
