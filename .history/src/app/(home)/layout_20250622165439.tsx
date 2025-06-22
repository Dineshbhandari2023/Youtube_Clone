import { Homelayout } from "@/modules/home/ui/layouts/home-layout";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <div>{children}</div>;
};

export default layout;
