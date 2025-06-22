interface HomelayoutProps {
  children: React.ReactNode;
}

export const Homelayout = ({ children }: HomelayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-blue-400">
        <p className="p-2 bg-blue-400">Home Navbar</p>
      </div>
      {children}
    </div>
  );
};
