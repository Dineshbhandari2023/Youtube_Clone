"use client";

import { trpc } from "@/trpc/client";

interface CategorySectionProps {
  categoryId?: string;
}

const CategoriesSection = ({ categoryId }: CategorySectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  return <div>{JSON.stringify(categories)}</div>;
};

export default CategoriesSection;
