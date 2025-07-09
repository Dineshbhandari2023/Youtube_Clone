"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

interface CategorySectionProps {
  categoryId?: string;
}

const CategoriesSection = ({ categoryId }: CategorySectionProps) => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategorySectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const data = categories.map(({name, id})=>{
    value:id,
    label: name,
  })

  return <FilterCarousel value={categoryId} data={categories} />;
};

export default CategoriesSection;
