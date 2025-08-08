"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface VideoSectionProps {
  videoId: string;
}

export const VideoSection = ({ videoId }: VideoSectionProps) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <VideoSectionSuspense videoId={videoId} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

const VideoSectionSuspense = ({ videoId }: VideoSectionProps) => {
  const [data] = trpc.videos.getOne.useSuspenseQuery({ id: videoId });
  return <div>Video suspense</div>;
};
