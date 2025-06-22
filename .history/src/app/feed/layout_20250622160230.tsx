interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav>I am NavBar</nav>
      <div>{children}</div>
    </>
  );
};

export default layout;
