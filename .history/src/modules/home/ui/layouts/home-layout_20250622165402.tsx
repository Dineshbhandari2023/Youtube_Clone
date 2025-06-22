interface HomelayoutProps {
  children: React.ReactNode;
}

export const Homelayout = ({ children }: HomelayoutProps) => {
  return (
    <div>
      <nav>
        <p>Home Navbar</p>
      </nav>
      {children}
    </div>
  );
};
