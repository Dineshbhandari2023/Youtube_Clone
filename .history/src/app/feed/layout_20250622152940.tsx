interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <p>Layout</p>
    </div>
  );
};

export default layout;
