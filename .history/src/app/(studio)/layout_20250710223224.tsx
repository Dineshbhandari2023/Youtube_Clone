import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <StudioLayout>{children}</StudioLayout>;
};

export default layout;
