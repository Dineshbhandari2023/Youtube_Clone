"use client";

import { trpc } from "@/trpc/client";

interface CategorySectionProps {
  categoryId?: string;
}

const CategoriesSection = () => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  return <div></div>;
};

export default CategoriesSection;
