"use client";

import { trpc } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export const VideosSection = () => {
  <Suspense>
    <ErrorBoundary fallback={<p>Error..</p>}>
      <VideosSectionSuspense />
    </ErrorBoundary>
  </Suspense>;
};

export const VideosSectionSuspense = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return <div>{JSON.stringify(data)}</div>;
};
