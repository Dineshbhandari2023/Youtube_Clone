import { HomeLayout } from "@/modules/studio/ui/layouts/studio-layout";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default layout;
