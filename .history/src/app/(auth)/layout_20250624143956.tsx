interface LayoutProps {
  children: React.ReactNode;
}

export const layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};
