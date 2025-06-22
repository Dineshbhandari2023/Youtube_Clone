interface HomelayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomelayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-blue-400">
        <p className="">Home Navbar</p>
      </div>
      {children}
    </div>
  );
};
