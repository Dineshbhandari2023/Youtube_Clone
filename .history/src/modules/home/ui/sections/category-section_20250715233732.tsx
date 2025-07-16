"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

interface CategorySectionProps {
  categoryId?: string;
}

const CategoriesSection = ({ categoryId }: CategorySectionProps) => {
  return (
    <Suspense
      fallback={<FilterCarousel isLoading data={[]} onSelect={() => {}} />}
    >
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategorySectionProps) => {
  const router = useRouter();
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const data = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());
  };

  return <FilterCarousel value={categoryId} data={data} onSelect={onSelect} />;
};

export default CategoriesSection;
