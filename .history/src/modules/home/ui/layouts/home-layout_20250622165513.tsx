interface HomelayoutProps {
  children: React.ReactNode;
}

export const Homelayout = ({ children }: HomelayoutProps) => {
  return (
    <div>
      <nav className="p-2 bg-blue-400">
        <p>Home Navbar</p>
      </nav>
      {children}
    </div>
  );
};
