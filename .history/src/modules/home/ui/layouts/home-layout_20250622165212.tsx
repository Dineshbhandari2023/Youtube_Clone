import React from "react";

interface HomelayoutProps {
  children: React.ReactNode;
}

export const Homelayout = ({ children }: HomelayoutProps) => {
  return (
    <div>
      <p>Home Navbar</p>
      {children}
    </div>
  );
};
