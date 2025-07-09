import React from "react";

interface HomeViewProps {
  categoryId?: string;
}

const HomeView = ({ categoryId }: HomeViewProps) => {
  return <div className="max-w-[2400px] mx-auto mb-10 px-4"></div>;
};

export default HomeView;
