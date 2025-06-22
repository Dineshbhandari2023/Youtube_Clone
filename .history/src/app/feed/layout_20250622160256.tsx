interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="bg-blue-400 w-8">I am NavBar</nav>
      <div>{children}</div>
    </>
  );
};

export default layout;
